(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_reservasi_reservasi_module_ts"],{

/***/ 34701:
/*!*******************************************************!*\
  !*** ./src/app/reservasi/reservasi-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservasiPageRoutingModule": function() { return /* binding */ ReservasiPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservasi.page */ 73829);




const routes = [
    {
        path: '',
        component: _reservasi_page__WEBPACK_IMPORTED_MODULE_0__.ReservasiPage
    }
];
let ReservasiPageRoutingModule = class ReservasiPageRoutingModule {
};
ReservasiPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReservasiPageRoutingModule);



/***/ }),

/***/ 40288:
/*!***********************************************!*\
  !*** ./src/app/reservasi/reservasi.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservasiPageModule": function() { return /* binding */ ReservasiPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservasi-routing.module */ 34701);
/* harmony import */ var _reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservasi.page */ 73829);








let ReservasiPageModule = class ReservasiPageModule {
};
ReservasiPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReservasiPageRoutingModule
        ],
        declarations: [_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.ReservasiPage]
    })
], ReservasiPageModule);



/***/ }),

/***/ 73829:
/*!*********************************************!*\
  !*** ./src/app/reservasi/reservasi.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservasiPage": function() { return /* binding */ ReservasiPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reservasi.page.html */ 57080);
/* harmony import */ var _reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservasi.page.scss */ 98604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);











let ReservasiPage = class ReservasiPage {
    constructor(http, ls, toast, navCtrl, storage, formBuilder) {
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.warna1 = 'primary';
        this.warna2 = '';
        this.warna3 = '';
        this.warna4 = '';
        this.warna5 = '';
        this.warna6 = '';
        this.warna7 = '';
    }
    ngOnInit() {
        this.mejaAktif = '1';
    }
    aktifkanMeja(nomor) {
        this.mejaAktif = nomor;
        switch (nomor) {
            case 1: {
                this.warna1 = "primary";
                this.warna2 = "";
                this.warna3 = "";
                this.warna4 = "";
                this.warna5 = "";
                this.warna6 = "";
                this.warna7 = "";
                break;
            }
            case 2: {
                this.warna1 = "";
                this.warna2 = "primary";
                this.warna3 = "";
                this.warna4 = "";
                this.warna5 = "";
                this.warna6 = "";
                this.warna7 = "";
                break;
            }
            case 3: {
                this.warna1 = "";
                this.warna2 = "";
                this.warna3 = "primary";
                this.warna4 = "";
                this.warna5 = "";
                this.warna6 = "";
                this.warna7 = "";
                break;
            }
            case 4: {
                this.warna1 = "";
                this.warna2 = "";
                this.warna3 = "";
                this.warna4 = "primary";
                this.warna5 = "";
                this.warna6 = "";
                this.warna7 = "";
                break;
            }
            case 5: {
                this.warna1 = "";
                this.warna2 = "";
                this.warna3 = "";
                this.warna4 = "";
                this.warna5 = "primary";
                this.warna6 = "";
                this.warna7 = "";
                break;
            }
            case 6: {
                this.warna1 = "";
                this.warna2 = "";
                this.warna3 = "";
                this.warna4 = "";
                this.warna5 = "";
                this.warna6 = "primary";
                this.warna7 = "";
                break;
            }
            case 7: {
                this.warna1 = "";
                this.warna2 = "";
                this.warna3 = "";
                this.warna4 = "";
                this.warna5 = "";
                this.warna6 = "";
                this.warna7 = "primary";
                break;
            }
            default: {
                //statements;
                break;
            }
        }
        this.showToast('Anda memilih meja : ' + this.mejaAktif);
        console.log(this.mejaAktif);
    }
    simpanNomorMeja() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log('tgl reservasi ' + this.tglReservasi.toString().substr(0, 10));
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NOMOR_MEJA, this.mejaAktif);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.TGL_RESERVASI, this.tglReservasi.toString().substr(0, 10));
        });
    }
    showToast(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.toast.create({
                message: str,
                duration: 200,
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
ReservasiPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder }
];
ReservasiPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-reservasi',
        template: _raw_loader_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReservasiPage);



/***/ }),

/***/ 98604:
/*!***********************************************!*\
  !*** ./src/app/reservasi/reservasi.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZhc2kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 57080:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reservasi/reservasi.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\">\n\n  <h3 style=\"text-align: center\">Pilih tanggal dan meja</h3>\n\n  <br>\n  <br>\n  <ion-item>\n    <ion-label>Tgl reservasi</ion-label>\n    <ion-datetime displayFormat=\"YYYY-MM-DD\" [(ngModel)]=\"tglReservasi\"></ion-datetime>\n  </ion-item>\n\n  <br>\n  <br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card [color]=\"warna1\" (click)=\"aktifkanMeja(1)\">\n          <ion-card-header>\n            <center>\n              <ion-card-subtitle>MEJA</ion-card-subtitle>\n            </center>\n          </ion-card-header>\n          <ion-card-content>\n            <center><h1>1</h1></center>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card [color]=\"warna2\" (click)=\"aktifkanMeja(2)\">\n          <ion-card-header>\n            <center>\n              <ion-card-subtitle>MEJA</ion-card-subtitle>\n            </center>\n          </ion-card-header>\n          <ion-card-content>\n            <center><h1>2</h1></center>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-card [color]=\"warna3\" (click)=\"aktifkanMeja(3)\">\n          <ion-card-header>\n            <center>\n              <ion-card-subtitle>MEJA</ion-card-subtitle>\n            </center>\n          </ion-card-header>\n          <ion-card-content>\n            <center><h1>3</h1></center>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card [color]=\"warna4\" (click)=\"aktifkanMeja(4)\">\n          <ion-card-header>\n            <center>\n              <ion-card-subtitle>MEJA</ion-card-subtitle>\n            </center>\n          </ion-card-header>\n          <ion-card-content>\n            <center><h1>4</h1></center>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card [color]=\"warna5\" (click)=\"aktifkanMeja(5)\">\n          <ion-card-header>\n            <center>\n              <ion-card-subtitle>MEJA</ion-card-subtitle>\n            </center>\n          </ion-card-header>\n          <ion-card-content>\n            <center><h1>5</h1></center>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-card [color]=\"warna6\" (click)=\"aktifkanMeja(6)\">\n          <ion-card-header>\n            <center>\n              <ion-card-subtitle>MEJA</ion-card-subtitle>\n            </center>\n          </ion-card-header>\n          <ion-card-content>\n            <center><h1>6</h1></center>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card [color]=\"warna7\" (click)=\"aktifkanMeja(7)\">\n          <ion-card-header>\n            <center>\n              <ion-card-subtitle>MEJA</ion-card-subtitle>\n            </center>\n          </ion-card-header>\n          <ion-card-content>\n            <center><h1>7</h1></center>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n  <ion-button routerLink=\"/menu-reservasi\" (click)=\"simpanNomorMeja()\" expand=\"full\">Pilih menu</ion-button>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_reservasi_reservasi_module_ts-es2015.js.map