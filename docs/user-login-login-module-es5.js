(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Login / Entrar</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <h2>Olá!</h2>\r\n\r\n    <p>Para que você possa acessar os serviços deste aplicativo, é necessário estar logado(a)...</p>\r\n    <p>Escolha um método de entrada clicando no botão.</p>\r\n\r\n    <div class=\"login-table\">\r\n\r\n      <p>Entrar com:</p>&nbsp;\r\n\r\n      <!-- 3.1) Botões de login com redes sociais -->\r\n\r\n      <ion-button expand=\"block\" (click)=\"login('google')\">\r\n        <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\r\n        <ion-label>Google</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('facebook')\">\r\n        <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\r\n        <ion-label>Facebook</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('twitter')\">\r\n        <ion-icon name=\"logo-twitter\" slot=\"start\"></ion-icon>\r\n        <ion-label>Twitter</ion-label>\r\n      </ion-button>\r\n\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\" (click)=\"login('github')\">\r\n        <ion-icon name=\"logo-github\" slot=\"start\"></ion-icon>\r\n        <ion-label>GitHub</ion-label>\r\n      </ion-button>\r\n\r\n      <!-- ... -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/user/login/login-routing.module.ts":
    /*!****************************************************!*\
      !*** ./src/app/user/login/login-routing.module.ts ***!
      \****************************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppUserLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
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


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/user/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user/login/login.module.ts":
    /*!********************************************!*\
      !*** ./src/app/user/login/login.module.ts ***!
      \********************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppUserLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
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


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/user/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/user/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/user/login/login.page.scss":
    /*!********************************************!*\
      !*** ./src/app/user/login/login.page.scss ***!
      \********************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/* 3.1) Formata lista de botões */\n.login-table {\n  display: table;\n  margin: auto;\n  width: 220px;\n}\n.login-table ion-label {\n  padding-left: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLGlDQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQUNBO0VBQ0ksb0JBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogMy4xKSBGb3JtYXRhIGxpc3RhIGRlIGJvdMO1ZXMgKi9cbi5sb2dpbi10YWJsZSB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAyMjBweDtcbn1cblxuLmxvZ2luLXRhYmxlIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/user/login/login.page.ts":
    /*!******************************************!*\
      !*** ./src/app/user/login/login.page.ts ***!
      \******************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppUserLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
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


      var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! firebase/app */
      "./node_modules/firebase/app/dist/index.cjs.js");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/app.service */
      "./src/app/services/app.service.ts");
      /* harmony import */


      var _services_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/events.service */
      "./src/app/services/events.service.ts"); // 3.1) Importa dependências 
      // Autenticação
      // Firebase CLI
      // Armazenamento local
      // Firestore
      // Roteamento
      // Serviços de uso geral
      // Dispara eventos globais


      var LoginPage = /*#__PURE__*/function () {
        function LoginPage( // 3.3) Injeção de dependências
        fbAuth, // Autenticação
        fbStore, // Firestore
        storage, // Armazenamento local
        app, // Serviços de uso geral
        router, // Roteamento
        events) {
          _classCallCheck(this, LoginPage);

          this.fbAuth = fbAuth;
          this.fbStore = fbStore;
          this.storage = storage;
          this.app = app;
          this.router = router;
          this.events = events;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 3.4) Ação do botão de login

        }, {
          key: "login",
          value: function login(provider) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = provider;
                      _context.next = _context.t0 === 'google' ? 3 : _context.t0 === 'facebook' ? 5 : _context.t0 === 'twitter' ? 8 : _context.t0 === 'github' ? 11 : 14;
                      break;

                    case 3:
                      this.authProvider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                      return _context.abrupt("break", 14);

                    case 5:
                      alert('Você precisa implementar isso no Firebase Authentication!');
                      return _context.abrupt("return", false);

                    case 8:
                      alert('Você precisa implementar isso no Firebase Authentication!');
                      return _context.abrupt("return", false);

                    case 11:
                      alert('Você precisa implementar isso no Firebase Authentication!');
                      return _context.abrupt("return", false);

                    case 14:
                      // Login com popup no Firebase Auth
                      this.fbAuth.signInWithPopup(this.authProvider) // Se logou
                      .then(function (data) {
                        // Formata dados do usuário
                        _this.userData = {
                          uid: data.user.uid,
                          displayName: data.user.displayName,
                          email: data.user.email,
                          photoURL: data.user.photoURL
                        }; // Salva no armazenamento local

                        _this.storage.set('userData', JSON.stringify(_this.userData)).subscribe({
                          next: function next() {
                            // 3.6) Atualiza 'userData' no menu principal também (app.component.ts)
                            _this.events.publish('userData', _this.userData); // Verifica se tem perfil no Firestore


                            _this.fbStore.firestore.collection('users').doc(_this.userData.uid).get().then(function (data) {
                              // Se tem perfil
                              if (data.exists) {
                                // Obtém dados do perfil
                                _this.userProfile = data.data();
                                _this.userProfile.uid = data.id; // Grava perfil no armazenamento local

                                _this.storage.set('userProfile', JSON.stringify(_this.userProfile)).subscribe({
                                  next: function next() {
                                    // Exibe alerta
                                    _this.app.myAlert("Ol\xE1 ".concat(_this.userData.displayName), "Voc\xEA j\xE1 pode acessar todos os recursos do aplicativo."); // Vai para a raiz


                                    _this.router.navigate(['/']);
                                  },
                                  error: function error(_error) {
                                    console.error(_error);
                                  }
                                }); // Se não tem perfil

                              } else {
                                // 4.1) COMENTE --> Exibe alerta e vai para a rota '/user/new'
                                // this.app.myAlert(
                                //   `Olá ${this.userData.displayName}`,
                                //   `Você precisa completar seu cadastro para usar todos os recursos do aplicativo.`
                                // );
                                // Vai para o cadatro de novo perfil
                                _this.router.navigate(['/user/new']);
                              }
                            })["catch"](function (error) {
                              console.error(error);
                            });
                          },
                          error: function error(_error2) {
                            console.error(_error2);
                          }
                        });
                      })["catch"](function (error) {
                        console.log(error);
                      });

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"]
        }, {
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _services_events_service__WEBPACK_IMPORTED_MODULE_8__["EventsService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/user/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-login-login-module-es5.js.map