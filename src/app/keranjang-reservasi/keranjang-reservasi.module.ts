import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeranjangReservasiPageRoutingModule } from './keranjang-reservasi-routing.module';

import { KeranjangReservasiPage } from './keranjang-reservasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KeranjangReservasiPageRoutingModule
  ],
  declarations: [KeranjangReservasiPage]
})
export class KeranjangReservasiPageModule {}
