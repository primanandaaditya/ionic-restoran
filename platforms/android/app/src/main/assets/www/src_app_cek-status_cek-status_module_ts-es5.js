(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_cek-status_cek-status_module_ts"], {
    /***/
    12589: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CekStatusPageRoutingModule": function CekStatusPageRoutingModule() {
          return (
            /* binding */
            _CekStatusPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _cek_status_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cek-status.page */
      32939);

      var routes = [{
        path: '',
        component: _cek_status_page__WEBPACK_IMPORTED_MODULE_0__.CekStatusPage
      }];

      var _CekStatusPageRoutingModule = function CekStatusPageRoutingModule() {
        _classCallCheck(this, CekStatusPageRoutingModule);
      };

      _CekStatusPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _CekStatusPageRoutingModule);
      /***/
    },

    /***/
    42152: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CekStatusPageModule": function CekStatusPageModule() {
          return (
            /* binding */
            _CekStatusPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _cek_status_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./cek-status-routing.module */
      12589);
      /* harmony import */


      var _cek_status_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cek-status.page */
      32939);

      var _CekStatusPageModule = function CekStatusPageModule() {
        _classCallCheck(this, CekStatusPageModule);
      };

      _CekStatusPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _cek_status_routing_module__WEBPACK_IMPORTED_MODULE_0__.CekStatusPageRoutingModule],
        declarations: [_cek_status_page__WEBPACK_IMPORTED_MODULE_1__.CekStatusPage]
      })], _CekStatusPageModule);
      /***/
    },

    /***/
    32939: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CekStatusPage": function CekStatusPage() {
          return (
            /* binding */
            _CekStatusPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_cek_status_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./cek-status.page.html */
      66356);
      /* harmony import */


      var _cek_status_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./cek-status.page.scss */
      8586);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/loading.service */
      4471);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _CekStatusPage = /*#__PURE__*/function () {
        function CekStatusPage(storage, http, ls, toast, navCtrl, router) {
          _classCallCheck(this, CekStatusPage);

          this.storage = storage;
          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.navCtrl = navCtrl;
          this.router = router;
          this.param = {};
        }

        _createClass(CekStatusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getData();
          }
        }, {
          key: "getData",
          value: function getData() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 2:
                      this.param.id_user = _context.sent;
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'pesanan/cek_status.php', this.param).subscribe(function (res) {
                        _this.ls.present();

                        console.log(res.message);
                        _this.list = res.message;

                        _this.ls.dismiss();
                      });

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return CekStatusPage;
      }();

      _CekStatusPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
        }];
      };

      _CekStatusPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cek-status',
        template: _raw_loader_cek_status_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_cek_status_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _CekStatusPage);
      /***/
    },

    /***/
    8586: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjZWstc3RhdHVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    66356: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Cek Status</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n    <ion-card *ngFor=\"let item of list;\">\n      <ion-card-header>\n        <ion-card-subtitle>{{ item.nama }}</ion-card-subtitle>\n        <ion-card-title>No. transaksi: {{ item.nomor }}</ion-card-title>\n        <ion-card-subtitle>Tanggal {{ item.tanggal }}</ion-card-subtitle>\n        <ion-card-subtitle>Total Rp. {{ item.total }}</ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-chip>\n          {{ item.keterangan }}\n        </ion-chip>\n\n      </ion-card-content>\n    </ion-card>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_cek-status_cek-status_module_ts-es5.js.map