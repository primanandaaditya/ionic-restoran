(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_detail_detail_module_ts"], {
    /***/
    42080: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailPageRoutingModule": function DetailPageRoutingModule() {
          return (
            /* binding */
            _DetailPageRoutingModule
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


      var _detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./detail.page */
      33495);

      var routes = [{
        path: '',
        component: _detail_page__WEBPACK_IMPORTED_MODULE_0__.DetailPage
      }];

      var _DetailPageRoutingModule = function DetailPageRoutingModule() {
        _classCallCheck(this, DetailPageRoutingModule);
      };

      _DetailPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _DetailPageRoutingModule);
      /***/
    },

    /***/
    9251: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailPageModule": function DetailPageModule() {
          return (
            /* binding */
            _DetailPageModule
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


      var _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./detail-routing.module */
      42080);
      /* harmony import */


      var _detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./detail.page */
      33495);

      var _DetailPageModule = function DetailPageModule() {
        _classCallCheck(this, DetailPageModule);
      };

      _DetailPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailPageRoutingModule],
        declarations: [_detail_page__WEBPACK_IMPORTED_MODULE_1__.DetailPage]
      })], _DetailPageModule);
      /***/
    },

    /***/
    33495: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DetailPage": function DetailPage() {
          return (
            /* binding */
            _DetailPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./detail.page.html */
      40276);
      /* harmony import */


      var _detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./detail.page.scss */
      99685);
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

      var _DetailPage = /*#__PURE__*/function () {
        function DetailPage(storage, http, ls, toast, route, navCtrl) {
          _classCallCheck(this, DetailPage);

          this.storage = storage;
          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.route = route;
          this.navCtrl = navCtrl;
          this.rupiah = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.Rupiah;
          this.add = {};
        }

        _createClass(DetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.idProduk = this.route.snapshot.paramMap.get('id');
                      console.log('id produk: ' + this.idProduk);
                      this.getProdukDetail();
                      _context.next = 5;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NAMA_WILAYAH);

                    case 5:
                      this.nama_wilayah = _context.sent;
                      this.add.qty = 1;

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getProdukDetail",
          value: function getProdukDetail() {
            var _this = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'produk/detail.php?id=' + this.idProduk).subscribe(function (res) {
              _this.ls.present();

              console.log(res.list);
              _this.list = res.list;
              _this.imagePath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.gambarUrl + res.list.gambar;
              _this.nama = res.list.nama;
              _this.harga = res.list.harga;

              _this.ls.dismiss();
            });
          }
        }, {
          key: "addKeranjang",
          value: function addKeranjang() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.ID);

                    case 2:
                      this.add.id_user = _context2.sent;
                      this.add.id_produk = this.idProduk;
                      this.add.harga = this.harga;
                      console.log('data ' + this.add.id_user);
                      console.log('data ' + this.add.id_produk);
                      console.log('data ' + this.add.harga);
                      console.log('data ' + this.add.qty);
                      this.ls.present();
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang/add.php', this.add).subscribe(function (res) {
                        console.log(res);

                        _this2.ls.dismiss();

                        _this2.showToast(res.message);
                      });

                    case 11:
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

        return DetailPage;
      }();

      _DetailPage.ctorParameters = function () {
        return [{
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_5__.Storage
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _DetailPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-detail',
        template: _raw_loader_detail_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _DetailPage);
      /***/
    },

    /***/
    99685: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZXRhaWwucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    40276: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Detail Produk</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\">\n\n  <center>\n    <ion-img style=\"width: 300px; height: 300px\" src=\"{{ imagePath }}\"></ion-img>\n  </center>\n  <h1 style=\"text-align: center\">{{ nama }}</h1>\n  <h3 style=\"text-align: center\">Rp. {{ harga }}</h3>\n  <p style=\"text-align: center\">Dikirim ke : {{ nama_wilayah }}</p>\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col class=\"ion-align-self-center\">\n        Jumlah :\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <ion-input style=\"text-align: center\" [(ngModel)]=\"add.qty\" min=\"1\" max=\"50\"  placeholder=\"Masukkan qty\" value=\"1\" type=\"number\"></ion-input>\n      </ion-col>\n      <ion-col class=\"ion-align-self-center\">\n        <ion-button (click)=\"addKeranjang()\" expand=\"full\">\n          <ion-icon name=\"cart-outline\"></ion-icon>\n          Tambah</ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_detail_detail_module_ts-es5.js.map