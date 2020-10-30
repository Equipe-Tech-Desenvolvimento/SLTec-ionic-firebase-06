(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-logout-logout-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user/logout/logout.page.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/logout/logout.page.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserLogoutLogoutPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Logout / Sair</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- 3.1) Mostra botão de logout -->\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Olá!</h2>\r\n    <p class=\"ion-text-justify\">Clique no botão abaixo para confirmar a saída do aplicativo.</p>\r\n    <p>&nbsp;</p>\r\n    <p class=\"ion-text-center\">\r\n      <ion-button (click)=\"logout()\">Sair do Aplicativo</ion-button>\r\n    </p>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/user/logout/logout-routing.module.ts":
    /*!******************************************************!*\
      !*** ./src/app/user/logout/logout-routing.module.ts ***!
      \******************************************************/

    /*! exports provided: LogoutPageRoutingModule */

    /***/
    function srcAppUserLogoutLogoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPageRoutingModule", function () {
        return LogoutPageRoutingModule;
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


      var _logout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./logout.page */
      "./src/app/user/logout/logout.page.ts");

      var routes = [{
        path: '',
        component: _logout_page__WEBPACK_IMPORTED_MODULE_3__["LogoutPage"]
      }];

      var LogoutPageRoutingModule = function LogoutPageRoutingModule() {
        _classCallCheck(this, LogoutPageRoutingModule);
      };

      LogoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LogoutPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user/logout/logout.module.ts":
    /*!**********************************************!*\
      !*** ./src/app/user/logout/logout.module.ts ***!
      \**********************************************/

    /*! exports provided: LogoutPageModule */

    /***/
    function srcAppUserLogoutLogoutModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPageModule", function () {
        return LogoutPageModule;
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


      var _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./logout-routing.module */
      "./src/app/user/logout/logout-routing.module.ts");
      /* harmony import */


      var _logout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./logout.page */
      "./src/app/user/logout/logout.page.ts");

      var LogoutPageModule = function LogoutPageModule() {
        _classCallCheck(this, LogoutPageModule);
      };

      LogoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _logout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogoutPageRoutingModule"]],
        declarations: [_logout_page__WEBPACK_IMPORTED_MODULE_6__["LogoutPage"]]
      })], LogoutPageModule);
      /***/
    },

    /***/
    "./src/app/user/logout/logout.page.scss":
    /*!**********************************************!*\
      !*** ./src/app/user/logout/logout.page.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserLogoutLogoutPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9nb3V0L2xvZ291dC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user/logout/logout.page.ts":
    /*!********************************************!*\
      !*** ./src/app/user/logout/logout.page.ts ***!
      \********************************************/

    /*! exports provided: LogoutPage */

    /***/
    function srcAppUserLogoutLogoutPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogoutPage", function () {
        return LogoutPage;
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


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/events.service */
      "./src/app/services/events.service.ts"); // 3.1) Importa dependências
      // Autenticação
      // Armazenamento local
      // Roteamento
      // Dispara eventos globais


      var LogoutPage = /*#__PURE__*/function () {
        function LogoutPage( // 3.2) injeção de dependências
        fbAuth, // Autenticação
        storage, // Armazenamento local
        router, // Roteamento
        events) {
          _classCallCheck(this, LogoutPage);

          this.fbAuth = fbAuth;
          this.storage = storage;
          this.router = router;
          this.events = events;
        }

        _createClass(LogoutPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 3.3) Ação do botão [Sair]

        }, {
          key: "logout",
          value: function logout() {
            var _this = this;

            // Lougout no Firebase Auth
            this.fbAuth.signOut().then(function () {
              // Apaga perfil local
              _this.storage["delete"]('userProfile').subscribe({
                next: function next() {
                  // Apaga login local
                  _this.storage["delete"]('userData').subscribe({
                    next: function next() {
                      // 3.4) Atualiza 'userData' no menu principal também (app.component.ts)
                      _this.events.publish('userData', null); // Rota para a página inicial


                      _this.router.navigate(['/']);
                    },
                    error: function error(_error) {
                      console.error(_error);
                    }
                  });
                },
                error: function error(_error2) {
                  console.error(_error2);
                }
              });
            })["catch"](function (error) {
              console.error(error);
            });
          }
        }]);

        return LogoutPage;
      }();

      LogoutPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMap"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_5__["EventsService"]
        }];
      };

      LogoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./logout.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user/logout/logout.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./logout.page.scss */
        "./src/app/user/logout/logout.page.scss"))["default"]]
      })], LogoutPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-logout-logout-module-es5.js.map