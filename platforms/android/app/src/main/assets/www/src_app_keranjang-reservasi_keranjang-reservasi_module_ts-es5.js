(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_keranjang-reservasi_keranjang-reservasi_module_ts"], {
    /***/
    51202: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KeranjangReservasiPageRoutingModule": function KeranjangReservasiPageRoutingModule() {
          return (
            /* binding */
            _KeranjangReservasiPageRoutingModule
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


      var _keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./keranjang-reservasi.page */
      70500);

      var routes = [{
        path: '',
        component: _keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_0__.KeranjangReservasiPage
      }];

      var _KeranjangReservasiPageRoutingModule = function KeranjangReservasiPageRoutingModule() {
        _classCallCheck(this, KeranjangReservasiPageRoutingModule);
      };

      _KeranjangReservasiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _KeranjangReservasiPageRoutingModule);
      /***/
    },

    /***/
    65933: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KeranjangReservasiPageModule": function KeranjangReservasiPageModule() {
          return (
            /* binding */
            _KeranjangReservasiPageModule
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


      var _keranjang_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./keranjang-reservasi-routing.module */
      51202);
      /* harmony import */


      var _keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./keranjang-reservasi.page */
      70500);

      var _KeranjangReservasiPageModule = function KeranjangReservasiPageModule() {
        _classCallCheck(this, KeranjangReservasiPageModule);
      };

      _KeranjangReservasiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _keranjang_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.KeranjangReservasiPageRoutingModule],
        declarations: [_keranjang_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.KeranjangReservasiPage]
      })], _KeranjangReservasiPageModule);
      /***/
    },

    /***/
    70500: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "KeranjangReservasiPage": function KeranjangReservasiPage() {
          return (
            /* binding */
            _KeranjangReservasiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_keranjang_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./keranjang-reservasi.page.html */
      45507);
      /* harmony import */


      var _keranjang_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./keranjang-reservasi.page.scss */
      71650);
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

      var _KeranjangReservasiPage = /*#__PURE__*/function () {
        function KeranjangReservasiPage(storage, http, ls, toast, navCtrl, router) {
          _classCallCheck(this, KeranjangReservasiPage);

          this.storage = storage;
          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.navCtrl = navCtrl;
          this.router = router;
          this.user = {};
          this.hapus = {};
        }

        _createClass(KeranjangReservasiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.pathGambar = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.gambarUrl;

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getKeranjang();
            console.log(new Date().getFullYear().toString() + new Date().getMonth().toString() + new Date().getDay().toString());
          }
        }, {
          key: "hapusItem",
          value: function hapusItem(id_produk) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 2:
                      this.id_user = _context2.sent;
                      this.hapus.id_user = this.id_user;
                      this.hapus.id_produk = id_produk;
                      this.ls.present();
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang_reservasi/delete.php', this.hapus).subscribe(function (res) {
                        console.log(res);

                        _this.ls.dismiss();

                        _this.showToast(res.message);

                        _this.getKeranjang();
                      });

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "kosongKeranjang",
          value: function kosongKeranjang() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 2:
                      this.id_user = _context3.sent;
                      this.hapus.id_user = this.id_user;
                      this.ls.present();
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang_reservasi/kosong.php', this.hapus).subscribe(function (res) {
                        console.log(res);

                        _this2.ls.dismiss();

                        _this2.showToast(res.message);

                        _this2.getKeranjang();
                      });

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getKeranjang",
          value: function getKeranjang() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var a;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.IS_LOGIN);

                    case 2:
                      a = _context4.sent;

                      if (!(a === false || a === null)) {
                        _context4.next = 7;
                        break;
                      }

                      this.isLogin = false;
                      _context4.next = 20;
                      break;

                    case 7:
                      this.isLogin = true;
                      _context4.next = 10;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 10:
                      this.id_user = _context4.sent;
                      _context4.next = 13;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.HARGA);

                    case 13:
                      this.biaya = _context4.sent;
                      _context4.next = 16;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NAMA_WILAYAH);

                    case 16:
                      this.wilayah = _context4.sent;
                      this.user.id_user = this.id_user;
                      this.ls.present();
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang_reservasi/get.php', this.user).subscribe(function (res) {
                        console.log(res);

                        _this3.ls.dismiss();

                        _this3.keranjang = res.message;
                        _this3.total = 0;

                        var _iterator = _createForOfIteratorHelper(_this3.keranjang),
                            _step;

                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var item = _step.value;
                            _this3.total = _this3.total + parseInt(item['total']);
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }

                        console.log('Total keranjang : ' + _this3.total);
                        _this3.grandTotal = parseInt(_this3.total);

                        _this3.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.GRAND_TOTAL, _this3.grandTotal);
                      });

                    case 20:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "showToast",
          value: function showToast(str) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
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
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return KeranjangReservasiPage;
      }();

      _KeranjangReservasiPage.ctorParameters = function () {
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

      _KeranjangReservasiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-keranjang-reservasi',
        template: _raw_loader_keranjang_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_keranjang_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _KeranjangReservasiPage);
      /***/
    },

    /***/
    71650: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrZXJhbmphbmctcmVzZXJ2YXNpLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    45507: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Keranjang Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [class.ion-padding]=\"20\" [fullscreen]=\"true\">\n\n  <div *ngIf=\"!isLogin\">\n    <br>\n    <center>\n      <ion-label style=\"text-align: center\">Anda belum login</ion-label>\n      <br>\n      <ion-button routerLink=\"/login\">Login</ion-button>\n    </center>\n  </div>\n\n\n  <div *ngIf=\"total ==0 && isLogin\">\n    <center><h3>Anda belum melakukan reservasi</h3></center>\n    <br>\n    <ion-button routerLink=\"/reservasi\" expand=\"full\">Reservasi sekarang</ion-button>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of keranjang;\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{ pathGambar + item.gambar }}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{ item.nama }}</h2>\n        <h3>{{ item.qty }} item @Rp. {{ item.harga }}</h3>\n        <p>Subtotal Rp. {{ item.total  }}</p>\n      </ion-label>\n      <ion-avatar slot=\"end\">\n        <ion-icon (click)=\"hapusItem(item.id_produk)\" name=\"trash-outline\"></ion-icon>\n      </ion-avatar>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid *ngIf=\"total > 0\">\n    <ion-row>\n      <ion-col size=\"6\" size-md>\n        <ion-label>Grand total:</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-label>Rp. {{ grandTotal | number : fractionSize }}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf=\"total > 0\">\n    <ion-row>\n      <ion-col size=\"6\" size-md>\n        <ion-button (click)=\"kosongKeranjang()\" expand=\"full\">Batal</ion-button>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-button routerLink=\"/konf-reservasi\" expand=\"full\">Beli</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_keranjang-reservasi_keranjang-reservasi_module_ts-es5.js.map