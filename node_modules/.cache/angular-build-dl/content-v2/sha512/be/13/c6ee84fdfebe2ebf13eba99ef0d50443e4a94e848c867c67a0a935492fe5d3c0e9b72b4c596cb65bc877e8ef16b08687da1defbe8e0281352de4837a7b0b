(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_register_register_module_ts"], {
    /***/
    23963: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageRoutingModule": function RegisterPageRoutingModule() {
          return (
            /* binding */
            _RegisterPageRoutingModule
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


      var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.page */
      98135);

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
      }];

      var _RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      _RegisterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterPageRoutingModule);
      /***/
    },

    /***/
    18723: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageModule": function RegisterPageModule() {
          return (
            /* binding */
            _RegisterPageModule
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-routing.module */
      23963);
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page */
      98135);

      var _RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      _RegisterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
      })], _RegisterPageModule);
      /***/
    },

    /***/
    98135: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPage": function RegisterPage() {
          return (
            /* binding */
            _RegisterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./register.page.html */
      29200);
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page.scss */
      69728);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      var _RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(http, ls, toast, navCtrl, formBuilder) {
          _classCallCheck(this, RegisterPage);

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
            nama: [{
              type: 'required',
              message: 'Nama harus diisi'
            }],
            email: [{
              type: 'required',
              message: 'Email harus diisi'
            }],
            password: [{
              type: 'required',
              message: 'Password harus diisi'
            }],
            cpassword: [{
              type: 'required',
              message: 'Konfirmasi password harus diisi'
            }],
            id_wilayah: [{
              type: 'required',
              message: 'Wilayah harus diisi'
            }]
          };
        }

        _createClass(RegisterPage, [{
          key: "nama",
          get: function get() {
            return this.regForm.get('nama');
          }
        }, {
          key: "email",
          get: function get() {
            return this.regForm.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            return this.regForm.get('password');
          }
        }, {
          key: "cpassword",
          get: function get() {
            return this.regForm.get('cpassword');
          }
        }, {
          key: "id_wilayah",
          get: function get() {
            return this.regForm.get('id_wilayah');
          }
        }, {
          key: "doRegister",
          value: function doRegister() {
            var _this = this;

            this.ls.present();
            this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'auth/register.php', this.regForm.value).subscribe(function (res) {
              console.log(res);

              _this.ls.dismiss();

              _this.showToast(res.message);

              if (res.status === 1) {
                _this.navCtrl.navigateRoot('/');
              }
            });
          }
        }, {
          key: "getWilayah",
          value: function getWilayah() {
            var _this2 = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.baseUrl + 'wilayah/list_wilayah.php').subscribe(function (res) {
              _this2.ls.present();

              console.log(res);
              _this2.listWilayah = res.list;

              _this2.ls.dismiss();
            });
          }
        }, {
          key: "showToast",
          value: function showToast(str) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
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
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getWilayah();
          }
        }]);

        return RegisterPage;
      }();

      _RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
        }, {
          type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }];
      };

      _RegisterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegisterPage);
      /***/
    },

    /***/
    69728: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    29200: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"background\" [class.ion-padding]=\"20\">\n\n  <br>\n  <form [formGroup]=\"regForm\" (ngSubmit)=\"doRegister()\">\n    <ion-item>\n      <ion-label position=\"floating\">Nama</ion-label>\n      <ion-input formControlName=\"nama\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.nama\">\n      <ng-container *ngIf=\"nama.hasError(error.type) && (nama.dirty || nama.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input formControlName=\"email\" type=\"email\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.email\">\n      <ng-container *ngIf=\"email.hasError(error.type) && (email.dirty || email.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input formControlName=\"password\" ></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.password\">\n      <ng-container *ngIf=\"password.hasError(error.type) && (password.dirty || password.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"floating\">Ulangi password</ion-label>\n      <ion-input formControlName=\"cpassword\"></ion-input>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.cpassword\">\n      <ng-container *ngIf=\"cpassword.hasError(error.type) && (cpassword.dirty || cpassword.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <ion-item>\n      <ion-label>Wilayah</ion-label>\n      <ion-select formControlName=\"id_wilayah\">\n        <ion-select-option *ngFor=\"let item of listWilayah;\" value=\"{{item.id}}\">{{item.nama}} </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <div *ngFor=\"let error of errorMessages.id_wilayah\">\n      <ng-container *ngIf=\"id_wilayah.hasError(error.type) && (id_wilayah.dirty || id_wilayah.touched)\">\n        <center><small>{{ error.message }}</small></center>\n      </ng-container>\n    </div>\n\n    <br>\n    <ion-button [disabled]=\"!regForm.valid\" type=\"submit\" expand=\"full\">Submit</ion-button>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_register_register_module_ts-es5.js.map