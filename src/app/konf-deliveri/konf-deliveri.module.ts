import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonfDeliveriPageRoutingModule } from './konf-deliveri-routing.module';

import { KonfDeliveriPage } from './konf-deliveri.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonfDeliveriPageRoutingModule
  ],
  declarations: [KonfDeliveriPage]
})
export class KonfDeliveriPageModule {}
