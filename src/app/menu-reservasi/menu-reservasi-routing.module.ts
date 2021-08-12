import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuReservasiPage } from './menu-reservasi.page';

const routes: Routes = [
  {
    path: '',
    component: MenuReservasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuReservasiPageRoutingModule {}
