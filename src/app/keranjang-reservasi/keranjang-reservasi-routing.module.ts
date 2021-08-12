import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeranjangReservasiPage } from './keranjang-reservasi.page';

const routes: Routes = [
  {
    path: '',
    component: KeranjangReservasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeranjangReservasiPageRoutingModule {}
