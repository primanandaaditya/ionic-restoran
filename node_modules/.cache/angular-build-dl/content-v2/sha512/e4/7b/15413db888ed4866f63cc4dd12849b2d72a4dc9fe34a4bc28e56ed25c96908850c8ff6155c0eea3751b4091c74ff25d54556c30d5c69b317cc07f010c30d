(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_order-reservasi_order-reservasi_module_ts"],{

/***/ 50568:
/*!*******************************************************************!*\
  !*** ./src/app/order-reservasi/order-reservasi-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderReservasiPageRoutingModule": function() { return /* binding */ OrderReservasiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-reservasi.page */ 74172);




const routes = [
    {
        path: '',
        component: _order_reservasi_page__WEBPACK_IMPORTED_MODULE_0__.OrderReservasiPage
    }
];
let OrderReservasiPageRoutingModule = class OrderReservasiPageRoutingModule {
};
OrderReservasiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderReservasiPageRoutingModule);



/***/ }),

/***/ 23516:
/*!***********************************************************!*\
  !*** ./src/app/order-reservasi/order-reservasi.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderReservasiPageModule": function() { return /* binding */ OrderReservasiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-reservasi-routing.module */ 50568);
/* harmony import */ var _order_reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-reservasi.page */ 74172);







let OrderReservasiPageModule = class OrderReservasiPageModule {
};
OrderReservasiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _order_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderReservasiPageRoutingModule
        ],
        declarations: [_order_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.OrderReservasiPage]
    })
], OrderReservasiPageModule);



/***/ }),

/***/ 74172:
/*!*********************************************************!*\
  !*** ./src/app/order-reservasi/order-reservasi.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderReservasiPage": function() { return /* binding */ OrderReservasiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-reservasi.page.html */ 69057);
/* harmony import */ var _order_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-reservasi.page.scss */ 24738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);











let OrderReservasiPage = class OrderReservasiPage {
    constructor(storage, http, ls, toast, route, navCtrl) {
        this.storage = storage;
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.route = route;
        this.navCtrl = navCtrl;
        this.rupiah = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.Rupiah;
        this.add = {};
    }
    ngOnInit() {
        this.idProduk = this.route.snapshot.paramMap.get('id');
        console.log('id produk: ' + this.idProduk);
        this.getProdukDetail();
        this.add.qty = 1;
    }
    getProdukDetail() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'produk/detail.php?id=' + this.idProduk).subscribe((res) => {
            this.ls.present();
            console.log(res.list);
            this.list = res.list;
            this.imagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.gambarUrl + res.list.gambar;
            this.nama = res.list.nama;
            this.harga = res.list.harga;
            this.ls.dismiss();
        });
    }
    addKeranjang() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.add.id_user = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);
            this.add.id_produk = this.idProduk;
            this.add.harga = this.harga;
            console.log('data ' + this.add.id_user);
            console.log('data ' + this.add.id_produk);
            console.log('data ' + this.add.harga);
            console.log('data ' + this.add.qty);
            this.ls.present();
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang_reservasi/add.php', this.add).subscribe((res) => {
                console.log(res);
                this.ls.dismiss();
                this.showToast(res.message);
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
OrderReservasiPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
OrderReservasiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-order-reservasi',
        template: _raw_loader_order_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderReservasiPage);



/***/ }),

/***/ 24738:
/*!***********************************************************!*\
  !*** ./src/app/order-reservasi/order-reservasi.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1yZXNlcnZhc2kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 69057:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-reservasi/order-reservasi.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Order Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n  <center>\n    <ion-img style=\"width: 300px; height: 300px\" src=\"{{ imagePath }}\"></ion-img>\n  </center>\n  <h1 style=\"text-align: center\">{{ nama }}</h1>\n  <h3 style=\"text-align: center\">Rp. {{ harga }}</h3>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-align-self-center\">\n        Jumlah :\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <ion-input style=\"text-align: center\" [(ngModel)]=\"add.qty\" min=\"1\" max=\"50\"  placeholder=\"Masukkan qty\" value=\"1\" type=\"number\"></ion-input>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <ion-button (click)=\"addKeranjang()\" expand=\"full\">\n          <ion-icon name=\"cart-outline\"></ion-icon>\n          Tambah</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_order-reservasi_order-reservasi_module_ts-es2015.js.map