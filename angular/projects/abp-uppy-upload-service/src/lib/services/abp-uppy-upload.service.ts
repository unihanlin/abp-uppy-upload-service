import { ApiInterceptor, EnvironmentService, LocalizationService } from '@abp/ng.core';
import { ConfirmationService } from '@abp/ng.theme.shared';
import { HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Uppy, UppyFile } from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { UppyRest } from '../models';

/* tslint:disable:no-string-literal */
@Injectable({
  providedIn: 'root',
})
export class AbpUppyUploadService implements OnDestroy {
  uppys: Record<string, Uppy> = {};
  uppyParent2Children: Record<string, string[]> = {};

  resource: { [key: string]: string };

  filesAlreadyChecked = false;

  subscriptions: Subscription[] = [];

  constructor(
    private localization: LocalizationService,
    private apiInterceptor: ApiInterceptor,
    private environmentService: EnvironmentService,
    private httpXsrfToken: HttpXsrfTokenExtractor,
    private confirmation: ConfirmationService
  ) {}

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.forEach(s => s.unsubscribe());
    }
  }

  onBeforeUpload = (files: { [key: string]: UppyFile<{}, {}> }) => {
    if (this.filesAlreadyChecked) {
      return true;
    }
  };

  cancelModal = uppyContainerKey => {
    const uppy = this.uppys[uppyContainerKey];
    uppy.cancelAll();
    const dashboard = uppy.getPlugin('Dashboard') as Dashboard;
    if (dashboard && dashboard.isModalOpen()) {
      dashboard.closeModal();
    }
  };

  initUppy(
    trigger: UppyRest.Trigger,
    config: UppyRest.Config,
    xhr?: UppyRest.Xhr,
    restrictions?: UppyRest.Restrictions,
    params?: UppyRest.Params,
    uploadSuccessCallBack?: (file: UppyFile<{}, {}>, result: any) => void
  ) {
    const headerName = `${config.apiName}_XSRF_HEADER_NAME`;
    const headers = this.apiInterceptor.getAdditionalHeaders();
    headers[headerName] = this.httpXsrfToken.getToken();
    this.subscriptions.push(
      this.localization
        .getResource$('AbpUppyUploadService')
        .pipe(take(1))
        .subscribe(resource => {
          this.resource = resource;
          let uppyParentContainerKey = structuredClone(trigger);
          let uppyContainerKey = structuredClone(uppyParentContainerKey);
          if (params && Object.keys(params).length > 0)
            uppyContainerKey += '_' + JSON.stringify(params);

          if (!this.uppyParent2Children[uppyParentContainerKey])
            this.uppyParent2Children[uppyParentContainerKey] = [];

          if (this.uppyParent2Children[uppyParentContainerKey].indexOf(uppyContainerKey) === -1)
            this.uppyParent2Children[uppyParentContainerKey].push(uppyContainerKey);

          // Remove plugins of uppy instances
          this.uppyParent2Children[uppyParentContainerKey].forEach(k => {
            const uppyInstance = this.uppys[k];
            if (uppyInstance) {
              let dashboard = uppyInstance.getPlugin('Dashboard');
              if (dashboard) uppyInstance.removePlugin(dashboard);
              let xhrUpload = uppyInstance.getPlugin('XHRUpload');
              if (xhrUpload) uppyInstance.removePlugin(xhrUpload);
            }
          });

          if (!this.uppys[uppyContainerKey]) {
            this.uppys[uppyContainerKey] = new Uppy({
              restrictions: {
                maxFileSize: restrictions?.maxFileSize,
                minFileSize: restrictions?.minFileSize,
                maxTotalFileSize: restrictions?.maxTotalFileSize,
                maxNumberOfFiles: restrictions?.maxNumberOfFiles,
                minNumberOfFiles: restrictions?.minNumberOfFiles,
                allowedFileTypes: restrictions?.allowedFileTypes,
              },
              meta: params || {},
            });

            this.uppys[uppyContainerKey]
              .on('upload-success', (file: UppyFile<{}, {}>, response) => {
                if (uploadSuccessCallBack) {
                  uploadSuccessCallBack(file, response.body);
                }
              })
              .on('upload-error', (file: UppyFile<{}, {}>, error, response) => {
                console.error('upload-error', error);
                if (!response || !response.body) return;
                const coreError = response.body.error;
                this.confirmation
                  .error(
                    coreError.details || coreError.message,
                    coreError.details ? coreError.message || 'AbpUi::Error' : 'AbpUi::Error',
                    {
                      hideCancelBtn: true,
                      yesText: 'AbpUi::Ok',
                    }
                  )
                  .subscribe(() => this.cancelModal(uppyContainerKey));
              });
          }

          let defaultFieldName = 'file';
          if (xhr?.bundle ?? false) defaultFieldName += 's';

          this.uppys[uppyContainerKey]
            .use(Dashboard, {
              trigger: trigger,
              inline: false,
              target: 'body',
              metaFields: [
                {
                  id: 'name',
                  name: resource['Name'],
                  placeholder: resource['FileName'],
                },
              ],
              browserBackButtonClose: true,
              proudlyDisplayPoweredByUppy: false,
              onRequestCloseModal: () => this.cancelModal(uppyContainerKey),
              locale: {
                strings: this.getTranslations(),
              },
            })
            .use(XHRUpload, {
              endpoint: this.getRawApiUrl(config.apiName, config.url),
              formData: xhr?.formData ?? true,
              bundle: xhr?.bundle ?? false,
              fieldName: xhr?.fieldName || defaultFieldName,
              headers: { ...headers },
              timeout: xhr?.timeout ?? 30 * 1000,
            });
        })
    );
  }

  private getRawApiUrl(apiName: string, apiUrl: string) {
    return this.environmentService.getApiUrl(apiName) + apiUrl;
  }

  private getTranslations() {
    return {
      closeModal: this.resource['CloseModal'],
      addMoreFiles: this.resource['AddMoreFiles'],
      addingMoreFiles: this.resource['AddingMoreFiles'],
      importFrom: this.resource['ImportFrom'],
      dashboardWindowTitle: this.resource['DashboardWindowTitle'],
      dashboardTitle: this.resource['DashboardTitle'],
      copyLinkToClipboardSuccess: this.resource['CopyLinkToClipboardSuccess'],
      copyLinkToClipboardFallback: this.resource['CopyLinkToClipboardFallback'],
      copyLink: this.resource['CopyLink'],
      fileSource: this.resource['FileSource'],
      done: this.resource['Done'],
      back: this.resource['Back'],
      removeFile: this.resource['RemoveFile'],
      editFile: this.resource['EditFile'],
      editing: this.resource['Editing'],
      edit: this.resource['Edit'],
      finishEditingFile: this.resource['FinishEditingFile'],
      saveChanges: this.resource['SaveChanges'],
      myDevice: this.resource['MyDevice'],
      dropPasteImport: this.resource['DropPasteImport'],
      dropPaste: this.resource['DropPaste'],
      dropHint: this.resource['DropHint'],
      browse: this.resource['Browse'],
      uploadComplete: this.resource['UploadComplete'],
      uploadPaused: this.resource['UploadPaused'],
      resumeUpload: this.resource['ResumeUpload'],
      pauseUpload: this.resource['PauseUpload'],
      retryUpload: this.resource['RetryUpload'],
      cancelUpload: this.resource['CancelUpload'],

      xFilesSelected: {
        0: this.resource['FileSelected'],
        1: this.resource['NFileSelected'],
      },
      uploadingXFiles: {
        0: this.resource['UploadingFile'],
        1: this.resource['NUploadingFile'],
      },
      processingXFiles: {
        0: this.resource['ProcessingFile'],
        1: this.resource['NProcessingFile'],
      },

      uploading: this.resource['Uploading'],
      complete: this.resource['Complete'],

      uploadFailed: this.resource['UploadFailed'],
      paused: this.resource['Paused'],
      retry: this.resource['Retry'],
      cancel: this.resource['Cancel'],

      filesUploadedOfTotal: {
        0: this.resource['FileUploadedOfTotal'],
        1: this.resource['NFileUploadedOfTotal'],
      },

      dataUploadedOfTotal: this.resource['DataUploadedOfTotal'],

      xTimeLeft: this.resource['XTimeLeft'],

      uploadXFiles: {
        0: this.resource['UploadFile'],
        1: this.resource['UploadXFiles'],
      },

      uploadXNewFiles: {
        0: this.resource['UploadNewFile'],
        1: this.resource['UploadXNewFile'],
      },
      // The "powered by Uppy" link at the bottom of the Dashboard.
      poweredBy: this.resource['PoweredBy'],
      addMore: this.resource['AddMore'],
      editFileWithFilename: this.resource['EditFileWithFilename'],
      save: this.resource['Save'],
      dropPasteFiles: this.resource['DropPasteFiles'],
      dropPasteFolders: this.resource['DropPasteFolders'],
      dropPasteBoth: this.resource['DropPasteBoth'],
      dropPasteImportFiles: this.resource['DropPasteImportFiles'],
      dropPasteImportFolders: this.resource['DropPasteImportFolders'],
      dropPasteImportBoth: this.resource['DropPasteImportBoth'],
      importFiles: this.resource['ImportFiles'],
      browseFiles: this.resource['BrowseFiles'],
      browseFolders: this.resource['BrowseFolders'],
      recoveredXFiles: {
        0: this.resource['RecoveredFile'],
        1: this.resource['RecoveredXFiles'],
      },
      recoveredAllFiles: this.resource['RecoveredAllFiles'],
      sessionRestored: this.resource['SessionRestored'],
      reSelect: this.resource['ReSelect'],
      missingRequiredMetaFields: {
        0: this.resource['MissingRequiredMetaField'],
        1: this.resource['MissingRequiredMetaFields'],
      },
      // Used for native device camera buttons on mobile
      takePictureBtn: this.resource['TakePictureBtn'],
      recordVideoBtn: this.resource['RecordVideoBtn'],
    };
  }
}
