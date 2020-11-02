(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Seu Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\" *ngIf=\"userData && userProfile\">\r\n\r\n    <ion-card>\r\n\r\n      <ion-card-header>\r\n        <ion-card-title>Perfil do Login</ion-card-title>\r\n      </ion-card-header>\r\n      <img [src]=\"[userData.photoURL]\" [alt]=\"[userData.displayName]\">\r\n      <ion-card-content>\r\n        <h3 style=\"font-size: 1.2rem; font-weight: bold;\">{{ userData.displayName }}</h3>\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>{{ userData.email }}</ion-col>\r\n            <ion-col class=\"ion-text-end\">\r\n\r\n              <!-- 8.1) Editar perfil da rede social -->\r\n              <ion-button size=\"small\" fill=\"clear\" (click)=\"editProviderProfile()\">\r\n                <ion-icon name=\"create\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-card-content>\r\n\r\n      <hr>\r\n      <ion-card-header>\r\n        <ion-card-title>Dados Pessoais</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ul>\r\n          <li>\r\n            <ion-text color=\"primary\">Nome:</ion-text>{{ userProfile.name }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">CPF:</ion-text>{{ userProfile.cpf }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Nascimento:</ion-text>{{ userProfile.birth }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Gênero:</ion-text>{{ userProfile.gender }}\r\n          </li>\r\n        </ul>\r\n      </ion-card-content>\r\n\r\n      <hr>\r\n      <ion-card-header>\r\n        <ion-card-title>Dados de Contato</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ul>\r\n          <li>\r\n            <ion-text color=\"primary\">E-mail:</ion-text>\r\n            {{ userProfile.email }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Telefone Residêncial:</ion-text>\r\n            {{ userProfile.homePhone }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Telefone Celular:</ion-text>\r\n            {{ userProfile.cellPhone }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">WhatsApp</ion-text>\r\n            {{ userProfile.whatsApp }}\r\n          </li>\r\n        </ul>\r\n      </ion-card-content>\r\n\r\n      <hr>\r\n      <ion-card-header>\r\n        <ion-card-title>Outras Informações</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ul>\r\n          <li>\r\n            <ion-text color=\"primary\">Seleção 1:</ion-text>\r\n            {{ userProfile.selectStatic }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Seleção 2:</ion-text>\r\n            {{ userProfile.selectDynamic }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Nível de Acesso:</ion-text>\r\n            {{ userProfile.type }}\r\n          </li>\r\n          <li>\r\n            <ion-text color=\"primary\">Status</ion-text>\r\n            {{ userProfile.status }}\r\n          </li>\r\n        </ul>\r\n      </ion-card-content>\r\n\r\n    </ion-card>\r\n\r\n    <ion-button expand=\"block\" class=\"ion-no-margin ion-margin-vertical\">\r\n      <ion-icon name=\"create\"></ion-icon>&nbsp;\r\n      Editar Perfil\r\n    </ion-button>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/user/profile/profile-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/user/profile/profile-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/user/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/user/profile/profile.module.ts":
/*!************************************************!*\
  !*** ./src/app/user/profile/profile.module.ts ***!
  \************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/user/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/user/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/user/profile/profile.page.scss":
/*!************************************************!*\
  !*** ./src/app/user/profile/profile.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin: 1rem 0 auto 0;\n}\n\nion-card img {\n  margin: auto;\n  display: block;\n  width: 100%;\n  max-width: 320px;\n}\n\nion-card ion-grid,\nion-card ion-row,\nion-card ion-col {\n  margin: 0;\n  padding: 0;\n}\n\nion-card-content ul {\n  padding: 0;\n  list-style: none;\n}\n\nion-card-content ul li {\n  margin-bottom: 0.5rem;\n}\n\nion-card-content ul li ion-text {\n  font-weight: bold;\n  display: block;\n  font-size: small;\n}\n\nion-card hr {\n  border-bottom: 1px dotted grey;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7OztFQUdJLFNBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSxTQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZCB7XHJcbiAgICBtYXJnaW46IDFyZW0gMCBhdXRvIDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGltZyB7XHJcbiAgICBtYXJnaW4gICA6IGF1dG87XHJcbiAgICBkaXNwbGF5ICA6IGJsb2NrO1xyXG4gICAgd2lkdGggICAgOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcclxufVxyXG5cclxuaW9uLWNhcmQgaW9uLWdyaWQsXHJcbmlvbi1jYXJkIGlvbi1yb3csXHJcbmlvbi1jYXJkIGlvbi1jb2wge1xyXG4gICAgbWFyZ2luIDogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQgdWwge1xyXG4gICAgcGFkZGluZyAgIDogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQgdWwgbGkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnQgdWwgbGkgaW9uLXRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5ICAgIDogYmxvY2s7XHJcbiAgICBmb250LXNpemUgIDogc21hbGw7XHJcbn1cclxuXHJcbmlvbi1jYXJkIGhyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgZ3JleTtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/profile/profile.page.ts":
/*!**********************************************!*\
  !*** ./src/app/user/profile/profile.page.ts ***!
  \**********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-pwa/local-storage */ "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");


// 4.1) Importa dependências


// 8.1) Importa dependências

let ProfilePage = class ProfilePage {
    constructor(
    // 4.2) Injeta dependências
    router, app, 
    // 8.3) Injeta dependências
    storage) {
        this.router = router;
        this.app = app;
        this.storage = storage;
    }
    ngOnInit() { }
    // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
    //      https://ionicframework.com/blog/navigating-lifecycle-events/
    ionViewWillEnter() {
        // Testa o perfil local
        this.app.isProfile().then((data) => {
            // Se existe, faz as ações da página
            if (data) {
                // 8.4) Obtém dados do login local e armazena em 'userData'
                this.storage.get('userData', { type: 'string' }).subscribe((data) => {
                    this.userData = JSON.parse(data);
                    // 8.5) Obtém dados do perfil local e armazena em 'userProfile'
                    this.storage.get('userProfile', { type: 'string' }).subscribe((data) => {
                        this.userProfile = JSON.parse(data);
                    });
                });
                // Se não existe perfil, vai para o cadastro de perfil
            }
            else {
                this.router.navigate(['/user/new']);
            }
        });
    }
    // 8.6) Ação do botão para editar perfil do provedor de login
    editProviderProfile() {
        // Variável com URL do perfil, de acordo com o provedor
        var profileURL = '';
        // Seleciona o URL, de acordo com o provedor
        switch (this.userData.provider) {
            case 'google':
                profileURL = 'https://myaccount.google.com/profile';
                break;
            case 'facebook':
                // profileURL = '';
                break;
            case 'twitter':
                // profileURL = '';
                break;
            case 'github':
                // profileURL = '';
                break;
            // case ....
        }
        // Aviso de redirecionamento
        if (this.app.myAlert(this.userData.displayName, `Atenção! Você será redirecionado para a página de perfil no provedor`)) {
            // Redireciona para o perfil do usuário no provedor
            window.open(profileURL);
        }
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_4__["StorageMap"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/user/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=user-profile-profile-module-es2015.js.map