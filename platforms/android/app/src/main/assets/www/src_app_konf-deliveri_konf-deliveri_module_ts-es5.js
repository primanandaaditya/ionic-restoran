(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_konf-deliveri_konf-deliveri_module_ts"], {
    /***/
    67673: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KonfDeliveriPageRoutingModule": function KonfDeliveriPageRoutingModule() {
          return (
            /* binding */
            _KonfDeliveriPageRoutingModule
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


      var _konf_deliveri_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./konf-deliveri.page */
      95734);

      var routes = [{
        path: '',
        component: _konf_deliveri_page__WEBPACK_IMPORTED_MODULE_0__.KonfDeliveriPage
      }];

      var _KonfDeliveriPageRoutingModule = function KonfDeliveriPageRoutingModule() {
        _classCallCheck(this, KonfDeliveriPageRoutingModule);
      };

      _KonfDeliveriPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _KonfDeliveriPageRoutingModule);
      /***/
    },

    /***/
    15777: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KonfDeliveriPageModule": function KonfDeliveriPageModule() {
          return (
            /* binding */
            _KonfDeliveriPageModule
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


      var _konf_deliveri_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./konf-deliveri-routing.module */
      67673);
      /* harmony import */


      var _konf_deliveri_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./konf-deliveri.page */
      95734);

      var _KonfDeliveriPageModule = function KonfDeliveriPageModule() {
        _classCallCheck(this, KonfDeliveriPageModule);
      };

      _KonfDeliveriPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _konf_deliveri_routing_module__WEBPACK_IMPORTED_MODULE_0__.KonfDeliveriPageRoutingModule],
        declarations: [_konf_deliveri_page__WEBPACK_IMPORTED_MODULE_1__.KonfDeliveriPage]
      })], _KonfDeliveriPageModule);
      /***/
    },

    /***/
    95734: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KonfDeliveriPage": function KonfDeliveriPage() {
          return (
            /* binding */
            _KonfDeliveriPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_konf_deliveri_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./konf-deliveri.page.html */
      42730);
      /* harmony import */


      var _konf_deliveri_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./konf-deliveri.page.scss */
      45088);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/loading.service */
      4471);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      92340);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);

      var _KonfDeliveriPage = /*#__PURE__*/function () {
        function KonfDeliveriPage(http, ls, toast, storage, navCtrl) {
          _classCallCheck(this, KonfDeliveriPage);

          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.bayar = {};
        }

        _createClass(KonfDeliveriPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cara_bayar = 1;
          }
        }, {
          key: "cekTransfer",
          value: function cekTransfer() {
            this.cara_bayar = 1;
            console.log('cara bayar : ' + this.cara_bayar);
          }
        }, {
          key: "cekDiTempat",
          value: function cekDiTempat() {
            this.cara_bayar = 2;
            console.log('cara bayar : ' + this.cara_bayar);
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDate().toString() + '-1-';
                      _context.next = 3;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 3:
                      _context.t1 = _context.sent;
                      this.nomor = _context.t0 + _context.t1;
                      _context.next = 7;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL);

                    case 7:
                      this.total = _context.sent;

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "doBayar",
          value: function doBayar() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      // this.ls.present();
                      this.bayar.jenis_pesanan = 1;
                      _context2.next = 3;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 3:
                      this.bayar.id_user = _context2.sent;
                      this.bayar.nomor = this.nomor;
                      _context2.next = 7;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.HARGA);

                    case 7:
                      this.bayar.ongkir = _context2.sent;
                      _context2.next = 10;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL);

                    case 10:
                      this.bayar.total = _context2.sent;
                      this.bayar.cara_bayar = this.cara_bayar;
                      this.bayar.status_pesanan = 1;
                      console.log(this.bayar);
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'pesanan/add_delivery.php', this.bayar).subscribe(function (res) {
                        console.log(res);

                        _this.ls.dismiss();

                        _this.showToast(res.message);

                        if (res.status === 1) {
                          _this.navCtrl.navigateRoot('/');
                        }
                      });

                    case 15:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "showToast",
          value: function showToast(str) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toast.create({
                        message: str,
                        duration: 2000,
                        position: 'bottom',
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            console.log('OK Clicked');
                          }
                        }]
                      }).then(function (x) {
                        return x.present();
                      });

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return KonfDeliveriPage;
      }();

      _KonfDeliveriPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_7__.Storage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }];
      };

      _KonfDeliveriPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-konf-deliveri',
        template: _raw_loader_konf_deliveri_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_konf_deliveri_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KonfDeliveriPage);
      /***/
    },

    /***/
    45088: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrb25mLWRlbGl2ZXJpLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    42730: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Konfirmasi Delivery</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n  <ion-list>\n    <ion-radio-group value=\"0\">\n      <ion-list-header>\n        <ion-label>Metode Pembayaran</ion-label>\n      </ion-list-header>\n\n      <ion-item (click)=\"cekTransfer()\">\n        <ion-label>Transfer</ion-label>\n        <ion-radio slot=\"start\" value=\"0\"></ion-radio>\n      </ion-item>\n\n      <ion-item (click)=\"cekDiTempat()\">\n        <ion-label>Bayar di tempat</ion-label>\n        <ion-radio slot=\"start\" value=\"1\"></ion-radio>\n      </ion-item>\n\n    </ion-radio-group>\n  </ion-list>\n\n  <p>Jika memilih transfer, pembayaran bisa dilakukan melalui transfer ke salah satu rekening berikut: </p>\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo-bca.jpg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_cimb.jpeg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_mandiri.png\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <br>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Nomor transaksi (mohon sertakan nomor ini dalam berita)</ion-card-subtitle>\n      <ion-card-title>{{ nomor }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Total yang harus dibayar</ion-card-subtitle>\n      <ion-card-title>Rp. {{ total }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n  <br>\n  <ion-button (click)=\"doBayar()\" expand=\"full\">Proses</ion-button>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_konf-deliveri_konf-deliveri_module_ts-es5.js.map