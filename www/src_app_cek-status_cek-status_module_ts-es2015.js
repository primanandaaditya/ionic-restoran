(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_cek-status_cek-status_module_ts"],{

/***/ 12589:
/*!*********************************************************!*\
  !*** ./src/app/cek-status/cek-status-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CekStatusPageRoutingModule": function() { return /* binding */ CekStatusPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _cek_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cek-status.page */ 32939);




const routes = [
    {
        path: '',
        component: _cek_status_page__WEBPACK_IMPORTED_MODULE_0__.CekStatusPage
    }
];
let CekStatusPageRoutingModule = class CekStatusPageRoutingModule {
};
CekStatusPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CekStatusPageRoutingModule);



/***/ }),

/***/ 42152:
/*!*************************************************!*\
  !*** ./src/app/cek-status/cek-status.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CekStatusPageModule": function() { return /* binding */ CekStatusPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _cek_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cek-status-routing.module */ 12589);
/* harmony import */ var _cek_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cek-status.page */ 32939);







let CekStatusPageModule = class CekStatusPageModule {
};
CekStatusPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cek_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.CekStatusPageRoutingModule
        ],
        declarations: [_cek_status_page__WEBPACK_IMPORTED_MODULE_1__.CekStatusPage]
    })
], CekStatusPageModule);



/***/ }),

/***/ 32939:
/*!***********************************************!*\
  !*** ./src/app/cek-status/cek-status.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CekStatusPage": function() { return /* binding */ CekStatusPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_cek_status_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cek-status.page.html */ 66356);
/* harmony import */ var _cek_status_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cek-status.page.scss */ 8586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);











let CekStatusPage = class CekStatusPage {
    constructor(storage, http, ls, toast, navCtrl, router) {
        this.storage = storage;
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.router = router;
        this.param = {};
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getData();
    }
    getData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.param.id_user = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'pesanan/cek_status.php', this.param).subscribe((res) => {
                this.ls.present();
                console.log(res.message);
                this.list = res.message;
                this.ls.dismiss();
            });
        });
    }
};
CekStatusPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
CekStatusPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cek-status',
        template: _raw_loader_cek_status_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cek_status_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CekStatusPage);



/***/ }),

/***/ 8586:
/*!*************************************************!*\
  !*** ./src/app/cek-status/cek-status.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZWstc3RhdHVzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 66356:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cek-status/cek-status.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Cek Status</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n    <ion-card *ngFor=\"let item of list;\">\n      <ion-card-header>\n        <ion-card-subtitle>{{ item.nama }}</ion-card-subtitle>\n        <ion-card-title>No. transaksi: {{ item.nomor }}</ion-card-title>\n        <ion-card-subtitle>Tanggal {{ item.tanggal }}</ion-card-subtitle>\n        <ion-card-subtitle>Total Rp. {{ item.total }}</ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-chip>\n          {{ item.keterangan }}\n        </ion-chip>\n\n      </ion-card-content>\n    </ion-card>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cek-status_cek-status_module_ts-es2015.js.map