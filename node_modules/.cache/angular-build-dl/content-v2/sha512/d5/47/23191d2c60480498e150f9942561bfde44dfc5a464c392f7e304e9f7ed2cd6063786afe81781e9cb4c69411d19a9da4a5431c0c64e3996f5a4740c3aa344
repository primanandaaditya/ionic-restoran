(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_keranjang-reservasi_keranjang-reservasi_module_ts"],{

/***/ 51202:
/*!***************************************************************************!*\
  !*** ./src/app/keranjang-reservasi/keranjang-reservasi-routing.module.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeranjangReservasiPageRoutingModule": function() { return /* binding */ KeranjangReservasiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keranjang-reservasi.page */ 70500);




const routes = [
    {
        path: '',
        component: _keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_0__.KeranjangReservasiPage
    }
];
let KeranjangReservasiPageRoutingModule = class KeranjangReservasiPageRoutingModule {
};
KeranjangReservasiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KeranjangReservasiPageRoutingModule);



/***/ }),

/***/ 65933:
/*!*******************************************************************!*\
  !*** ./src/app/keranjang-reservasi/keranjang-reservasi.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeranjangReservasiPageModule": function() { return /* binding */ KeranjangReservasiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _keranjang_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keranjang-reservasi-routing.module */ 51202);
/* harmony import */ var _keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keranjang-reservasi.page */ 70500);







let KeranjangReservasiPageModule = class KeranjangReservasiPageModule {
};
KeranjangReservasiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _keranjang_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.KeranjangReservasiPageRoutingModule
        ],
        declarations: [_keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.KeranjangReservasiPage]
    })
], KeranjangReservasiPageModule);



/***/ }),

/***/ 70500:
/*!*****************************************************************!*\
  !*** ./src/app/keranjang-reservasi/keranjang-reservasi.page.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeranjangReservasiPage": function() { return /* binding */ KeranjangReservasiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_keranjang_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./keranjang-reservasi.page.html */ 45507);
/* harmony import */ var _keranjang_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keranjang-reservasi.page.scss */ 71650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);











let KeranjangReservasiPage = class KeranjangReservasiPage {
    constructor(storage, http, ls, toast, navCtrl, router) {
        this.storage = storage;
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.router = router;
        this.user = {};
        this.hapus = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.pathGambar = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.gambarUrl;
        });
    }
    ionViewWillEnter() {
        this.getKeranjang();
        console.log(new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDay().toString());
    }
    hapusItem(id_produk) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id_user = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);
            this.hapus.id_user = this.id_user;
            this.hapus.id_produk = id_produk;
            this.ls.present();
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang_reservasi/delete.php', this.hapus).subscribe((res) => {
                console.log(res);
                this.ls.dismiss();
                this.showToast(res.message);
                this.getKeranjang();
            });
        });
    }
    kosongKeranjang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.id_user = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);
            this.hapus.id_user = this.id_user;
            this.ls.present();
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang_reservasi/kosong.php', this.hapus).subscribe((res) => {
                console.log(res);
                this.ls.dismiss();
                this.showToast(res.message);
                this.getKeranjang();
            });
        });
    }
    getKeranjang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var a = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.IS_LOGIN);
            if (a === false || a === null) {
                this.isLogin = false;
            }
            else {
                this.isLogin = true;
                this.id_user = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);
                this.biaya = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.HARGA);
                this.wilayah = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NAMA_WILAYAH);
                this.user.id_user = this.id_user;
                this.ls.present();
                this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang_reservasi/get.php', this.user).subscribe((res) => {
                    console.log(res);
                    this.ls.dismiss();
                    this.keranjang = res.message;
                    this.total = 0;
                    for (let item of this.keranjang) {
                        this.total = this.total + parseInt(item['total']);
                    }
                    console.log('Total keranjang : ' + this.total);
                    this.grandTotal = parseInt(this.total);
                    this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL_RESERVASI, this.grandTotal);
                });
            }
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
KeranjangReservasiPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
KeranjangReservasiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-keranjang-reservasi',
        template: _raw_loader_keranjang_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_keranjang_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KeranjangReservasiPage);



/***/ }),

/***/ 71650:
/*!*******************************************************************!*\
  !*** ./src/app/keranjang-reservasi/keranjang-reservasi.page.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrZXJhbmphbmctcmVzZXJ2YXNpLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 45507:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/keranjang-reservasi/keranjang-reservasi.page.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Keranjang Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\" [fullscreen]=\"true\">\n\n  <div *ngIf=\"!isLogin\">\n    <br>\n    <center>\n      <ion-label style=\"text-align: center\">Anda belum login</ion-label>\n      <br>\n      <ion-button routerLink=\"/login\">Login</ion-button>\n    </center>\n  </div>\n\n\n  <div *ngIf=\"total ==0 && isLogin\">\n    <center><h3>Anda belum melakukan reservasi</h3></center>\n    <br>\n    <ion-button routerLink=\"/reservasi\" expand=\"full\">Reservasi sekarang</ion-button>\n  </div>\n\n  <ion-list *ngIf=\"total > 0 && isLogin\">\n    <ion-item *ngFor=\"let item of keranjang;\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{ pathGambar + item.gambar }}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{ item.nama }}</h2>\n        <h3>{{ item.qty }} item @Rp. {{ item.harga }}</h3>\n        <p>Subtotal Rp. {{ item.total  }}</p>\n      </ion-label>\n      <ion-avatar slot=\"end\">\n        <ion-icon (click)=\"hapusItem(item.id_produk)\" name=\"trash-outline\"></ion-icon>\n      </ion-avatar>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid *ngIf=\"total > 0\">\n    <ion-row>\n      <ion-col size=\"6\" size-md>\n        <ion-label>Grand total:</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-label>Rp. {{ grandTotal | number : fractionSize }}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf=\"total > 0\">\n    <ion-row>\n      <ion-col size=\"6\" size-md>\n        <ion-button (click)=\"kosongKeranjang()\" expand=\"full\">Batal</ion-button>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-button routerLink=\"/konf-reservasi\" expand=\"full\">Beli</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_keranjang-reservasi_keranjang-reservasi_module_ts-es2015.js.map