(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test01-test01-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test01/test01.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test01/test01.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n\r\n    <ion-title>Teste 01</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde impedit similique quaerat, earum nulla aliquid\r\n      repellat quibusdam quam, veniam perspiciatis obcaecati fugit exercitationem deleniti ipsum magnam. Expedita\r\n      suscipit commodi fugit!</p>\r\n\r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/test01/test01-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/test01/test01-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Test01PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test01PageRoutingModule", function() { return Test01PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _test01_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test01.page */ "./src/app/pages/test01/test01.page.ts");




const routes = [
    {
        path: '',
        component: _test01_page__WEBPACK_IMPORTED_MODULE_3__["Test01Page"]
    }
];
let Test01PageRoutingModule = class Test01PageRoutingModule {
};
Test01PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Test01PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/test01/test01.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/test01/test01.module.ts ***!
  \***********************************************/
/*! exports provided: Test01PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test01PageModule", function() { return Test01PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _test01_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test01-routing.module */ "./src/app/pages/test01/test01-routing.module.ts");
/* harmony import */ var _test01_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test01.page */ "./src/app/pages/test01/test01.page.ts");







let Test01PageModule = class Test01PageModule {
};
Test01PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test01_routing_module__WEBPACK_IMPORTED_MODULE_5__["Test01PageRoutingModule"]
        ],
        declarations: [_test01_page__WEBPACK_IMPORTED_MODULE_6__["Test01Page"]]
    })
], Test01PageModule);



/***/ }),

/***/ "./src/app/pages/test01/test01.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/test01/test01.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3QwMS90ZXN0MDEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/test01/test01.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/test01/test01.page.ts ***!
  \*********************************************/
/*! exports provided: Test01Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test01Page", function() { return Test01Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");


// 4.1) Importa dependências


let Test01Page = class Test01Page {
    constructor(
    // 4.2) Injeta dependências
    router, app) {
        this.router = router;
        this.app = app;
    }
    ngOnInit() { }
    // 4.3) 'ionViewWillEnter' é executado SEMPRE que a página (re)carrega
    ionViewWillEnter() {
        // Testa o perfil local
        this.app.isProfile().then((data) => {
            // Se existe, faz as ações da página
            if (data) {
                console.log('bla bla bla');
                // Se não existe, vai para o cadastro de perfil
            }
            else {
                this.router.navigate(['/user/new']);
            }
        });
    }
};
Test01Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
];
Test01Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test01',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./test01.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test01/test01.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./test01.page.scss */ "./src/app/pages/test01/test01.page.scss")).default]
    })
], Test01Page);



/***/ })

}]);
//# sourceMappingURL=pages-test01-test01-module-es2015.js.map