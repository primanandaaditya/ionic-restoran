(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_register_register_module_ts"],{

/***/ 23963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": function() { return /* binding */ RegisterPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": function() { return /* binding */ RegisterPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 23963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 98135);








let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": function() { return /* binding */ RegisterPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 29200);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 69728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);










let RegisterPage = class RegisterPage {
    constructor(http, ls, toast, navCtrl, formBuilder) {
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.user = {};
        this.wilayah = {};
        this.listWilayah = [];
        this.regForm = this.formBuilder.group({
            nama: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            cpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            id_wilayah: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
        this.errorMessages = {
            nama: [
                { type: 'required', message: 'Nama harus diisi' }
            ],
            email: [
                { type: 'required', message: 'Email harus diisi' }
            ],
            password: [
                { type: 'required', message: 'Password harus diisi' }
            ],
            cpassword: [
                { type: 'required', message: 'Konfirmasi password harus diisi' }
            ],
            id_wilayah: [
                { type: 'required', message: 'Wilayah harus diisi' }
            ]
        };
    }
    get nama() {
        return this.regForm.get('nama');
    }
    get email() {
        return this.regForm.get('email');
    }
    get password() {
        return this.regForm.get('password');
    }
    get cpassword() {
        return this.regForm.get('cpassword');
    }
    get id_wilayah() {
        return this.regForm.get('id_wilayah');
    }
    doRegister() {
        this.ls.present();
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'auth/register.php', this.regForm.value).subscribe((res) => {
            console.log(res);
            this.ls.dismiss();
            this.showToast(res.message);
            if (res.status === 1) {
                this.navCtrl.navigateRoot('/');
            }
        });
    }
    getWilayah() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'wilayah/list_wilayah.php').subscribe((res) => {
            this.ls.present();
            console.log(res);
            this.listWilayah = res.list;
            this.ls.dismiss();
        });
    }
    showToast(str) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
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
    ngOnInit() {
        this.getWilayah();
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 69728:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 29200:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n  <br>\n  <form [formGroup]=\"regForm\" (ngSubmit)=\"doRegister()\">\n    <ion-item>\n      <ion-label position=\"floating\">Nama</ion-label>\n      <ion-input formControlName=\"nama\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.nama\">\n      <ng-container *ngIf=\"nama.hasError(error.type) && (nama.dirty || nama.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.email\">\n      <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input formControlName=\"password\" ></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.password\">\n      <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Ulangi password</ion-label>\n      <ion-input formControlName=\"cpassword\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.cpassword\">\n      <ng-container *ngIf=\"cpassword.hasError(error.type) && (cpassword.dirty || cpassword.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label>Wilayah</ion-label>\n      <ion-select formControlName=\"id_wilayah\">\n        <ion-select-option *ngFor=\"let item of listWilayah;\" value=\"{{item.id}}\">{{item.nama}} </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.id_wilayah\">\n      <ng-container *ngIf=\"id_wilayah.hasError(error.type) && (id_wilayah.dirty || id_wilayah.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <br>\n    <ion-button [disabled]=\"!regForm.valid\" type=\"submit\" expand=\"full\">Submit</ion-button>\n  </form>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts-es2015.js.map