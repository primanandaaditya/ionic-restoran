import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { IonicModule } from '@ionic/angular';

import { UploadBuktiTransferPageRoutingModule } from './upload-bukti-transfer-routing.module';

import { UploadBuktiTransferPage } from './upload-bukti-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadBuktiTransferPageRoutingModule,
      ReactiveFormsModule
  ],
  declarations: [UploadBuktiTransferPage]
})
export class UploadBuktiTransferPageModule {}
