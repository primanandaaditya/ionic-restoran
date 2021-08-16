import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderReservasiPage } from './order-reservasi.page';

const routes: Routes = [
  {
    path: '',
    component: OrderReservasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderReservasiPageRoutingModule {}
