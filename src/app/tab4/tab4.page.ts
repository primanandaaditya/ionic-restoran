import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import {environment} from "../../environments/environment";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  isLogin:false;
  constructor(
      private storage:Storage,
      private nav: NavController
  ) {

  }


  async ionViewDidEnter() {
    this.isLogin = await this.storage.get(environment.IS_LOGIN);
    console.log('tab4 isLogin: ' + this.isLogin);
  }

  async ngOnInit() {

  }

  async logout(){
    this.isLogin=false;
    await this.storage.set(environment.NAMA, '');
    await this.storage.set(environment.ID, 0);
    await this.storage.set(environment.PASSWORD, '');
    await this.storage.set(environment.ID_WILAYAH, 0);
    await this.storage.set(environment.IS_LOGIN, false);
    console.log('tab4 isLogin: ' + this.isLogin);
    await this.nav.navigateRoot('/');
  }

}
