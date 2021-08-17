(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 35355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": function() { return /* binding */ Tab4PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 32486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": function() { return /* binding */ Tab4PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4-routing.module */ 35355);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page */ 3631);







let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_0__.Tab4PageRoutingModule
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_1__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": function() { return /* binding */ Tab4Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab4.page.html */ 28203);
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss */ 35300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);







let Tab4Page = class Tab4Page {
    constructor(storage, nav) {
        this.storage = storage;
        this.nav = nav;
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.isLogin = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.IS_LOGIN);
            console.log('tab4 isLogin: ' + this.isLogin);
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    logout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.isLogin = false;
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.NAMA, '');
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ID, 0);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.PASSWORD, '');
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ID_WILAYAH, 0);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.IS_LOGIN, false);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.HARGA, 0);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.GRAND_TOTAL, 0);
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.CARA_BAYAR, '');
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.NOMOR_MEJA, '');
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.TGL_RESERVASI, '');
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.ID_WILAYAH, '');
            yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.PASSWORD, '');
            console.log('tab4 isLogin: ' + this.isLogin);
            yield this.nav.navigateRoot('/');
        });
    }
};
Tab4Page.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab4Page);



/***/ }),

/***/ 35300:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 28203:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Profil</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"10\">\n\n  <!-- List of Text Items -->\n  <ion-list>\n    <div *ngIf=\"!isLogin\">\n      <ion-item routerLink=\"/login\">\n        <ion-label>Login</ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"isLogin\" >\n      <ion-item routerLink=\"/upload-bukti-transfer\">\n        <ion-label>Upload bukti transfer</ion-label>\n      </ion-item>\n    </div>\n    <div *ngIf=\"isLogin\">\n      <ion-item (click)=\"logout()\">\n        <ion-label>Logout</ion-label>\n      </ion-item>\n    </div>\n    <ion-item routerLink=\"/register\">\n      <ion-label>Register</ion-label>\n    </ion-item>\n  </ion-list>\n\n  <center><p><small>Ver 1.0.0</small></p></center>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts-es2015.js.map