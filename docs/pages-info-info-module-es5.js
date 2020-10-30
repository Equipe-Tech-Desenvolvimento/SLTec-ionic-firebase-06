(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-info-info-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info/info.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info/info.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesInfoInfoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Informações</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h3>Sobre este aplicativo</h3>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequatur expedita quos deleniti, mollitia vel!\r\n      Facere, doloribus quisquam? Necessitatibus explicabo natus provident consequatur exercitationem quasi dolorum\r\n      magni non est error.</p>\r\n\r\n    <h3>Sobre o autor</h3>\r\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ipsum rerum dolorem, fugiat itaque, accusamus\r\n      aut illo quis, libero ipsam ad veritatis eum quae! Modi accusamus earum facere dicta totam.</p>\r\n\r\n    <h3>Sobre sua privacidade</h3>\r\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis soluta consequatur libero recusandae placeat\r\n      veniam blanditiis repellat sint labore dignissimos, quaerat enim ab, quas laboriosam laborum, molestiae corporis\r\n      pariatur ad!</p>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/info/info-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/info/info-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: InfoPageRoutingModule */

    /***/
    function srcAppPagesInfoInfoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function () {
        return InfoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./info.page */
      "./src/app/pages/info/info.page.ts");

      var routes = [{
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
      }];

      var InfoPageRoutingModule = function InfoPageRoutingModule() {
        _classCallCheck(this, InfoPageRoutingModule);
      };

      InfoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InfoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/info/info.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/info/info.module.ts ***!
      \*******************************************/

    /*! exports provided: InfoPageModule */

    /***/
    function srcAppPagesInfoInfoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoPageModule", function () {
        return InfoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./info-routing.module */
      "./src/app/pages/info/info-routing.module.ts");
      /* harmony import */


      var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./info.page */
      "./src/app/pages/info/info.page.ts");

      var InfoPageModule = function InfoPageModule() {
        _classCallCheck(this, InfoPageModule);
      };

      InfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPageRoutingModule"]],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
      })], InfoPageModule);
      /***/
    },

    /***/
    "./src/app/pages/info/info.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/info/info.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesInfoInfoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8vaW5mby5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/info/info.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/info/info.page.ts ***!
      \*****************************************/

    /*! exports provided: InfoPage */

    /***/
    function srcAppPagesInfoInfoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoPage", function () {
        return InfoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var InfoPage = /*#__PURE__*/function () {
        function InfoPage() {
          _classCallCheck(this, InfoPage);
        }

        _createClass(InfoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return InfoPage;
      }();

      InfoPage.ctorParameters = function () {
        return [];
      };

      InfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./info.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/info/info.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./info.page.scss */
        "./src/app/pages/info/info.page.scss"))["default"]]
      })], InfoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-info-info-module-es5.js.map