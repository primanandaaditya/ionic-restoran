(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrestoran"] = self["webpackChunkrestoran"] || []).push([["src_app_hubungikami_hubungikami_module_ts"], {
    /***/
    73007: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HubungikamiPageRoutingModule": function HubungikamiPageRoutingModule() {
          return (
            /* binding */
            _HubungikamiPageRoutingModule
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


      var _hubungikami_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hubungikami.page */
      41479);

      var routes = [{
        path: '',
        component: _hubungikami_page__WEBPACK_IMPORTED_MODULE_0__.HubungikamiPage
      }];

      var _HubungikamiPageRoutingModule = function HubungikamiPageRoutingModule() {
        _classCallCheck(this, HubungikamiPageRoutingModule);
      };

      _HubungikamiPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HubungikamiPageRoutingModule);
      /***/
    },

    /***/
    70434: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HubungikamiPageModule": function HubungikamiPageModule() {
          return (
            /* binding */
            _HubungikamiPageModule
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


      var _hubungikami_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./hubungikami-routing.module */
      73007);
      /* harmony import */


      var _hubungikami_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hubungikami.page */
      41479);

      var _HubungikamiPageModule = function HubungikamiPageModule() {
        _classCallCheck(this, HubungikamiPageModule);
      };

      _HubungikamiPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _hubungikami_routing_module__WEBPACK_IMPORTED_MODULE_0__.HubungikamiPageRoutingModule],
        declarations: [_hubungikami_page__WEBPACK_IMPORTED_MODULE_1__.HubungikamiPage]
      })], _HubungikamiPageModule);
      /***/
    },

    /***/
    41479: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HubungikamiPage": function HubungikamiPage() {
          return (
            /* binding */
            _HubungikamiPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_hubungikami_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./hubungikami.page.html */
      99668);
      /* harmony import */


      var _hubungikami_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hubungikami.page.scss */
      89984);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HubungikamiPage = /*#__PURE__*/function () {
        function HubungikamiPage() {
          _classCallCheck(this, HubungikamiPage);
        }

        _createClass(HubungikamiPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HubungikamiPage;
      }();

      _HubungikamiPage.ctorParameters = function () {
        return [];
      };

      _HubungikamiPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-hubungikami',
        template: _raw_loader_hubungikami_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_hubungikami_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HubungikamiPage);
      /***/
    },

    /***/
    89984: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJodWJ1bmdpa2FtaS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    99668: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Hubungi kami</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [class.ion-padding]=\"20\">\n\n  <p>Untuk hal-hal penting pada pesananmu silakan hubungi 777888999</p>\n\n  <br>\n  <p>Pertanyaanmu dan masukan sangat berarti bagi peningkatan pelayanan kami</p>\n\n\n  <form>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Nama</ion-label>\n      <ion-input></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Email</ion-label>\n      <ion-input type=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Subyek</ion-label>\n      <ion-select placeholder=\"Pilih satu\">\n        <ion-select-option value=\"0\">Inquiry</ion-select-option>\n        <ion-select-option value=\"1\">Suggestion</ion-select-option>\n        <ion-select-option value=\"2\">Compliment</ion-select-option>\n        <ion-select-option value=\"3\">Complain</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Jenis pesanan</ion-label>\n      <ion-select placeholder=\"Pilih satu\">\n        <ion-select-option value=\"0\">Online delivery</ion-select-option>\n        <ion-select-option value=\"1\">Online take-away</ion-select-option>\n        <ion-select-option value=\"2\">Phone Delivery</ion-select-option>\n        <ion-select-option value=\"3\">Phone take-away</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label position=\"stacked\">Pesan</ion-label>\n      <ion-textarea>\n      </ion-textarea>\n    </ion-item>\n\n    <br>\n    <ion-button expand=\"full\">Submit</ion-button>\n\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_hubungikami_hubungikami_module_ts-es5.js.map