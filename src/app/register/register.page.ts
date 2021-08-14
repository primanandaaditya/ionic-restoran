import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { ToastController } from '@ionic/angular';
import {environment} from '../../environments/environment';
import { NavController } from '@ionic/angular';
import { FormBuilder, Validators } from "@angular/forms";

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
               public navCtrl: NavController,
               private formBuilder: FormBuilder
  ) { }

  regForm = this.formBuilder.group({
    nama:['', [Validators.required]],
    email:['', [Validators.required]],
    password:['',[Validators.required]],
    cpassword:['', [Validators.required]],
    id_wilayah:['', [Validators.required]]
  });

  get nama(){
    return this.regForm.get('nama');
  }
  get email(){
    return this.regForm.get('email');
  }
  get password(){
    return this.regForm.get('password');
  }
  get cpassword(){
    return this.regForm.get('cpassword');
  }
  get id_wilayah(){
    return this.regForm.get('id_wilayah');
  }

  public errorMessages = {
    nama:[
      { type: 'required', message: 'Nama harus diisi'}
    ],
    email:[
      { type: 'required', message: 'Email harus diisi'}
    ],
    password:[
      { type: 'required', message: 'Password harus diisi'}
    ],
    cpassword:[
      { type: 'required', message: 'Konfirmasi password harus diisi'}
    ],
    id_wilayah:[
      { type: 'required', message: 'Wilayah harus diisi'}
    ]
  }

  doRegister(){
    this.ls.present();
    this.http.post(environment.baseUrl + 'auth/register.php', this.regForm.value).subscribe((res: any) => {
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
