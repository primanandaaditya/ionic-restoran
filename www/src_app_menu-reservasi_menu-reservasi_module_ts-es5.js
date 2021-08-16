(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_menu-reservasi_menu-reservasi_module_ts"], {
    /***/
    44276: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuReservasiPageRoutingModule": function MenuReservasiPageRoutingModule() {
          return (
            /* binding */
            _MenuReservasiPageRoutingModule
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


      var _menu_reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-reservasi.page */
      91726);

      var routes = [{
        path: '',
        component: _menu_reservasi_page__WEBPACK_IMPORTED_MODULE_0__.MenuReservasiPage
      }];

      var _MenuReservasiPageRoutingModule = function MenuReservasiPageRoutingModule() {
        _classCallCheck(this, MenuReservasiPageRoutingModule);
      };

      _MenuReservasiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MenuReservasiPageRoutingModule);
      /***/
    },

    /***/
    28272: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuReservasiPageModule": function MenuReservasiPageModule() {
          return (
            /* binding */
            _MenuReservasiPageModule
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


      var _menu_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./menu-reservasi-routing.module */
      44276);
      /* harmony import */


      var _menu_reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-reservasi.page */
      91726);

      var _MenuReservasiPageModule = function MenuReservasiPageModule() {
        _classCallCheck(this, MenuReservasiPageModule);
      };

      _MenuReservasiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _menu_reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.MenuReservasiPageRoutingModule],
        declarations: [_menu_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.MenuReservasiPage]
      })], _MenuReservasiPageModule);
      /***/
    },

    /***/
    91726: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MenuReservasiPage": function MenuReservasiPage() {
          return (
            /* binding */
            _MenuReservasiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_menu_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./menu-reservasi.page.html */
      69157);
      /* harmony import */


      var _menu_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./menu-reservasi.page.scss */
      45774);
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

      var _MenuReservasiPage = /*#__PURE__*/function () {
        function MenuReservasiPage(storage, http, ls, toast, navCtrl, router) {
          _classCallCheck(this, MenuReservasiPage);

          this.storage = storage;
          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.navCtrl = navCtrl;
          this.router = router;
          this.nama = '';
          this.pathGambar = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.gambarUrl;
        }

        _createClass(MenuReservasiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getMakanan",
          value: function getMakanan() {
            var _this = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'produk/list_makanan.php').subscribe(function (res) {
              _this.ls.present();

              console.log(res.list);
              _this.makanan = res.list;

              _this.ls.dismiss();
            });
          }
        }, {
          key: "getMinuman",
          value: function getMinuman() {
            var _this2 = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'produk/list_minuman.php').subscribe(function (res) {
              _this2.ls.present();

              console.log(res.list);
              _this2.minuman = res.list;

              _this2.ls.dismiss();
            });
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.get('nama');

                    case 2:
                      this.nama = _context.sent;
                      console.log(this.nama);

                    case 4:
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
            this.getMakanan();
            this.getMinuman();
          }
        }]);

        return MenuReservasiPage;
      }();

      _MenuReservasiPage.ctorParameters = function () {
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

      _MenuReservasiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-menu-reservasi',
        template: _raw_loader_menu_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_menu_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MenuReservasiPage);
      /***/
    },

    /***/
    45774: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LXJlc2VydmFzaS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    69157: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Pilih Menu Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\">\n\n  <center><h2>Menu makanan</h2></center>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let item of makanan;\" size=\"6\">\n        <ion-card routerLink=\"/order-reservasi/{{ item.id }}\">\n          <ion-card-header>\n            <ion-card-subtitle>{{ item.nama }}</ion-card-subtitle>\n            <ion-card-title>Rp. {{ item.harga | number : fractionSize }}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-img src=\"{{ pathGambar + item.gambar }}\"></ion-img>\n            <small>{{ item.keterangan }}</small>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <br>\n  <center><h2>Menu minuman</h2></center>\n  <ion-grid>\n    <ion-row>\n      <ion-col *ngFor=\"let item of minuman;\" size=\"6\">\n        <ion-card routerLink=\"/order-reservasi/{{ item.id }}\">\n          <ion-card-header>\n            <ion-card-subtitle>{{ item.nama }}</ion-card-subtitle>\n            <ion-card-title>Rp. {{ item.harga | number : fractionSize }}</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-img src=\"{{ pathGambar + item.gambar }}\"></ion-img>\n            <small>{{ item.keterangan }}</small>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-button routerLink=\"/keranjang-reservasi\" expand=\"full\">Lihat Keranjang Reservasi</ion-button>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_menu-reservasi_menu-reservasi_module_ts-es5.js.map