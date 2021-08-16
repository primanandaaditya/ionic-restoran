import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuReservasiPageRoutingModule } from './menu-reservasi-routing.module';

import { MenuReservasiPage } from './menu-reservasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuReservasiPageRoutingModule
  ],
  declarations: [MenuReservasiPage]
})
export class MenuReservasiPageModule {}
