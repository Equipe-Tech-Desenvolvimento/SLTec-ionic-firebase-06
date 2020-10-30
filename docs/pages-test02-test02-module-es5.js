(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test02-test02-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test02/test02.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test02/test02.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTest02Test02PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Teste 02</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit similique quaerat, earum nulla aliquid\r\n      repellat quibusdam quam, veniam perspiciatis obcaecati fugit exercitationem deleniti ipsum magnam. Expedita\r\n      suscipit commodi fugit!</p>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/test02/test02-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/test02/test02-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Test02PageRoutingModule */

    /***/
    function srcAppPagesTest02Test02RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test02PageRoutingModule", function () {
        return Test02PageRoutingModule;
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


      var _test02_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test02.page */
      "./src/app/pages/test02/test02.page.ts");

      var routes = [{
        path: '',
        component: _test02_page__WEBPACK_IMPORTED_MODULE_3__["Test02Page"]
      }];

      var Test02PageRoutingModule = function Test02PageRoutingModule() {
        _classCallCheck(this, Test02PageRoutingModule);
      };

      Test02PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Test02PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/test02/test02.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/test02/test02.module.ts ***!
      \***********************************************/

    /*! exports provided: Test02PageModule */

    /***/
    function srcAppPagesTest02Test02ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test02PageModule", function () {
        return Test02PageModule;
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


      var _test02_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./test02-routing.module */
      "./src/app/pages/test02/test02-routing.module.ts");
      /* harmony import */


      var _test02_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./test02.page */
      "./src/app/pages/test02/test02.page.ts");

      var Test02PageModule = function Test02PageModule() {
        _classCallCheck(this, Test02PageModule);
      };

      Test02PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test02_routing_module__WEBPACK_IMPORTED_MODULE_5__["Test02PageRoutingModule"]],
        declarations: [_test02_page__WEBPACK_IMPORTED_MODULE_6__["Test02Page"]]
      })], Test02PageModule);
      /***/
    },

    /***/
    "./src/app/pages/test02/test02.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/pages/test02/test02.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTest02Test02PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QwMi90ZXN0MDIucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/test02/test02.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/test02/test02.page.ts ***!
      \*********************************************/

    /*! exports provided: Test02Page */

    /***/
    function srcAppPagesTest02Test02PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test02Page", function () {
        return Test02Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Test02Page = /*#__PURE__*/function () {
        function Test02Page() {
          _classCallCheck(this, Test02Page);
        }

        _createClass(Test02Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Test02Page;
      }();

      Test02Page.ctorParameters = function () {
        return [];
      };

      Test02Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test02',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./test02.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test02/test02.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./test02.page.scss */
        "./src/app/pages/test02/test02.page.scss"))["default"]]
      })], Test02Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-test02-test02-module-es5.js.map