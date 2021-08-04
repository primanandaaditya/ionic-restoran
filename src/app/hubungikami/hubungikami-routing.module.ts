import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HubungikamiPage } from './hubungikami.page';

const routes: Routes = [
  {
    path: '',
    component: HubungikamiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HubungikamiPageRoutingModule {}
