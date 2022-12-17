import { TestBed } from '@angular/core/testing';

import { AbpUppyUploadServiceService } from './abp-uppy-upload-service.service';

describe('AbpUppyUploadServiceService', () => {
  let service: AbpUppyUploadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbpUppyUploadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
