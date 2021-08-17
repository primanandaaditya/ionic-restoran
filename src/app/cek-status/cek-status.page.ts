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
  selector: 'app-cek-status',
  templateUrl: './cek-status.page.html',
  styleUrls: ['./cek-status.page.scss'],
})
export class CekStatusPage implements OnInit {

  list:[];
  param:any = {};
  constructor(private storage: Storage,
              private http: HttpClient,
              private ls: LoadingService,
              private toast: ToastController,
              public navCtrl: NavController,
              private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getData();
  }

  async getData(){
    this.param.id_user = await this.storage.get(environment.ID);
    this.http.post(environment.baseUrl + 'pesanan/cek_status.php', this.param).subscribe((res: any) => {
      this.ls.present();
      console.log(res.message);
      this.list = res.message;
      this.ls.dismiss();
    });
  }
}
