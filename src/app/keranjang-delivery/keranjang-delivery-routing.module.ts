import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KeranjangDeliveryPage } from './keranjang-delivery.page';

const routes: Routes = [
  {
    path: '',
    component: KeranjangDeliveryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeranjangDeliveryPageRoutingModule {}
