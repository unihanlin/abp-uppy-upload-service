import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';

@NgModule({
  declarations: [],
  imports: [CoreModule, ThemeSharedModule],
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
