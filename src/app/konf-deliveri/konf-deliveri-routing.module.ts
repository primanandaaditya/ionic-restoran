import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonfDeliveriPage } from './konf-deliveri.page';

const routes: Routes = [
  {
    path: '',
    component: KonfDeliveriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonfDeliveriPageRoutingModule {}
