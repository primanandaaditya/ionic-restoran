import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderReservasiPageRoutingModule } from './order-reservasi-routing.module';

import { OrderReservasiPage } from './order-reservasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderReservasiPageRoutingModule
  ],
  declarations: [OrderReservasiPage]
})
export class OrderReservasiPageModule {}
