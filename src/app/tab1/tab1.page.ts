import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  nama='';
  constructor(private storage: Storage) {}

  async ionViewDidEnter() {
    this.nama = await this.storage.get('nama');
    console.log(this.nama);
  }

  async ngOnInit() {

  }

}
