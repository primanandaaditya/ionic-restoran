(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_tab2_tab2_module_ts"], {
    /***/
    93092: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageRoutingModule": function Tab2PageRoutingModule() {
          return (
            /* binding */
            _Tab2PageRoutingModule
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
      }];

      var _Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      _Tab2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab2PageRoutingModule);
      /***/
    },

    /***/
    14608: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageModule": function Tab2PageModule() {
          return (
            /* binding */
            _Tab2PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2-routing.module */
      93092);

      var _Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      _Tab2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
      })], _Tab2PageModule);
      /***/
    },

    /***/
    70442: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2Page": function Tab2Page() {
          return (
            /* binding */
            _Tab2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab2.page.html */
      82477);
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab2.page.scss */
      92055);
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

      var _Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(storage, http, ls, toast, navCtrl, router) {
          _classCallCheck(this, Tab2Page);

          this.storage = storage;
          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.navCtrl = navCtrl;
          this.router = router;
          this.user = {};
          this.hapus = {};
        }

        _createClass(Tab2Page, [{
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
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang/delete.php', this.hapus).subscribe(function (res) {
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
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang/kosong.php', this.hapus).subscribe(function (res) {
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
                      this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'keranjang/get.php', this.user).subscribe(function (res) {
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
                        _this3.grandTotal = parseInt(_this3.biaya) + parseInt(_this3.total);

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

        return Tab2Page;
      }();

      _Tab2Page.ctorParameters = function () {
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

      _Tab2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab2Page);
      /***/
    },

    /***/
    92055: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    82477: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Keranjang\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\" [fullscreen]=\"true\">\n\n  <div *ngIf=\"!isLogin\">\n\n    <br>\n    <center>\n      <ion-label style=\"text-align: center\">Anda belum login</ion-label>\n      <br>\n    <ion-button routerLink=\"/login\">Login</ion-button>\n    </center>\n  </div>\n\n  <div *ngIf=\"total ==0 && isLogin\">\n    <center><h3>Keranjang Anda masih kosong</h3></center>\n    <br>\n    <ion-button expand=\"full\" routerLink=\"/pilih-menu\">Mulai belanja</ion-button>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor=\"let item of keranjang;\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{ pathGambar + item.gambar }}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        <h2>{{ item.nama }}</h2>\n        <h3>{{ item.qty }} item @Rp. {{ item.harga }}</h3>\n        <p>Subtotal Rp. {{ item.total  }}</p>\n      </ion-label>\n      <ion-avatar slot=\"end\">\n        <ion-icon (click)=\"hapusItem(item.id_produk)\" name=\"trash-outline\"></ion-icon>\n      </ion-avatar>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid *ngIf=\"total > 0\">\n    <ion-row>\n      <ion-col size=\"6\" size-md>\n        <ion-label>Total :</ion-label>\n      </ion-col>\n      <ion-col class=\"ion-align-self-end\" size=\"6\" size-md>\n        <ion-label>Rp. {{ total | number : fractionSize }}</ion-label>\n      </ion-col>\n\n      <ion-col size=\"6\" size-md>\n        <ion-label>Ongkos kirim:</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-label>Rp. {{ biaya | number : fractionSize }}</ion-label>\n      </ion-col>\n\n      <ion-col size=\"6\" size-md>\n        <ion-label>Grand total:</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-label>Rp. {{ grandTotal | number : fractionSize }}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf=\"total > 0\">\n    <ion-row>\n      <ion-col size=\"6\" size-md>\n        <ion-button (click)=\"kosongKeranjang()\" expand=\"full\">Batal</ion-button>\n      </ion-col>\n      <ion-col size=\"6\" size-md>\n        <ion-button routerLink=\"/konf-deliveri\" expand=\"full\">Beli</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es5.js.map