import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

const oAuthConfig = {
  issuer: 'https://localhost:44349/',
  redirectUri: baseUrl,
  clientId: 'AbpUppyUploadService_App',
  responseType: 'code',
  scope: 'offline_access AbpUppyUploadService',
  requireHttps: true,
};

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'AbpUppyUploadService',
    logoUrl: '',
  },
  oAuthConfig,
  apis: {
    default: {
      url: 'https://localhost:44349',
      rootNamespace: 'Unihanlin.AbpUppyUploadService',
    },
    AbpAccountPublic: {
      url: oAuthConfig.issuer,
      rootNamespace: 'AbpAccountPublic',
    },
    AbpUppyUploadService: {
      url: 'https://localhost:44321',
      rootNamespace: 'Unihanlin.AbpUppyUploadService',
    },
  },
} as Environment;
