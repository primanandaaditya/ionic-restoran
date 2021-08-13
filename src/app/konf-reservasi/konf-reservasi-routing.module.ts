import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonfReservasiPage } from './konf-reservasi.page';

const routes: Routes = [
  {
    path: '',
    component: KonfReservasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonfReservasiPageRoutingModule {}
