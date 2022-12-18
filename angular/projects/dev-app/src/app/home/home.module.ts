import { NgModule } from '@angular/core';
import { AbpUppyUploadServiceModule } from '@unihanlin/abp-uppy-upload-service';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, AbpUppyUploadServiceModule],
})
export class HomeModule {}
