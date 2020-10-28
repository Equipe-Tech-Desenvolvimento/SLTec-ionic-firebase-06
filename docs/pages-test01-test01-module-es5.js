(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test01-test01-module"], {
    /***/
    "1qa2":
    /*!***********************************************!*\
      !*** ./src/app/pages/test01/test01.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function qa2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QwMS90ZXN0MDEucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "Bz2o":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test01/test01.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bz2o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Teste 01</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit similique quaerat, earum nulla aliquid\r\n      repellat quibusdam quam, veniam perspiciatis obcaecati fugit exercitationem deleniti ipsum magnam. Expedita\r\n      suscipit commodi fugit!</p>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "Q/KU":
    /*!*********************************************!*\
      !*** ./src/app/pages/test01/test01.page.ts ***!
      \*********************************************/

    /*! exports provided: Test01Page */

    /***/
    function QKU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test01Page", function () {
        return Test01Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_test01_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./test01.page.html */
      "Bz2o");
      /* harmony import */


      var _test01_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./test01.page.scss */
      "1qa2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/app.service */
      "OaWH"); // 4.1) Importa dependências


      var Test01Page = /*#__PURE__*/function () {
        function Test01Page( // 4.2) Injeta dependências
        router, app) {
          _classCallCheck(this, Test01Page);

          this.router = router;
          this.app = app;
        }

        _createClass(Test01Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            // Testa o perfil local
            this.app.isProfile().then(function (data) {
              // Se existe, faz as ações da página
              if (data) {
                console.log('bla bla bla'); // Se não existe, vai para o cadastro de perfil
              } else {
                _this.router.navigate(['/user/new']);
              }
            });
          }
        }]);

        return Test01Page;
      }();

      Test01Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }];
      };

      Test01Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-test01',
        template: _raw_loader_test01_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_test01_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Test01Page);
      /***/
    },

    /***/
    "b4wI":
    /*!*******************************************************!*\
      !*** ./src/app/pages/test01/test01-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: Test01PageRoutingModule */

    /***/
    function b4wI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test01PageRoutingModule", function () {
        return Test01PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _test01_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./test01.page */
      "Q/KU");

      var routes = [{
        path: '',
        component: _test01_page__WEBPACK_IMPORTED_MODULE_3__["Test01Page"]
      }];

      var Test01PageRoutingModule = function Test01PageRoutingModule() {
        _classCallCheck(this, Test01PageRoutingModule);
      };

      Test01PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Test01PageRoutingModule);
      /***/
    },

    /***/
    "okAj":
    /*!***********************************************!*\
      !*** ./src/app/pages/test01/test01.module.ts ***!
      \***********************************************/

    /*! exports provided: Test01PageModule */

    /***/
    function okAj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Test01PageModule", function () {
        return Test01PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _test01_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./test01-routing.module */
      "b4wI");
      /* harmony import */


      var _test01_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./test01.page */
      "Q/KU");

      var Test01PageModule = function Test01PageModule() {
        _classCallCheck(this, Test01PageModule);
      };

      Test01PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test01_routing_module__WEBPACK_IMPORTED_MODULE_5__["Test01PageRoutingModule"]],
        declarations: [_test01_page__WEBPACK_IMPORTED_MODULE_6__["Test01Page"]]
      })], Test01PageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-test01-test01-module-es5.js.map