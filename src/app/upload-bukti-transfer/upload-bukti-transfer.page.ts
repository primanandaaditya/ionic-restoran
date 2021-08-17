import {Component, NgZone, OnInit} from '@angular/core';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

@Component({
  selector: 'app-upload-bukti-transfer',
  templateUrl: './upload-bukti-transfer.page.html',
  styleUrls: ['./upload-bukti-transfer.page.scss'],
})
export class UploadBuktiTransferPage implements OnInit {

  FileURI:any;
  FileName:any;
  returnPath:string='';
  constructor(private transfer: FileTransfer, private file: File) { }

  ngOnInit() {
  }


}
