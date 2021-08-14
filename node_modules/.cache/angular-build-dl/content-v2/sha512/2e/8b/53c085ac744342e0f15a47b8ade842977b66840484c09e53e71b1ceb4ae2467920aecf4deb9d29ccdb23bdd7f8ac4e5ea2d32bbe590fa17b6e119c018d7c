(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_konf-reservasi_konf-reservasi_module_ts"],{

/***/ 4121:
/*!*****************************************************************!*\
  !*** ./src/app/konf-reservasi/konf-reservasi-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KonfReservasiPageRoutingModule": function() { return /* binding */ KonfReservasiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _konf_reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./konf-reservasi.page */ 25093);




const routes = [
    {
        path: '',
        component: _konf_reservasi_page__WEBPACK_IMPORTED_MODULE_0__.KonfReservasiPage
    }
];
let KonfReservasiPageRoutingModule = class KonfReservasiPageRoutingModule {
};
KonfReservasiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KonfReservasiPageRoutingModule);



/***/ }),

/***/ 28568:
/*!*********************************************************!*\
  !*** ./src/app/konf-reservasi/konf-reservasi.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KonfReservasiPageModule": function() { return /* binding */ KonfReservasiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _konf_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./konf-reservasi-routing.module */ 4121);
/* harmony import */ var _konf_reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./konf-reservasi.page */ 25093);







let KonfReservasiPageModule = class KonfReservasiPageModule {
};
KonfReservasiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _konf_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.KonfReservasiPageRoutingModule
        ],
        declarations: [_konf_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.KonfReservasiPage]
    })
], KonfReservasiPageModule);



/***/ }),

/***/ 25093:
/*!*******************************************************!*\
  !*** ./src/app/konf-reservasi/konf-reservasi.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KonfReservasiPage": function() { return /* binding */ KonfReservasiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_konf_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./konf-reservasi.page.html */ 68663);
/* harmony import */ var _konf_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./konf-reservasi.page.scss */ 32871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);










let KonfReservasiPage = class KonfReservasiPage {
    constructor(http, ls, toast, storage, navCtrl) {
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.bayar = {};
    }
    ngOnInit() {
        this.cara_bayar = '0';
    }
    cekTransfer() {
        this.cara_bayar = '0';
        console.log('cara bayar : ' + this.cara_bayar);
    }
    cekDiTempat() {
        this.cara_bayar = '1';
        console.log('cara bayar : ' + this.cara_bayar);
    }
    doBayar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.ls.present();
            this.bayar.jenis_pesanan = 2;
            this.bayar.id_user = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);
            this.bayar.nomor = new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDay().toString() + '-2-' + (yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID));
            this.bayar.total = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL);
            this.bayar.tgl_reservasi = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.TGL_RESERVASI);
            this.bayar.meja = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NOMOR_MEJA);
            this.bayar.cara_bayar = this.cara_bayar;
            console.log('Jenis pesanan : ' + this.bayar.jenis_pesanan);
            console.log('ID User : ' + this.bayar.id_user);
            console.log('Nomor : ' + this.bayar.nomor);
            console.log('Total : ' + this.bayar.total);
            console.log('Tgl Reservasi : ' + this.bayar.tgl_reservasi);
            console.log('No. meja : ' + this.bayar.meja);
            console.log('Cara bayar : ' + this.bayar.cara_bayar);
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'pesanan/add_reservasi.php', this.bayar).subscribe((res) => {
                console.log(res);
                this.ls.dismiss();
                this.showToast(res.message);
                if (res.status === 1) {
                    this.navCtrl.navigateRoot('/');
                }
            });
        });
    }
    showToast(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
KonfReservasiPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
KonfReservasiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-konf-reservasi',
        template: _raw_loader_konf_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_konf_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KonfReservasiPage);



/***/ }),

/***/ 32871:
/*!*********************************************************!*\
  !*** ./src/app/konf-reservasi/konf-reservasi.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrb25mLXJlc2VydmFzaS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 68663:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/konf-reservasi/konf-reservasi.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Konfirmasi Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\">\n\n  <ion-radio-group [(ngModel)]=\"cara_bayar\">\n    <ion-list-header>\n      <ion-label>Cara pembayaran</ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Transfer bank</ion-label>\n      <ion-radio (click)=\"cekTransfer()\" slot=\"start\" value=\"0\" checked></ion-radio>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Bayar di tempat</ion-label>\n      <ion-radio (click)=\"cekDiTempat()\" slot=\"start\" value=\"1\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n\n  <br>\n  <br>\n  <p>Jika Anda memilih transfer bank, pembayaran bisa dilakukan melalui transfer ke salah satu rekening berikut: </p>\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo-bca.jpg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_cimb.jpeg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_mandiri.png\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <br>\n  <ion-button (click)=\"doBayar()\" expand=\"full\">Proses</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_konf-reservasi_konf-reservasi_module_ts-es2015.js.map