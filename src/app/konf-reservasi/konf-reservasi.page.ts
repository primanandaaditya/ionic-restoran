import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-konf-reservasi',
  templateUrl: './konf-reservasi.page.html',
  styleUrls: ['./konf-reservasi.page.scss'],
})
export class KonfReservasiPage implements OnInit {
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
    this.cara_bayar='0';
  }

  cekTransfer(){
    this.cara_bayar='0';
    console.log('cara bayar : ' + this.cara_bayar);
  }

  cekDiTempat(){
    this.cara_bayar='1';
    console.log('cara bayar : ' + this.cara_bayar);
  }


  async doBayar(){

    this.ls.present();
    this.bayar.jenis_pesanan    = 2;
    this.bayar.id_user          = await this.storage.get(environment.ID);
    this.bayar.nomor            = new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDay().toString() + '-2-'  + await this.storage.get(environment.ID);
    this.bayar.total            = await this.storage.get(environment.GRAND_TOTAL);
    this.bayar.tgl_reservasi    = await this.storage.get(environment.TGL_RESERVASI);
    this.bayar.meja             = await this.storage.get(environment.NOMOR_MEJA);
    this.bayar.status_pesanan   = 1;

    console.log('Jenis pesanan : ' +this.bayar.jenis_pesanan);
    console.log('ID User : ' +this.bayar.id_user);
    console.log('Nomor : ' +this.bayar.nomor);
    console.log('Total : ' +this.bayar.total);
    console.log('Tgl Reservasi : ' +this.bayar.tgl_reservasi);
    console.log('No. meja : ' +this.bayar.meja);
    console.log('status_pesanan : ' +this.bayar.status_pesanan);

    this.http.post(environment.baseUrl + 'pesanan/add_reservasi.php', this.bayar).subscribe((res: any) => {
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
