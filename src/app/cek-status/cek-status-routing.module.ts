import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CekStatusPage } from './cek-status.page';

const routes: Routes = [
  {
    path: '',
    component: CekStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CekStatusPageRoutingModule {}
