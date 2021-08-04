import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: any = {};
  wilayah: any ={};
  listWilayah: any =  [];
  constructor( private http: HttpClient,
               private ls: LoadingService,
               private toast: ToastController,
               public navCtrl: NavController
  ) { }

  doRegister(){
    this.ls.present();
    this.http.post(environment.baseUrl + 'auth/register.php', this.user).subscribe((res: any) => {
      console.log(res);
      this.ls.dismiss();
      this.showToast(res.message);
      if (res.status === 1){
        this.navCtrl.navigateRoot('/');
      }
    });
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


  ngOnInit() {
    this.getWilayah();
  }

}
