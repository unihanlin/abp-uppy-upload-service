import type { SampleDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { UploadDto, UploadManyDto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  apiName = 'AbpUppyUploadService';
  

  get = () =>
    this.restService.request<any, SampleDto>({
      method: 'GET',
      url: '/api/AbpUppyUploadService/sample',
    },
    { apiName: this.apiName });
  

  getAuthorized = () =>
    this.restService.request<any, SampleDto>({
      method: 'GET',
      url: '/api/AbpUppyUploadService/sample/authorized',
    },
    { apiName: this.apiName });
  

  upload = (input: UploadDto) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/AbpUppyUploadService/sample/upload',
      params: { text: input.text },
    },
    { apiName: this.apiName });
  

  uploadMany = (input: UploadManyDto) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: '/api/AbpUppyUploadService/sample/upload-many',
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
