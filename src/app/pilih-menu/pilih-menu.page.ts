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
  selector: 'app-pilih-menu',
  templateUrl: './pilih-menu.page.html',
  styleUrls: ['./pilih-menu.page.scss'],
})
export class PilihMenuPage implements OnInit {

  nama          ='';
  pathGambar    = environment.gambarUrl;
  makanan       : [];
  minuman       : [];
  constructor(private storage: Storage,
              private http: HttpClient,
              private ls: LoadingService,
              private toast: ToastController,
              public navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
  }

  getMakanan(){
    this.http.get(environment.baseUrl + 'produk/list_makanan.php').subscribe((res: any) => {
      this.ls.present();
      console.log(res.list);
      this.makanan = res.list;
      this.ls.dismiss();
    });
  }

  getMinuman(){
    this.http.get(environment.baseUrl + 'produk/list_minuman.php').subscribe((res: any) => {
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

  ionViewWillEnter() {
    this.getMakanan();
    this.getMinuman();
  }
}
