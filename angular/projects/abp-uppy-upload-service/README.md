# AbpUppyUploadService

A upload service for Angular UI of ABP framework, base on UPPY.

## Install

```
npm install @unihanlin/abp-uppy-upload-service
```

## Setup

The AbpUppyUploadService use front-end localizations for UI display. You need import the `AbpUppyUploadServiceModule` to use the AbpUppyUploadService.

```typescript
import { AbpUppyUploadServiceModule } from '@unihanlin/abp-uppy-upload-service';

@NgModule({
  imports: [
    // other imports
    AbpUppyUploadServiceModule,
  ],
  // rest of the module metadata
})
export class YourModule {}
```

Import uppy styles for UI plugins.

```scss
@import '~@uppy/core/dist/style.css';
@import '~@uppy/dashboard/dist/style.css';
```

Now you can use the AbpUppyUploadService.

```html
<button type="button" class="btn btn-primary me-3" id="uppy-upload">Uppy Upload</button>
```

```typescript
import { AbpUppyUploadService } from '@unihanlin/abp-uppy-upload-service';

constructor(private uppyUploadService: AbpUppyUploadService) {}

  ngAfterViewInit(): void {
    this.uppyUploadService.initUppy(
      '#uppy-upload',
      {
        url: '/api/AbpUppyUploadService/sample/upload',
        apiName: 'AbpUppyUploadService',
      },
      {
        fieldName: 'file',
      },
      {
        maxNumberOfFiles: 1,
        maxFileSize: 5242880,
        allowedFileTypes: ['.xlsx', '.doc', 'docx'],
      },
      { text: 'Some additional text.' }
    );
  }
```

## initUppy

```typescript
  initUppy(
    trigger: UppyRest.Trigger,
    config: UppyRest.Config,
    xhr?: UppyRest.Xhr,
    restrictions?: UppyRest.Restrictions,
    params?: UppyRest.Params,
    uploadSuccessCallBack?: (file: UppyFile<{}, {}>, result: any) => void
  ) => void;
```

- **trigger:** String with a CSS selector for a button that will trigger opening the Dashboard modal. Several buttons or links can be used, as long as they are selected using a class selector (.select-file-button, for example).
- **config:** _{
  url: string;
  apiName: string;
  }_.
- **xhr:** . _Partial<{
  fieldName: string;
  timeout: number;
  formData: boolean;
  bundle: boolean;
  }>_.
  - `fieldName`: 'file', when formData is set to true, this is used as the form field name for the file to be uploaded. It defaults to 'files' if bundle option is set to true, otherwise it defaults to 'file'.
  - `timeout`: 30 \* 1000, when no upload progress events have been received for this amount of milliseconds, assume the connection has an issue and abort the upload. Note that unlike the XMLHttpRequest.timeout property, this is a timer between progress events: the total upload can take longer than this value. Set to 0 to disable this check. The default for the timeout is 30 seconds.
  - `formData`: true, configures whether to use a multipart form upload, using FormData. This works similarly to using a <form> element with an \<input type="file"\> for uploads. When set to true, file metadata is also sent to the endpoint as separate form fields. When set to false, only the file contents are sent.
  - `bundle`: false, send all files in a single multipart request. When bundle is set to true, formData must also be set to true.
- **restrictions:** _Partial<{
  maxFileSize: number;
  minFileSize: number;
  maxTotalFileSize: number;
  maxNumberOfFiles: number;
  minNumberOfFiles: number;
  allowedFileTypes: string[];
  }>_.
  - `maxFileSize`: null | number — maximum file size in bytes for each individual file
  - `minFileSize`: null | number — minimum file size in bytes for each individual file
  - `maxTotalFileSize`: null | number — maximum file size in bytes for all the files that can be selected for upload
  - `maxNumberOfFiles`: null | number — total number of files that can be selected
  - `minNumberOfFiles`: null | number — minimum number of files that must be selected before the upload
  - `allowedFileTypes`: null | array of wildcards image/\*, exact mime types image/jpeg, or file extensions .jpg: ['image/_', '.jpg', '.jpeg', '.png', '.gif']
- **params:** Used for passing things like public keys, usenames, tags and so on.
- **uploadSuccessCallBack:** Fired each time a single upload is completed.
