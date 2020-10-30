(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-e404-e404-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e404/e404.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e404/e404.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesE404E404PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Erro 404</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Oooops!</h2>\r\n    <p>O conteúdo que você está tentando acessar não pode ser encontrado...</p>\r\n    <p>&nbsp;</p>\r\n    <ion-button expand=\"block\" class=\"primary\" routerLink=\"/\">Voltar para Início</ion-button>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/e404/e404-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/e404/e404-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: E404PageRoutingModule */

    /***/
    function srcAppPagesE404E404RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E404PageRoutingModule", function () {
        return E404PageRoutingModule;
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


      var _e404_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./e404.page */
      "./src/app/pages/e404/e404.page.ts");

      var routes = [{
        path: '',
        component: _e404_page__WEBPACK_IMPORTED_MODULE_3__["E404Page"]
      }];

      var E404PageRoutingModule = function E404PageRoutingModule() {
        _classCallCheck(this, E404PageRoutingModule);
      };

      E404PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], E404PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/e404/e404.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/e404/e404.module.ts ***!
      \*******************************************/

    /*! exports provided: E404PageModule */

    /***/
    function srcAppPagesE404E404ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E404PageModule", function () {
        return E404PageModule;
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


      var _e404_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./e404-routing.module */
      "./src/app/pages/e404/e404-routing.module.ts");
      /* harmony import */


      var _e404_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./e404.page */
      "./src/app/pages/e404/e404.page.ts");

      var E404PageModule = function E404PageModule() {
        _classCallCheck(this, E404PageModule);
      };

      E404PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _e404_routing_module__WEBPACK_IMPORTED_MODULE_5__["E404PageRoutingModule"]],
        declarations: [_e404_page__WEBPACK_IMPORTED_MODULE_6__["E404Page"]]
      })], E404PageModule);
      /***/
    },

    /***/
    "./src/app/pages/e404/e404.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/e404/e404.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesE404E404PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2U0MDQvZTQwNC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/e404/e404.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/e404/e404.page.ts ***!
      \*****************************************/

    /*! exports provided: E404Page */

    /***/
    function srcAppPagesE404E404PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "E404Page", function () {
        return E404Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var E404Page = /*#__PURE__*/function () {
        function E404Page() {
          _classCallCheck(this, E404Page);
        }

        _createClass(E404Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return E404Page;
      }();

      E404Page.ctorParameters = function () {
        return [];
      };

      E404Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-e404',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./e404.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/e404/e404.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./e404.page.scss */
        "./src/app/pages/e404/e404.page.scss"))["default"]]
      })], E404Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-e404-e404-module-es5.js.map