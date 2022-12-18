import { AfterViewInit, Component } from '@angular/core';
import { AbpUppyUploadService } from '@unihanlin/abp-uppy-upload-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {
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

    this.uppyUploadService.initUppy(
      '#uppy-upload-many',
      {
        url: '/api/AbpUppyUploadService/sample/upload-many',
        apiName: 'AbpUppyUploadService',
      },
      {
        fieldName: 'files',
        bundle: true,
      },
      {
        maxNumberOfFiles: 10,
        maxFileSize: 5242880,
        allowedFileTypes: ['.xlsx', '.doc', '.docx', '.png', '.jpg'],
      }
    );
  }
}
