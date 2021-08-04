import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HubungikamiPageRoutingModule } from './hubungikami-routing.module';

import { HubungikamiPage } from './hubungikami.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HubungikamiPageRoutingModule
  ],
  declarations: [HubungikamiPage]
})
export class HubungikamiPageModule {}
