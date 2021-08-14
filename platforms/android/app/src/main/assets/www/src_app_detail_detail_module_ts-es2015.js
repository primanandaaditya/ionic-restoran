(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_detail_detail_module_ts"],{

/***/ 42080:
/*!*************************************************!*\
  !*** ./src/app/detail/detail-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageRoutingModule": function() { return /* binding */ DetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.page */ 33495);




const routes = [
    {
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_0__.DetailPage
    }
];
let DetailPageRoutingModule = class DetailPageRoutingModule {
};
DetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailPageRoutingModule);



/***/ }),

/***/ 9251:
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPageModule": function() { return /* binding */ DetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-routing.module */ 42080);
/* harmony import */ var _detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page */ 33495);







let DetailPageModule = class DetailPageModule {
};
DetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailPageRoutingModule
        ],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_1__.DetailPage]
    })
], DetailPageModule);



/***/ }),

/***/ 33495:
/*!***************************************!*\
  !*** ./src/app/detail/detail.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailPage": function() { return /* binding */ DetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./detail.page.html */ 40276);
/* harmony import */ var _detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.page.scss */ 99685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);











let DetailPage = class DetailPage {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.idProduk = this.route.snapshot.paramMap.get('id');
            console.log('id produk: ' + this.idProduk);
            this.nama_wilayah = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NAMA_WILAYAH);
            this.add.qty = 1;
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var a = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.IS_LOGIN);
            if (a === false || a === null) {
                this.isLogin = false;
            }
            else {
                this.isLogin = true;
                this.getProdukDetail();
            }
            console.log(new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDay().toString());
        });
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
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang/add.php', this.add).subscribe((res) => {
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
DetailPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController }
];
DetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DetailPage);



/***/ }),

/***/ 99685:
/*!*****************************************!*\
  !*** ./src/app/detail/detail.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 40276:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Detail Produk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\">\n\n  <div *ngIf=\"!isLogin\">\n    <br>\n    <center>\n      <ion-label style=\"text-align: center\">Anda belum login</ion-label>\n      <br>\n      <ion-button routerLink=\"/login\">Login</ion-button>\n    </center>\n  </div>\n\n\n  <div *ngIf=\"isLogin\">\n\n    <center>\n      <ion-img style=\"width: 300px; height: 300px\" src=\"{{ imagePath }}\"></ion-img>\n    </center>\n    <h1 style=\"text-align: center\">{{ nama }}</h1>\n    <h3 style=\"text-align: center\">Rp. {{ harga }}</h3>\n    <p style=\"text-align: center\">Dikirim ke : {{ nama_wilayah }}</p>\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col class=\"ion-align-self-center\">\n          Jumlah :\n        </ion-col>\n        <ion-col class=\"ion-align-self-center\">\n          <ion-input style=\"text-align: center\" [(ngModel)]=\"add.qty\" min=\"1\" max=\"50\"  placeholder=\"Masukkan qty\" value=\"1\" type=\"number\"></ion-input>\n        </ion-col>\n        <ion-col class=\"ion-align-self-center\">\n          <ion-button (click)=\"addKeranjang()\" expand=\"full\">\n            <ion-icon name=\"cart-outline\"></ion-icon>\n            Tambah</ion-button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n  </div>\n\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_detail_detail_module_ts-es2015.js.map