import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-konf-deliveri',
  templateUrl: './konf-deliveri.page.html',
  styleUrls: ['./konf-deliveri.page.scss'],
})
export class KonfDeliveriPage implements OnInit {
  bayar:any={};
  jenisPesanan;
  nomor;
  ongkir;
  total;
  id_user;
  cara_bayar;
  constructor(private http: HttpClient,
              private ls: LoadingService,
              private toast: ToastController,
              private storage: Storage,
              public navCtrl: NavController) { }

  ngOnInit() {
    this.cara_bayar=1;
  }

  cekTransfer(){
    this.cara_bayar=1;
    console.log('cara bayar : ' + this.cara_bayar);
  }

  cekDiTempat(){
    this.cara_bayar=2;
    console.log('cara bayar : ' + this.cara_bayar);
  }

  async ionViewWillEnter() {
    this.nomor = new
    Date().getFullYear().toString() +
        new Date().getMonth().toString() +
        new Date().getDate().toString() +
        new Date().getHours().toString() +
        new Date().getMinutes().toString() +
        new Date().getSeconds().toString() +
        + '1'  + await this.storage.get(environment.ID);
    this.total = await this.storage.get(environment.GRAND_TOTAL);
  }

  async doBayar(){

    // this.ls.present();
    this.bayar.jenis_pesanan          = 1;
    this.bayar.id_user                = await this.storage.get(environment.ID);
    this.bayar.nomor                  = this.nomor;
    this.bayar.ongkir                 = await this.storage.get(environment.HARGA);
    this.bayar.total                  = await this.storage.get(environment.GRAND_TOTAL);
    this.bayar.cara_bayar             = this.cara_bayar;
    this.bayar.status_pesanan         = 1;
    this.bayar.alamat                 = await this.storage.get(environment.ALAMAT_LENGKAP);
    this.bayar.id_wilayah             = await this.storage.get(environment.ID_WILAYAH);

    console.log(this.bayar);
    this.http.post(environment.baseUrl + 'pesanan/add_delivery.php', this.bayar).subscribe((res: any) => {
      console.log(res);
      this.ls.dismiss();
      this.showToast(res.message);
      if (res.status === 1){
        this.navCtrl.navigateRoot('/');
      }
    });
  }

  async showToast(str){
    await this.toast.create({
      message: str,
      duration: 2000,
      position: 'bottom',
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log('OK Clicked');
        }
      }]
    }).then(x => x.present());
  }
}
