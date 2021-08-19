import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeranjangDeliveryPageRoutingModule } from './keranjang-delivery-routing.module';

import { KeranjangDeliveryPage } from './keranjang-delivery.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        KeranjangDeliveryPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [KeranjangDeliveryPage]
})
export class KeranjangDeliveryPageModule {}
