import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-reservasi',
  templateUrl: './reservasi.page.html',
  styleUrls: ['./reservasi.page.scss'],
})
export class ReservasiPage implements OnInit {

  mejaAktif;
  warna1:string='primary';
  warna2:string='';
  warna3:string='';
  warna4:string='';
  warna5:string='';
  warna6:string='';
  warna7:string='';
  tglReservasi;
  constructor(private http: HttpClient,
              private ls: LoadingService,
              private toast: ToastController,
              public navCtrl: NavController,
              private storage: Storage,
              private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.mejaAktif='1';
  }

  aktifkanMeja(nomor){
    this.mejaAktif=nomor;

    switch(nomor) {
      case 1: {
        this.warna1="primary";
        this.warna2="";
        this.warna3="";
        this.warna4="";
        this.warna5="";
        this.warna6="";
        this.warna7="";
        break;
      }
      case 2: {
        this.warna1="";
        this.warna2="primary";
        this.warna3="";
        this.warna4="";
        this.warna5="";
        this.warna6="";
        this.warna7="";
        break;
      }
      case 3: {
        this.warna1="";
        this.warna2="";
        this.warna3="primary";
        this.warna4="";
        this.warna5="";
        this.warna6="";
        this.warna7="";
        break;
      }
      case 4: {
        this.warna1="";
        this.warna2="";
        this.warna3="";
        this.warna4="primary";
        this.warna5="";
        this.warna6="";
        this.warna7="";
        break;
      }
      case 5: {
        this.warna1="";
        this.warna2="";
        this.warna3="";
        this.warna4="";
        this.warna5="primary";
        this.warna6="";
        this.warna7="";
        break;
      }
      case 6: {
        this.warna1="";
        this.warna2="";
        this.warna3="";
        this.warna4="";
        this.warna5="";
        this.warna6="primary";
        this.warna7="";
        break;
      }
      case 7: {
        this.warna1="";
        this.warna2="";
        this.warna3="";
        this.warna4="";
        this.warna5="";
        this.warna6="";
        this.warna7="primary";
        break;
      }
      default: {
        //statements;
        break;
      }
    }
    this.showToast('Anda memilih meja : ' + this.mejaAktif);
    console.log(this.mejaAktif);
  }

  async simpanNomorMeja(){
    console.log('tgl reservasi ' + this.tglReservasi.toString().substr(0,10));
    await this.storage.set(environment.NOMOR_MEJA, this.mejaAktif);
    await this.storage.set(environment.TGL_RESERVASI, this.tglReservasi.toString().substr(0,10));
  }


  async showToast(str){
    await this.toast.create({
      message: str,
      duration: 200,
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
