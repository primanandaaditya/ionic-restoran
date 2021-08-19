import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-keranjang-delivery',
  templateUrl: './keranjang-delivery.page.html',
  styleUrls: ['./keranjang-delivery.page.scss'],
})
export class KeranjangDeliveryPage implements OnInit {

  keranjang: [];
  id_user;
  user: any = {};
  hapus: any = {};
  pathGambar;
  total;
  biaya;
  wilayah;
  ongkir;
  grandTotal;
  isLogin;
  jarak;
  listWilayah: any =  [];
  hasil:any={};
  postGetOngkir:any={};

  constructor(private storage: Storage,
              private http: HttpClient,
              private ls: LoadingService,
              private toast: ToastController,
              public navCtrl: NavController,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.pathGambar = environment.gambarUrl;
    this.ongkir = 0;
  }

  keranjangForm = this.formBuilder.group({
    id_wilayah:['', [Validators.required]],
    alamat:['',[Validators.required]]
  });
  get id_wilayah(){
    return this.keranjangForm.get('id_wilayah');
  }
  get alamat(){
    return this.keranjangForm.get('alamat');
  }
  public errorMessages = {
    id_wilayah:[
      { type: 'required', message: 'Wilayah harus diisi'}
    ],
    alamat:[
      { type: 'required', message: 'Alamat lengkap harus diisi detail'}
    ]
  }

  async simpan(){
    await this.storage.set(environment.ALAMAT_LENGKAP,this.alamat.value );
    console.log('alamat lengkap ' + this.alamat.value);
  }

   gantiWilayah(){
    this.postGetOngkir.id_wilayah = this.id_wilayah.value;
    this.http.post(environment.baseUrl + 'wilayah/cari_ongkir.php', this.postGetOngkir).subscribe((res: any) => {
      this.ls.present();
      if (res.error === false ){

        this.storage.set(environment.HARGA, res.hasil.harga);
        this.storage.set(environment.ID_WILAYAH, res.hasil.id);
        this.storage.set(environment.NAMA_WILAYAH, res.hasil.nama);
        this.storage.set(environment.JARAK, res.hasil.jarak);

        this.ongkir = res.hasil.harga;
        this.jarak = res.hasil.jarak;

        this.total = 0;
        for (let item of this.keranjang){
          this.total = this.total + parseInt(item['total']);
        }
        console.log('Total keranjang : ' + this.total);
        this.grandTotal = parseInt(this.ongkir) + parseInt(this.total);
        this.storage.set(environment.GRAND_TOTAL, this.grandTotal);
      }

      this.hasil = res.hasil;
      this.ls.dismiss();
    });
  }

  ionViewWillEnter() {
    this.getKeranjang();
    this.getWilayah();
    console.log(new Date().getFullYear().toString()+new Date().getMonth().toString()+new Date().getDay().toString());
  }

  async hapusItem(id_produk){
    this.id_user = await this.storage.get(environment.ID);
    this.hapus.id_user = this.id_user;
    this.hapus.id_produk = id_produk;

    this.ls.present();
    this.http.post(environment.baseUrl + 'keranjang/delete.php', this.hapus).subscribe((res: any) => {
      console.log(res);
      this.ls.dismiss();
      this.showToast(res.message);
      this.getKeranjang();
    });
  }

  async kosongKeranjang(){
    this.id_user = await this.storage.get(environment.ID);
    this.hapus.id_user = this.id_user;

    this.ls.present();
    this.http.post(environment.baseUrl + 'keranjang/kosong.php', this.hapus).subscribe((res: any) => {
      console.log(res);
      this.ls.dismiss();
      this.showToast(res.message);
      this.getKeranjang();
    });
  }

  async getKeranjang(){

    var a = await this.storage.get(environment.IS_LOGIN);
    if (a === false || a === null){
      this.isLogin=false;
    }else{
      this.isLogin=true;
      this.id_user = await this.storage.get(environment.ID);
      this.biaya = await this.storage.get(environment.HARGA);
      this.wilayah = await this.storage.get(environment.NAMA_WILAYAH);

      this.user.id_user = this.id_user;
      this.ls.present();
      this.http.post(environment.baseUrl + 'keranjang/get.php', this.user).subscribe((res: any) => {
        console.log(res);
        this.ls.dismiss();
        this.keranjang = res.message;

        this.total = 0;
        for (let item of this.keranjang){
          this.total = this.total + parseInt(item['total']);
        }
        console.log('Total keranjang : ' + this.total);
        this.grandTotal = parseInt(this.ongkir) + parseInt(this.total);
        this.storage.set(environment.GRAND_TOTAL, this.grandTotal);
      });
    }
  }

  getWilayah(){
    this.http.get(environment.baseUrl + 'wilayah/list_wilayah.php').subscribe((res: any) => {
      this.ls.present();
      console.log(res);
      this.listWilayah = res.list;
      this.ls.dismiss();
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
