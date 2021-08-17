import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadBuktiTransferPage } from './upload-bukti-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: UploadBuktiTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadBuktiTransferPageRoutingModule {}
