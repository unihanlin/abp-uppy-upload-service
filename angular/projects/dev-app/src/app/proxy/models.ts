import type { IRemoteStreamContent } from './volo/abp/content/models';

export interface UploadDto {
  text?: string;
  file: IRemoteStreamContent;
}

export interface UploadManyDto {
  files: IRemoteStreamContent[];
}
