import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import {
  AbpUppyUploadServiceAr,
  AbpUppyUploadServiceEn,
  AbpUppyUploadServiceDeDe,
  AbpUppyUploadServiceEs,
  AbpUppyUploadServiceFi,
  AbpUppyUploadServiceFr,
  AbpUppyUploadServiceHi,
  AbpUppyUploadServiceIt,
  AbpUppyUploadServicePtBr,
  AbpUppyUploadServiceSk,
  AbpUppyUploadServiceSl,
  AbpUppyUploadServiceTr,
  AbpUppyUploadServiceZhHans,
  AbpUppyUploadServiceZhHant,
} from './localizations';

@NgModule({
  declarations: [],
  imports: [
    CoreModule.forChild({
      localizations: [
        {
          culture: 'ar',
          resources: [AbpUppyUploadServiceAr.Resource],
        },
        {
          culture: 'cs',
          resources: [AbpUppyUploadServiceEn.Resource],
        },
        {
          culture: 'de-DE',
          resources: [AbpUppyUploadServiceDeDe.Resource],
        },
        {
          culture: 'en',
          resources: [AbpUppyUploadServiceEn.Resource],
        },
        {
          culture: 'es',
          resources: [AbpUppyUploadServiceEs.Resource],
        },
        {
          culture: 'fi',
          resources: [AbpUppyUploadServiceFi.Resource],
        },
        {
          culture: 'fr',
          resources: [AbpUppyUploadServiceFr.Resource],
        },
        {
          culture: 'hi',
          resources: [AbpUppyUploadServiceHi.Resource],
        },
        {
          culture: 'it',
          resources: [AbpUppyUploadServiceIt.Resource],
        },
        {
          culture: 'pl-PL',
          resources: [AbpUppyUploadServiceEn.Resource],
        },
        {
          culture: 'pl',
          resources: [AbpUppyUploadServiceEn.Resource],
        },
        {
          culture: 'pt-BR',
          resources: [AbpUppyUploadServicePtBr.Resource],
        },
        {
          culture: 'sk',
          resources: [AbpUppyUploadServiceSk.Resource],
        },
        {
          culture: 'sl',
          resources: [AbpUppyUploadServiceSl.Resource],
        },
        {
          culture: 'tr',
          resources: [AbpUppyUploadServiceTr.Resource],
        },
        {
          culture: 'vi',
          resources: [AbpUppyUploadServiceEn.Resource],
        },
        {
          culture: 'zh-Hans',
          resources: [AbpUppyUploadServiceZhHans.Resource],
        },
        {
          culture: 'zh-Hant',
          resources: [AbpUppyUploadServiceZhHant.Resource],
        },
      ],
    }),
    ThemeSharedModule,
  ],
  exports: [],
})
export class AbpUppyUploadServiceModule {
  static forChild(): ModuleWithProviders<AbpUppyUploadServiceModule> {
    return {
      ngModule: AbpUppyUploadServiceModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<AbpUppyUploadServiceModule> {
    return new LazyModuleFactory(AbpUppyUploadServiceModule.forChild());
  }
}
