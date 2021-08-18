import {Component, OnInit} from '@angular/core';
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {environment} from "../../environments/environment";
import { LoadingService } from "../services/loading.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-upload-bukti-transfer',
  templateUrl: './upload-bukti-transfer.page.html',
  styleUrls: ['./upload-bukti-transfer.page.scss'],
})
export class UploadBuktiTransferPage implements OnInit {

  FileURI:any;
  FileName:any;
  returnPath:string='';
  currentImage: any;
  imgData:any;

  constructor(private camera:Camera,
              private ls:LoadingService,
              private toast: ToastController,
              private transfer: FileTransfer) { }

  ngOnInit() {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    var h = this.camera.getPicture(options).then((imageData) => {
      this.currentImage = 'data:image/jpeg;base64,' + imageData;
      this.imgData = imageData;
    }, (err) => {
      // Handle error
      console.log("Camera issue:" + err);
    });

  }

  upload(){
    //option upload
    this.ls.present();
    const fileTransfer: FileTransferObject = this.transfer.create();
    let options: FileUploadOptions = {
      fileKey: 'foto',
      fileName: this.imgData + '.jpeg',
      chunkedMode: false,
      params: {'nomor':'2021717-1-3'}, // add another parameter (opsional)
      headers: {}
    }

    fileTransfer.upload(this.currentImage, environment.baseUrl + 'pesanan/upload_bukti_transfer_reservasi.php', options)
        .then((data) => {
          console.log("Upload OK");
          this.ls.dismiss();
          this.showToast(data.response);
        }, (err) => {
          console.log(err);
          this.ls.dismiss();
          this.showToast(err);
        })
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
