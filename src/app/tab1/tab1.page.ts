import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  nama          ='';
  pathGambar    = environment.gambarUrl;
  makanan       : [];
  minuman       : [];
  isLogin;
  constructor(
      private storage: Storage,
      private http: HttpClient,
      private ls: LoadingService,
      private toast: ToastController,
      public navCtrl: NavController,
      private router: Router
  ) {}

  getMakanan(){
    this.http.get(environment.baseUrl + 'produk/slide_makanan.php').subscribe((res: any) => {
      this.ls.present();
      console.log(res.list);
      this.makanan = res.list;
      this.ls.dismiss();
    });
  }

  getMinuman(){
    this.http.get(environment.baseUrl + 'produk/slide_minuman.php').subscribe((res: any) => {
      this.ls.present();
      console.log(res.list);
      this.minuman = res.list;
      this.ls.dismiss();
    });
  }

  gotoDetailPage(){
    this.router.navigateByUrl('/detail');
  }

  async ionViewDidEnter() {
    this.nama = await this.storage.get('nama');

    console.log(this.nama);

  }

  async ionViewWillEnter() {
    var a = await this.storage.get(environment.IS_LOGIN);
    if (a===null || a===false){
      this.isLogin=false;
    }else{
      this.isLogin=true;
    }
    this.getMakanan();
    this.getMinuman();
  }


  async ngOnInit() {

  }

}
