(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_konf-reservasi_konf-reservasi_module_ts"], {
    /***/
    4121: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KonfReservasiPageRoutingModule": function KonfReservasiPageRoutingModule() {
          return (
            /* binding */
            _KonfReservasiPageRoutingModule
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


      var _konf_reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./konf-reservasi.page */
      25093);

      var routes = [{
        path: '',
        component: _konf_reservasi_page__WEBPACK_IMPORTED_MODULE_0__.KonfReservasiPage
      }];

      var _KonfReservasiPageRoutingModule = function KonfReservasiPageRoutingModule() {
        _classCallCheck(this, KonfReservasiPageRoutingModule);
      };

      _KonfReservasiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _KonfReservasiPageRoutingModule);
      /***/
    },

    /***/
    28568: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KonfReservasiPageModule": function KonfReservasiPageModule() {
          return (
            /* binding */
            _KonfReservasiPageModule
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


      var _konf_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./konf-reservasi-routing.module */
      4121);
      /* harmony import */


      var _konf_reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./konf-reservasi.page */
      25093);

      var _KonfReservasiPageModule = function KonfReservasiPageModule() {
        _classCallCheck(this, KonfReservasiPageModule);
      };

      _KonfReservasiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _konf_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.KonfReservasiPageRoutingModule],
        declarations: [_konf_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.KonfReservasiPage]
      })], _KonfReservasiPageModule);
      /***/
    },

    /***/
    25093: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KonfReservasiPage": function KonfReservasiPage() {
          return (
            /* binding */
            _KonfReservasiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_konf_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./konf-reservasi.page.html */
      68663);
      /* harmony import */


      var _konf_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./konf-reservasi.page.scss */
      32871);
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

      var _KonfReservasiPage = /*#__PURE__*/function () {
        function KonfReservasiPage(http, ls, toast, storage, navCtrl) {
          _classCallCheck(this, KonfReservasiPage);

          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.bayar = {};
        }

        _createClass(KonfReservasiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.cara_bayar = '0';
          }
        }, {
          key: "cekTransfer",
          value: function cekTransfer() {
            this.cara_bayar = '0';
            console.log('cara bayar : ' + this.cara_bayar);
          }
        }, {
          key: "cekDiTempat",
          value: function cekDiTempat() {
            this.cara_bayar = '1';
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
                      _context.t0 = new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDate().toString() + '-2-';
                      _context.next = 3;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 3:
                      _context.t1 = _context.sent;
                      this.nomor = _context.t0 + _context.t1;
                      _context.next = 7;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL_RESERVASI);

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
                      this.ls.present();
                      this.bayar.jenis_pesanan = 2;
                      _context2.next = 4;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 4:
                      this.bayar.id_user = _context2.sent;
                      this.bayar.nomor = this.nomor;
                      _context2.next = 8;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL);

                    case 8:
                      this.bayar.total = _context2.sent;
                      _context2.next = 11;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.TGL_RESERVASI);

                    case 11:
                      this.bayar.tgl_reservasi = _context2.sent;
                      _context2.next = 14;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NOMOR_MEJA);

                    case 14:
                      this.bayar.meja = _context2.sent;
                      this.bayar.status_pesanan = 1;
                      console.log('Jenis pesanan : ' + this.bayar.jenis_pesanan);
                      console.log('ID User : ' + this.bayar.id_user);
                      console.log('Nomor : ' + this.bayar.nomor);
                      console.log('Total : ' + this.bayar.total);
                      console.log('Tgl Reservasi : ' + this.bayar.tgl_reservasi);
                      console.log('No. meja : ' + this.bayar.meja);
                      console.log('status_pesanan : ' + this.bayar.status_pesanan);
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'pesanan/add_reservasi.php', this.bayar).subscribe(function (res) {
                        console.log(res);

                        _this.ls.dismiss();

                        _this.showToast(res.message);

                        if (res.status === 1) {
                          _this.navCtrl.navigateRoot('/');
                        }
                      });

                    case 24:
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

        return KonfReservasiPage;
      }();

      _KonfReservasiPage.ctorParameters = function () {
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

      _KonfReservasiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-konf-reservasi',
        template: _raw_loader_konf_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_konf_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KonfReservasiPage);
      /***/
    },

    /***/
    32871: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrb25mLXJlc2VydmFzaS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    68663: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Konfirmasi Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n  <p>Pembayaran minimal 50%, bisa dilakukan melalui transfer ke salah satu rekening berikut: </p>\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo-bca.jpg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_cimb.jpeg\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <ion-img style=\"object-fit: cover\" src=\"assets/bank/logo_mandiri.png\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>154 234 529</h2>\n        <h3>a.n. Melissa</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Nomor transaksi (mohon sertakan nomor ini dalam berita)</ion-card-subtitle>\n      <ion-card-title>{{ nomor }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>Total yang harus dibayar</ion-card-subtitle>\n      <ion-card-title>Rp. {{ total }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button (click)=\"doBayar()\" expand=\"full\">Proses</ion-button>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_konf-reservasi_konf-reservasi_module_ts-es5.js.map