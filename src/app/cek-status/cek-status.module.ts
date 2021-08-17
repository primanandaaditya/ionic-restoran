import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CekStatusPageRoutingModule } from './cek-status-routing.module';

import { CekStatusPage } from './cek-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CekStatusPageRoutingModule
  ],
  declarations: [CekStatusPage]
})
export class CekStatusPageModule {}
