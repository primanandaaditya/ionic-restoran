(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_konf-deliveri_konf-deliveri_module_ts"],{

/***/ 67673:
/*!***************************************************************!*\
  !*** ./src/app/konf-deliveri/konf-deliveri-routing.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KonfDeliveriPageRoutingModule": function() { return /* binding */ KonfDeliveriPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _konf_deliveri_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./konf-deliveri.page */ 95734);




const routes = [
    {
        path: '',
        component: _konf_deliveri_page__WEBPACK_IMPORTED_MODULE_0__.KonfDeliveriPage
    }
];
let KonfDeliveriPageRoutingModule = class KonfDeliveriPageRoutingModule {
};
KonfDeliveriPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KonfDeliveriPageRoutingModule);



/***/ }),

/***/ 15777:
/*!*******************************************************!*\
  !*** ./src/app/konf-deliveri/konf-deliveri.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KonfDeliveriPageModule": function() { return /* binding */ KonfDeliveriPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _konf_deliveri_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./konf-deliveri-routing.module */ 67673);
/* harmony import */ var _konf_deliveri_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./konf-deliveri.page */ 95734);







let KonfDeliveriPageModule = class KonfDeliveriPageModule {
};
KonfDeliveriPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _konf_deliveri_routing_module__WEBPACK_IMPORTED_MODULE_0__.KonfDeliveriPageRoutingModule
        ],
        declarations: [_konf_deliveri_page__WEBPACK_IMPORTED_MODULE_1__.KonfDeliveriPage]
    })
], KonfDeliveriPageModule);



/***/ }),

/***/ 95734:
/*!*****************************************************!*\
  !*** ./src/app/konf-deliveri/konf-deliveri.page.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KonfDeliveriPage": function() { return /* binding */ KonfDeliveriPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_konf_deliveri_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./konf-deliveri.page.html */ 42730);
/* harmony import */ var _konf_deliveri_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./konf-deliveri.page.scss */ 45088);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);










let KonfDeliveriPage = class KonfDeliveriPage {
    constructor(http, ls, toast, storage, navCtrl) {
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.bayar = {};
    }
    ngOnInit() {
    }
    doBayar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.ls.present();
            this.bayar.jenis_pesanan = 1;
            this.bayar.id_user = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);
            this.bayar.nomor = new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDay().toString() + '-1-' + (yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID));
            this.bayar.ongkir = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.HARGA);
            this.bayar.total = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL);
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'pesanan/add.php', this.bayar).subscribe((res) => {
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
KonfDeliveriPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController }
];
KonfDeliveriPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-konf-deliveri',
        template: _raw_loader_konf_deliveri_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_konf_deliveri_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], KonfDeliveriPage);



/***/ }),

/***/ 45088:
/*!*******************************************************!*\
  !*** ./src/app/konf-deliveri/konf-deliveri.page.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrb25mLWRlbGl2ZXJpLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 42730:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/konf-deliveri/konf-deliveri.page.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Konfirmasi Delivery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n  <ion-list>\n    <ion-radio-group value=\"0\">\n      <ion-list-header>\n        <ion-label>Metode Pembayaran</ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Transfer</ion-label>\n        <ion-radio slot=\"start\" value=\"0\"></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Bayar di tempat</ion-label>\n        <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n      </ion-item>\n\n    </ion-radio-group>\n  </ion-list>\n\n  <p>Jika memilih transfer, pembayaran bisa dilakukan melalui transfer ke salah satu rekening berikut: </p>\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo-bca.jpg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_cimb.jpeg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_mandiri.png\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <br>\n  <ion-button (click)=\"doBayar()\" expand=\"full\">Proses</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_konf-deliveri_konf-deliveri_module_ts-es2015.js.map