import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-reservasi',
  templateUrl: './order-reservasi.page.html',
  styleUrls: ['./order-reservasi.page.scss'],
})
export class OrderReservasiPage implements OnInit {

  idProduk    ;
  list        : [];
  imagePath   ;
  nama;
  harga;
  qty;
  rupiah = environment.Rupiah;
  add: any = {};
  constructor(private storage: Storage,
              private http: HttpClient,
              private ls: LoadingService,
              private toast: ToastController,
              private route: ActivatedRoute,
              public navCtrl: NavController) { }

  ngOnInit() {
    this.idProduk = this.route.snapshot.paramMap.get('id');
    console.log('id produk: ' + this.idProduk);
    this.getProdukDetail();
    this.add.qty=1;
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
    this.http.post(environment.baseUrl + 'keranjang_reservasi/add.php', this.add).subscribe((res: any) => {
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
