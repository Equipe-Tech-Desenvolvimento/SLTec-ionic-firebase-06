(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-profile-module"], {
    /***/
    "HKqj":
    /*!************************************************!*\
      !*** ./src/app/user/profile/profile.module.ts ***!
      \************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function HKqj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "xBi7");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "NGzz");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "NGzz":
    /*!**********************************************!*\
      !*** ./src/app/user/profile/profile.page.ts ***!
      \**********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function NGzz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "X0i1");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "uxTk");
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


      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage( // 4.2) Injeta dependências
        router, app) {
          _classCallCheck(this, ProfilePage);

          this.router = router;
          this.app = app;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
          //      https://ionicframework.com/blog/navigating-lifecycle-events/

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

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    },

    /***/
    "X0i1":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function X0i1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Seu Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur recusandae harum temporibus officiis\r\n      maiores voluptas eligendi, neque quos voluptates ex laudantium fugiat nisi consequuntur saepe pariatur odit quae\r\n      ipsam excepturi?</p>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "uxTk":
    /*!************************************************!*\
      !*** ./src/app/user/profile/profile.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function uxTk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "xBi7":
    /*!********************************************************!*\
      !*** ./src/app/user/profile/profile-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function xBi7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "NGzz");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-profile-profile-module-es5.js.map