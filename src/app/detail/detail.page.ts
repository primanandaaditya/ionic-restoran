import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  idProduk    ;
  list        : [];
  imagePath   ;
  nama;
  harga;
  qty;
  rupiah = environment.Rupiah;
  nama_wilayah;
  add: any = {};
  isLogin;
  constructor(private storage: Storage,
              private http: HttpClient,
              private ls: LoadingService,
              private toast: ToastController,
              private route: ActivatedRoute,
              public navCtrl: NavController) { }


  async ngOnInit() {
    this.idProduk = this.route.snapshot.paramMap.get('id');
    console.log('id produk: ' + this.idProduk);

    this.nama_wilayah = await this.storage.get(environment.NAMA_WILAYAH);
    this.add.qty=1;
  }

  async ionViewWillEnter() {
    var a = await this.storage.get(environment.IS_LOGIN);
    if (a===false || a===null){
      this.isLogin=false;
    }else{
      this.isLogin=true;
      this.getProdukDetail();
    }

    console.log(new Date().getFullYear().toString()+new Date().getMonth().toString()+new Date().getDay().toString());
  }

  getProdukDetail(){
    this.http.get(environment.baseUrl + 'produk/detail.php?id=' + this.idProduk).subscribe((res: any) => {
      this.ls.present();
      console.log(res.list);
      this.list = res.list;
      this.imagePath = environment.gambarUrl + res.list.gambar;
      this.nama = res.list.nama;
      this.harga =  res.list.harga;
      this.ls.dismiss();
    });
  }

  async addKeranjang(){
    this.add.id_user = await this.storage.get(environment.ID);
    this.add.id_produk = this.idProduk;
    this.add.harga = this.harga;
    console.log('data ' + this.add.id_user);
    console.log('data ' + this.add.id_produk);
    console.log('data ' + this.add.harga);
    console.log('data ' + this.add.qty);

    this.ls.present();
    this.http.post(environment.baseUrl + 'keranjang/add.php', this.add).subscribe((res: any) => {
      console.log(res);
      this.ls.dismiss();
      this.showToast(res.message);
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
