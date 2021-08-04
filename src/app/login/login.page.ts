import { Component, ContentChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  user: any = {};

  constructor(
    private http: HttpClient,
    private ls: LoadingService,
    private toast: ToastController,
    public navCtrl: NavController,
    private storage: Storage
  ) { }

  async ngOnInit() {
    const name = await this.storage.get('nama');
    console.log(name);
  }
  async doLogin(){
    await this.ls.present();
    this.http.post(environment.baseUrl + 'auth/login.php', this.user).subscribe(async (res: any) => {
      await this.ls.dismiss();
      await this.showToast(res.pesan);
      if (res.error === false) {

        await this.storage.set(environment.NAMA, res.hasil.nama);
        await this.storage.set(environment.ID, res.hasil.id);
        await this.storage.set(environment.PASSWORD, res.hasil.pass);
        await this.storage.set(environment.ID_WILAYAH, res.hasil.id_wilayah);
        await this.storage.set(environment.IS_LOGIN, true);

        console.log(res.hasil.id);
        console.log(res.hasil.nama);
        console.log(res.hasil.password);
        console.log('id wilayah ' + res.hasil.id_wilayah);
        console.log('isLogin : ' + await this.storage.get('isLogin'));
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
