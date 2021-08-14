(self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_tab1_tab1_module_ts"],{

/***/ 42580:
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageRoutingModule": function() { return /* binding */ Tab1PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page,
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ 2168:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1PageModule": function() { return /* binding */ Tab1PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab1.page */ 46923);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1-routing.module */ 42580);








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab1PageRoutingModule
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page]
    })
], Tab1PageModule);



/***/ }),

/***/ 46923:
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab1Page": function() { return /* binding */ Tab1Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab1.page.html */ 5683);
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab1.page.scss */ 99474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loading.service */ 4471);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);











let Tab1Page = class Tab1Page {
    constructor(storage, http, ls, toast, navCtrl, router) {
        this.storage = storage;
        this.http = http;
        this.ls = ls;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.router = router;
        this.nama = '';
        this.pathGambar = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.gambarUrl;
    }
    getMakanan() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'produk/slide_makanan.php').subscribe((res) => {
            this.ls.present();
            console.log(res.list);
            this.makanan = res.list;
            this.ls.dismiss();
        });
    }
    getMinuman() {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'produk/slide_minuman.php').subscribe((res) => {
            this.ls.present();
            console.log(res.list);
            this.minuman = res.list;
            this.ls.dismiss();
        });
    }
    gotoDetailPage() {
        this.router.navigateByUrl('/detail');
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.nama = yield this.storage.get('nama');
            console.log(this.nama);
        });
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var a = yield this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.IS_LOGIN);
            if (a === null || a === false) {
                this.isLogin = false;
            }
            else {
                this.isLogin = true;
            }
            this.getMakanan();
            this.getMinuman();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
Tab1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab1Page);



/***/ }),

/***/ 99474:
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 5683:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\" [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card [class.ion-padding-top]=\"10\" [class.ion-padding-bottom]=\"5\">\n    <ion-slides pager=\"true\" [options]=\"{ slidesPerView:1, autoplay: {delay: 1500} }\">\n      <ion-slide>\n        <div class=\"slide\">\n          <small>Selamat datang di aplikasi restoran {{ this.nama }}</small>\n        </div>\n      </ion-slide>\n      <ion-slide>\n        <small>Mohon pilih delivery atau takeaway untuk melihat menu</small>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n\n  <br>\n  <br>\n\n  <div *ngIf=\"!isLogin\">\n    <br>\n    <center>\n      <ion-label style=\"text-align: center\">Anda belum login</ion-label>\n      <br>\n      <ion-button routerLink=\"/login\">Login</ion-button>\n    </center>\n  </div>\n\n  <ion-grid *ngIf=\"isLogin\">\n    <ion-row>\n      <ion-col size=\"6\" size-md>\n        <ion-button routerLink=\"/pilih-menu\" expand=\"full\">Delivery</ion-button>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-button routerLink=\"/reservasi\" expand=\"full\">Reservasi</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <br>\n  <br>\n\n  <div style=\"align-content: center\">\n    <ion-slides pager=\"true\" [options]=\"{ slidesPerView:1, autoplay: {delay: 2500} }\">\n      <ion-slide *ngFor=\"let item of makanan\" routerLink=\"/detail/{{ item.id }}\">\n        <div>\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>{{ item.nama }}</ion-card-subtitle>\n              <ion-card-title>Rp. {{ item.harga | number : fractionSize }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-img src=\"{{ pathGambar + item.gambar }}\"></ion-img>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div style=\"align-content: center\">\n    <ion-slides pager=\"true\" [options]=\"{ slidesPerView:1, autoplay: {delay: 1500} }\">\n      <ion-slide *ngFor=\"let item of minuman\" routerLink=\"/detail/{{ item.id }}\">\n        <div class=\"slide\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>{{ item.nama }}</ion-card-subtitle>\n              <ion-card-title>Rp. {{ item.harga | number : fractionSize }}</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-img src=\"{{ pathGambar + item.gambar }}\"></ion-img>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es2015.js.map