import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonfReservasiPageRoutingModule } from './konf-reservasi-routing.module';

import { KonfReservasiPage } from './konf-reservasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonfReservasiPageRoutingModule
  ],
  declarations: [KonfReservasiPage]
})
export class KonfReservasiPageModule {}
