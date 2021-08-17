(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_reservasi_reservasi_module_ts"], {
    /***/
    34701: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReservasiPageRoutingModule": function ReservasiPageRoutingModule() {
          return (
            /* binding */
            _ReservasiPageRoutingModule
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


      var _reservasi_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reservasi.page */
      73829);

      var routes = [{
        path: '',
        component: _reservasi_page__WEBPACK_IMPORTED_MODULE_0__.ReservasiPage
      }];

      var _ReservasiPageRoutingModule = function ReservasiPageRoutingModule() {
        _classCallCheck(this, ReservasiPageRoutingModule);
      };

      _ReservasiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReservasiPageRoutingModule);
      /***/
    },

    /***/
    40288: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReservasiPageModule": function ReservasiPageModule() {
          return (
            /* binding */
            _ReservasiPageModule
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


      var _reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./reservasi-routing.module */
      34701);
      /* harmony import */


      var _reservasi_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reservasi.page */
      73829);

      var _ReservasiPageModule = function ReservasiPageModule() {
        _classCallCheck(this, ReservasiPageModule);
      };

      _ReservasiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _reservasi_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReservasiPageRoutingModule],
        declarations: [_reservasi_page__WEBPACK_IMPORTED_MODULE_1__.ReservasiPage]
      })], _ReservasiPageModule);
      /***/
    },

    /***/
    73829: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReservasiPage": function ReservasiPage() {
          return (
            /* binding */
            _ReservasiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./reservasi.page.html */
      57080);
      /* harmony import */


      var _reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./reservasi.page.scss */
      98604);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
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


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _ReservasiPage = /*#__PURE__*/function () {
        function ReservasiPage(http, ls, toast, navCtrl, storage, formBuilder) {
          _classCallCheck(this, ReservasiPage);

          this.http = http;
          this.ls = ls;
          this.toast = toast;
          this.navCtrl = navCtrl;
          this.storage = storage;
          this.formBuilder = formBuilder;
          this.warna1 = 'primary';
          this.warna2 = '';
          this.warna3 = '';
          this.warna4 = '';
          this.warna5 = '';
          this.warna6 = '';
          this.warna7 = '';
          this.resForm = this.formBuilder.group({
            nomeja: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            tglres: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
          });
          this.errorMessages = {
            nomeja: [{
              type: 'required',
              message: 'Nomor meja harus dipilih'
            }],
            tglres: [{
              type: 'required',
              message: 'Tanggal reservasi harus diisi'
            }]
          };
        }

        _createClass(ReservasiPage, [{
          key: "nomeja",
          get: function get() {
            return this.resForm.get('nomeja');
          }
        }, {
          key: "tglres",
          get: function get() {
            return this.resForm.get('tglres');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.mejaAktif = '1';
          }
        }, {
          key: "aktifkanMeja",
          value: function aktifkanMeja(nomor) {
            this.mejaAktif = nomor;

            switch (nomor) {
              case 1:
                {
                  this.warna1 = "primary";
                  this.warna2 = "";
                  this.warna3 = "";
                  this.warna4 = "";
                  this.warna5 = "";
                  this.warna6 = "";
                  this.warna7 = "";
                  break;
                }

              case 2:
                {
                  this.warna1 = "";
                  this.warna2 = "primary";
                  this.warna3 = "";
                  this.warna4 = "";
                  this.warna5 = "";
                  this.warna6 = "";
                  this.warna7 = "";
                  break;
                }

              case 3:
                {
                  this.warna1 = "";
                  this.warna2 = "";
                  this.warna3 = "primary";
                  this.warna4 = "";
                  this.warna5 = "";
                  this.warna6 = "";
                  this.warna7 = "";
                  break;
                }

              case 4:
                {
                  this.warna1 = "";
                  this.warna2 = "";
                  this.warna3 = "";
                  this.warna4 = "primary";
                  this.warna5 = "";
                  this.warna6 = "";
                  this.warna7 = "";
                  break;
                }

              case 5:
                {
                  this.warna1 = "";
                  this.warna2 = "";
                  this.warna3 = "";
                  this.warna4 = "";
                  this.warna5 = "primary";
                  this.warna6 = "";
                  this.warna7 = "";
                  break;
                }

              case 6:
                {
                  this.warna1 = "";
                  this.warna2 = "";
                  this.warna3 = "";
                  this.warna4 = "";
                  this.warna5 = "";
                  this.warna6 = "primary";
                  this.warna7 = "";
                  break;
                }

              case 7:
                {
                  this.warna1 = "";
                  this.warna2 = "";
                  this.warna3 = "";
                  this.warna4 = "";
                  this.warna5 = "";
                  this.warna6 = "";
                  this.warna7 = "primary";
                  break;
                }

              default:
                {
                  //statements;
                  break;
                }
            }

            this.showToast('Anda memilih meja : ' + this.mejaAktif);
            console.log(this.mejaAktif);
          }
        }, {
          key: "simpanNomorMeja",
          value: function simpanNomorMeja() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var tgl;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log('tgl reservasi ' + this.tglReservasi.toString().substr(0,10));
                      tgl = this.resForm.value.tglres.toString().substr(0, 10);
                      console.log('No meja : ' + this.resForm.value.nomeja);
                      console.log('Tgl reservasi : ' + tgl);
                      _context.next = 5;
                      return this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.NOMOR_MEJA, this.resForm.value.nomeja);

                    case 5:
                      _context.next = 7;
                      return this.storage.set(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.TGL_RESERVASI, tgl);

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showToast",
          value: function showToast(str) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.toast.create({
                        message: str,
                        duration: 200,
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
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ReservasiPage;
      }();

      _ReservasiPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_8__.Storage
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _ReservasiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-reservasi',
        template: _raw_loader_reservasi_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_reservasi_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReservasiPage);
      /***/
    },

    /***/
    98604: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZhc2kucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    57080: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Reservasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n  <h3 style=\"text-align: center\">Denah Meja</h3>\n\n  <br>\n  <ion-img src=\"assets/icon/denah.png\">\n  </ion-img>\n  <br>\n  <form [formGroup]=\"resForm\" (ngSubmit)=\"simpanNomorMeja()\">\n  <ion-item>\n    <ion-label>Pilih meja</ion-label>\n    <ion-select formControlName=\"nomeja\" placeholder=\"Select One\">\n      <ion-select-option value=\"1\">Nomor 1</ion-select-option>\n      <ion-select-option value=\"3\">Nomor 3</ion-select-option>\n      <ion-select-option value=\"5\">Nomor 5</ion-select-option>\n      <ion-select-option value=\"7\">Nomor 7</ion-select-option>\n      <ion-select-option value=\"8\">Nomor 8</ion-select-option>\n      <ion-select-option value=\"9\">Nomor 9</ion-select-option>\n      <ion-select-option value=\"11\">Nomor 11</ion-select-option>\n      <ion-select-option value=\"12\">Nomor 12</ion-select-option>\n      <ion-select-option value=\"15\">Nomor 15</ion-select-option>\n      <ion-select-option value=\"16\">Nomor 16</ion-select-option>\n      <ion-select-option value=\"17\">Nomor 17</ion-select-option>\n      <ion-select-option value=\"19\">Nomor 19</ion-select-option>\n      <ion-select-option value=\"20\">Nomor 20</ion-select-option>\n      <ion-select-option value=\"21\">Nomor 21</ion-select-option>\n      <ion-select-option value=\"22\">Nomor 22</ion-select-option>\n      <ion-select-option value=\"23\">Nomor 23</ion-select-option>\n      <ion-select-option value=\"24\">Nomor 24</ion-select-option>\n      <ion-select-option value=\"25\">Nomor 25</ion-select-option>\n      <ion-select-option value=\"26\">Nomor 26</ion-select-option>\n      <ion-select-option value=\"27\">Nomor 27</ion-select-option>\n      <ion-select-option value=\"28\">Nomor 28</ion-select-option>\n      <ion-select-option value=\"30\">Nomor 30</ion-select-option>\n      <ion-select-option value=\"31\">Nomor 31</ion-select-option>\n      <ion-select-option value=\"32\">Nomor 32</ion-select-option>\n      <ion-select-option value=\"33\">Nomor 33</ion-select-option>\n      <ion-select-option value=\"36\">Nomor 36</ion-select-option>\n      <ion-select-option value=\"37\">Nomor 37</ion-select-option>\n      <ion-select-option value=\"38\">Nomor 38</ion-select-option>\n      <ion-select-option value=\"39\">Nomor 39</ion-select-option>\n      <ion-select-option value=\"40\">Nomor 40</ion-select-option>\n      <ion-select-option value=\"41\">Nomor 41</ion-select-option>\n      <ion-select-option value=\"42\">Nomor 42</ion-select-option>\n      <ion-select-option value=\"43\">Nomor 43</ion-select-option>\n      <ion-select-option value=\"46\">Nomor 46</ion-select-option>\n      <ion-select-option value=\"47\">Nomor 47</ion-select-option>\n    </ion-select>\n  </ion-item>\n    <div *ngFor=\"let error of errorMessages.nomeja\">\n      <ng-container *ngIf=\"nomeja.hasError(error.type) && (nomeja.dirty || nomeja.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n    <ion-label>Tanggal reservasi</ion-label>\n    <ion-datetime formControlName=\"tglres\" displayFormat=\"YYYY-MM-DD\"></ion-datetime>\n  </ion-item>\n    <div *ngFor=\"let error of errorMessages.tglres\">\n      <ng-container *ngIf=\"tglres.hasError(error.type) && (tglres.dirty || tglres.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n    <ion-button routerLink=\"/menu-reservasi\" [disabled]=\"!resForm.valid\" type=\"submit\" expand=\"full\">Pilih menu</ion-button>\n  </form>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_reservasi_reservasi_module_ts-es5.js.map