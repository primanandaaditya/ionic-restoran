(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_upload-bukti-transfer_upload-bukti-transfer_module_ts"],{

/***/ 4163:
/*!*******************************************************************************!*\
  !*** ./src/app/upload-bukti-transfer/upload-bukti-transfer-routing.module.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadBuktiTransferPageRoutingModule": function() { return /* binding */ UploadBuktiTransferPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _upload_bukti_transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-bukti-transfer.page */ 51633);




const routes = [
    {
        path: '',
        component: _upload_bukti_transfer_page__WEBPACK_IMPORTED_MODULE_0__.UploadBuktiTransferPage
    }
];
let UploadBuktiTransferPageRoutingModule = class UploadBuktiTransferPageRoutingModule {
};
UploadBuktiTransferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UploadBuktiTransferPageRoutingModule);



/***/ }),

/***/ 66338:
/*!***********************************************************************!*\
  !*** ./src/app/upload-bukti-transfer/upload-bukti-transfer.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadBuktiTransferPageModule": function() { return /* binding */ UploadBuktiTransferPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _upload_bukti_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload-bukti-transfer-routing.module */ 4163);
/* harmony import */ var _upload_bukti_transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-bukti-transfer.page */ 51633);







let UploadBuktiTransferPageModule = class UploadBuktiTransferPageModule {
};
UploadBuktiTransferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upload_bukti_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.UploadBuktiTransferPageRoutingModule
        ],
        declarations: [_upload_bukti_transfer_page__WEBPACK_IMPORTED_MODULE_1__.UploadBuktiTransferPage]
    })
], UploadBuktiTransferPageModule);



/***/ }),

/***/ 51633:
/*!*********************************************************************!*\
  !*** ./src/app/upload-bukti-transfer/upload-bukti-transfer.page.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadBuktiTransferPage": function() { return /* binding */ UploadBuktiTransferPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_upload_bukti_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./upload-bukti-transfer.page.html */ 4998);
/* harmony import */ var _upload_bukti_transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-bukti-transfer.page.scss */ 96496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 84267);
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ 97905);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);









let UploadBuktiTransferPage = class UploadBuktiTransferPage {
    constructor(camera, ls, toast, transfer) {
        this.camera = camera;
        this.ls = ls;
        this.toast = toast;
        this.transfer = transfer;
        this.returnPath = '';
    }
    ngOnInit() {
    }
    takePicture() {
        const options = {
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
    upload() {
        //option upload
        this.ls.present();
        const fileTransfer = this.transfer.create();
        let options = {
            fileKey: 'foto',
            fileName: this.imgData + '.jpeg',
            chunkedMode: false,
            params: { 'nomor': '2021717-1-3' },
            headers: {}
        };
        fileTransfer.upload(this.currentImage, _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.baseUrl + 'pesanan/upload_bukti_transfer_reservasi.php', options)
            .then((data) => {
            console.log("Upload OK");
            this.ls.dismiss();
            this.showToast(data.response);
        }, (err) => {
            console.log(err);
            this.ls.dismiss();
            this.showToast(err);
        });
    }
    showToast(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.toast.create({
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
        });
    }
};
UploadBuktiTransferPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_3__.FileTransfer }
];
UploadBuktiTransferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-upload-bukti-transfer',
        template: _raw_loader_upload_bukti_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_upload_bukti_transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UploadBuktiTransferPage);



/***/ }),

/***/ 96496:
/*!***********************************************************************!*\
  !*** ./src/app/upload-bukti-transfer/upload-bukti-transfer.page.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtYnVrdGktdHJhbnNmZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 4998:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-bukti-transfer/upload-bukti-transfer.page.html ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Upload Bukti Transfer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\" class=\"background\">\n\n  <ion-button (click)=\"takePicture()\">Kamera</ion-button>\n\n  <ion-card *ngIf=\"currentImage\">\n    <ion-card-header>\n      <ion-card-subtitle>Hasil Kamera</ion-card-subtitle>\n      <ion-card-title>Pastikan foto struk jelas dan dapat dilihat</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <img [src]=\"currentImage\" *ngIf=\"currentImage\">\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button *ngIf=\"currentImage\" (click)=\"upload()\" expand=\"full\">Upload</ion-button>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_upload-bukti-transfer_upload-bukti-transfer_module_ts-es2015.js.map