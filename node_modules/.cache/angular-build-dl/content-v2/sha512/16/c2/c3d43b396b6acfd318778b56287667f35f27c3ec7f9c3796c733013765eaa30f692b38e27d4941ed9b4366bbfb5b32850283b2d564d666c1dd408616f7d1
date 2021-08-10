(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_login_login_module_ts"],{

/***/ 45393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": function() { return /* binding */ LoginPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 66825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 80107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": function() { return /* binding */ LoginPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 45393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 66825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 66825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 76770);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 21339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);










let LoginPage = class LoginPage {
    constructor(http, ls, toast, navCtrl, storage) {
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.user = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const name = yield this.storage.get('nama');
            console.log(name);
        });
    }
    doLogin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ls.present();
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'auth/login.php', this.user).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield this.ls.dismiss();
                yield this.showToast(res.pesan);
                if (res.error === false) {
                    yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NAMA, res.hasil.nama);
                    yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID, res.hasil.id);
                    yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.PASSWORD, res.hasil.pass);
                    yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID_WILAYAH, res.hasil.id_wilayah);
                    yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NAMA_WILAYAH, res.hasil.nama_wilayah);
                    yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.HARGA, res.hasil.harga);
                    yield this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.IS_LOGIN, true);
                    console.log(res.hasil.id);
                    console.log(res.hasil.nama);
                    console.log(res.hasil.password);
                    console.log(res.hasil.nama_wilayah);
                    console.log(res.hasil.harga);
                    console.log('id wilayah ' + res.hasil.id_wilayah);
                    console.log('isLogin : ' + (yield this.storage.get('isLogin')));
                    this.navCtrl.navigateRoot('/');
                }
            }));
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
LoginPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 21339:
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 76770:
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <center><ion-title>LOGIN</ion-title></center>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\">\n\n  <br>\n  <br>\n  <center>\n    <ion-img style=\"width: 120px; height: 120px\" src=\"assets/icon/restaurant.png\"></ion-img>\n  </center>\n\n\n\n  <br>\n  <br>\n\n  <br>\n  <br>\n\n\n  <ion-item>\n    <ion-label position=\"stacked\">Email</ion-label>\n    <ion-input [(ngModel)]=\"user.email\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"stacked\">Password</ion-label>\n    <ion-input type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n  </ion-item>\n\n  <br>\n  <br>\n\n  <center>\n    <ion-button expand=\"full\" (click)=\"doLogin()\">Submit</ion-button>\n  </center>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts-es2015.js.map