(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-new-new-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- 5.1) Só exibe form se estiver logado -->\r\n<div *ngIf=\"userData\">\r\n\r\n  <!-- 5.2) Cumprimenta usuário logado -->\r\n  <h2>Olá {{ userData.displayName }}!</h2>\r\n\r\n  <p>Você precisa cadastrar seu perfil para ter acesso aos recursos do aplicativo de forma pesonalizada.</p>\r\n  <p class=\"ion-text-center\"><small>\r\n      <ion-text color=\"danger\">Preencha todos os campos.</ion-text>\r\n    </small></p>\r\n\r\n  <form [formGroup]=\"profileForm\" (ngSubmit)=\"profileSubmit()\">\r\n    <ion-input type=\"hidden\" id=\"id\" name=\"id\" formControlName=\"id\"></ion-input>\r\n\r\n    <ion-list lines=\"full\" id=\"profileList\" class=\"ion-no-padding\">\r\n\r\n      <div>Dados pessoais:</div>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"name\" position=\"floating\" color=\"primary\">\r\n          Nome completo:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.name.errors\">\r\n            <small *ngIf=\"profileForm.controls.name.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.name.errors.minlength\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"name\" name=\"name\" formControlName=\"name\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"birth\" position=\"floating\" color=\"primary\">\r\n          Nascimento:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.birth.errors\">\r\n            <small *ngIf=\"profileForm.controls.birth.errors.under14years\">* Deve ter 14 anos ou mais</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"date\" id=\"birth\" name=\"birth\" formControlName=\"birth\" placeholder=\"Exemplo: 27/11/1998\">\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"cpf\" position=\"floating\" color=\"primary\">\r\n          CPF:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.cpf.errors\">\r\n            <small *ngIf=\"profileForm.controls.cpf.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.cpf.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"cpf\" name=\"cpf\" formControlName=\"cpf\" placeholder=\"Somente números\"></ion-input>\r\n      </ion-item>\r\n\r\n      <!-- 6.4) Campo do tipo \"radio\"-->\r\n      <ion-list>\r\n        <ion-radio-group formControlName=\"gender\" id=\"gender\" name=\"gender\">\r\n          <ion-list-header>\r\n            <ion-label color=\"primary\" for=\"gender\">\r\n              Gênero:\r\n\r\n              <!-- 6.5) Alerta de campo inválido -->\r\n              <ion-text color=\"danger\" *ngIf=\"profileForm.controls.gender.errors\">\r\n                <small *ngIf=\"profileForm.controls.gender.errors.required\">* Obrigatório</small>\r\n              </ion-text>\r\n            </ion-label>\r\n          </ion-list-header>\r\n\r\n          <ion-item>\r\n            <ion-label>Não informar</ion-label>\r\n            <ion-radio slot=\"start\" value=\"Não informar\"></ion-radio>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>Feminino</ion-label>\r\n            <ion-radio slot=\"start\" value=\"Feminino\"></ion-radio>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-label>Masculino</ion-label>\r\n            <ion-radio slot=\"start\" value=\"Masculino\"></ion-radio>\r\n          </ion-item>\r\n        </ion-radio-group>\r\n      </ion-list>\r\n\r\n      <hr>\r\n      <div>Contatos:</div>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"email\" position=\"floating\" color=\"primary\">\r\n          E-mail:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.email.errors\">\r\n            <small *ngIf=\"profileForm.controls.email.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.email.errors.email\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"email\" name=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"homePhone\" position=\"floating\" color=\"primary\">\r\n          Tel. residencial:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.homePhone.errors\">\r\n            <small *ngIf=\"profileForm.controls.homePhone.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.homePhone.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"homePhone\" name=\"homePhone\" formControlName=\"homePhone\"\r\n          placeholder=\"Exemplo: (21) 2345-6789\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"cellPhone\" position=\"floating\" color=\"primary\">\r\n          Tel. celular:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.cellPhone.errors\">\r\n            <small *ngIf=\"profileForm.controls.cellPhone.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.cellPhone.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"cellPhone\" name=\"cellPhone\" formControlName=\"cellPhone\"\r\n          placeholder=\"Exemplo: (21) 98765-4321\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label for=\"whatsApp\" position=\"floating\" color=\"primary\">\r\n          WhatsApp:\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.whatsApp.errors\">\r\n            <small *ngIf=\"profileForm.controls.whatsApp.errors.required\">* Obrigatório</small>\r\n            <small *ngIf=\"profileForm.controls.whatsApp.errors.pattern\">* Inválido</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-input type=\"text\" id=\"whatsApp\" name=\"whatsApp\" formControlName=\"whatsApp\"\r\n          placeholder=\"Exemplo: (21) 98765-4321\"></ion-input>\r\n      </ion-item>\r\n\r\n      <hr>\r\n      <div>Opções:</div>\r\n\r\n      <!-- 6.1) Lista de opções 'estática' -->\r\n      <ion-item>\r\n        <ion-label for=\"selectStatic\" position=\"floating\" color=\"primary\">\r\n          Seleção 1:\r\n\r\n          <!-- 6.6) Alerta de campo inválido -->\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.selectStatic.errors\">\r\n            <small *ngIf=\"profileForm.controls.selectStatic.errors.required\">* Obrigatório</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-select cancelText=\"Cancela\" formControlName=\"selectStatic\" interface=\"action-sheet\"\r\n          placeholder=\"Selecione\"  id=\"selectStatic\" name=\"selectStatic\">\r\n          <ion-select-option value=\"Opção 1\">Opção 1</ion-select-option>\r\n          <ion-select-option value=\"Opção 2\">Opção 2</ion-select-option>\r\n          <ion-select-option value=\"Opção 3\">Opção 3</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n      <!-- 6.2) Lista de opções 'dinâmica', obtida do Firestore -->\r\n      <ion-item *ngIf=\"select01Data\">\r\n        <ion-label for=\"selectDynamic\" position=\"floating\" color=\"primary\">\r\n          Seleção 2:\r\n\r\n          <!-- 6.7) Alerta de campo inválido -->\r\n          <ion-text color=\"danger\" *ngIf=\"profileForm.controls.selectDynamic.errors\">\r\n            <small *ngIf=\"profileForm.controls.selectDynamic.errors.required\">* Obrigatório</small>\r\n          </ion-text>\r\n        </ion-label>\r\n        <ion-select formControlName=\"selectDynamic\" interface=\"popover\" placeholder=\"Selecione\"  id=\"selectDynamic\" name=\"selectDynamic\">\r\n\r\n          <!-- 6.3) Lista as opções que \"vieram\" do Firestore -->\r\n          <ion-select-option *ngFor=\"let select of select01Data | async\" value=\"{{ select.option }}\">\r\n            {{ select.option }}\r\n          </ion-select-option>\r\n\r\n        </ion-select>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <ion-button type=\"submit\" expand=\"block\" class=\"ion-margin-vertical\" [disabled]=\"profileForm.invalid\">Cadastrar\r\n      perfil\r\n    </ion-button>\r\n\r\n    <!-- <div>{{ profileForm.value | json}}</div> -->\r\n    <!-- <div>{{ profileForm.valid | json }}</div> -->\r\n\r\n  </form>\r\n\r\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/user/new/new.page.html":
    /*!******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/new/new.page.html ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppUserNewNewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n\r\n    <!-- 4.1) <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n\r\n    <!-- 4.2) Botão para voltar para a raiz -->\r\n    <ion-button slot=\"start\" routerLink=\"/\" fill=\"clear\">\r\n      <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <ion-title>Cadastro de Perfil</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"ion-padding\">\r\n\r\n    <!-- 5.1) Inclui seletor do componente do formulário de perfil -->\r\n    <app-profile></app-profile>\r\n\r\n  </div>\r\n\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/components/profile/profile.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/profile/profile.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#profileList div {\n  padding: 1rem;\n  font-weight: bold;\n  background: #575717;\n}\n\n#profileList hr {\n  border: none;\n  padding: 0.5rem;\n  margin: 0;\n  background: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2ZpbGVMaXN0IGRpdiB7XHJcbiAgICBwYWRkaW5nICAgIDogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYmFja2dyb3VuZCA6IHJnYig4NywgODcsIDIzKTtcclxufVxyXG5cclxuI3Byb2ZpbGVMaXN0IGhyIHtcclxuICAgIGJvcmRlciAgICA6IG5vbmU7XHJcbiAgICBwYWRkaW5nICAgOiAuNXJlbTtcclxuICAgIG1hcmdpbiAgICA6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/profile/profile.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/profile/profile.component.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js"); // 5.1) Importa dependências
      // 5.8) Importa dependências
      // 6.2) Importa dependências


      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent( // 5.3) Injeta dependências
        formBuilder, // 5.10) Injeta dependências
        storage, router, // 6.4) Injeta dependências
        fbStore) {
          var _this = this;

          _classCallCheck(this, ProfileComponent);

          this.formBuilder = formBuilder;
          this.storage = storage;
          this.router = router;
          this.fbStore = fbStore; // 5.11) Obtém dados do usuário logado

          this.storage.get('userData', {
            type: 'string'
          }).subscribe(function (data) {
            // 5.12) Se não logou, vai para a raiz
            if (!data) _this.router.navigate(['/']); // 5.13) Dados do usuário logado

            _this.userData = JSON.parse(data); // 6.5) Obtém lista "select01" do Firestore de forma assíncrona

            _this.select01Data = _this.fbStore.collection('select01', function (ref) {
              return ref.orderBy('option');
            }).valueChanges(); // 5.4) Cria formulário

            _this.profileFormCreate();
          });
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // 5.6) Define campos do formulário e validações

        }, {
          key: "profileFormCreate",
          value: function profileFormCreate() {
            this.profileForm = this.formBuilder.group({
              id: [// 5.14) Preenche o uid do perfil em 'id'
              this.userData.uid],
              name: [// 5.15) Preenche o nome do perfil em 'name'
              this.userData.displayName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
              birth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.over14Years])],
              cpf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\b\d{11}\b/g)])],
              // 6.7) Cria campo tipo 'radio'
              gender: [null, // 6.8) Validando campo
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              email: [// 5.16) Preenche o email do perfil em 'email'
              this.userData.email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
              homePhone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|8[1-9])[0-9]{3}\-?[0-9]{4}$/)])],
              cellPhone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)])],
              whatsApp: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/)])],
              // 6.1) Cria campo tipo 'select'
              selectStatic: ['Opção 2', // 6.9) Validando campo
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              // 6.6) Cria campo tipo 'select'
              selectDynamic: [null, // 6.10) Validando campo
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              type: ['user'],
              status: ['active']
            });
          } // 5.6) Método que trata envio do formulário

        }, {
          key: "profileSubmit",
          value: function profileSubmit() {
            console.log(this.profileForm.value);
          } // 5.7) Método que valida data de nascimento

        }, {
          key: "over14Years",
          value: function over14Years(control) {
            var birth = control.value;

            if (birth) {
              var _birth$split = birth.split('-'),
                  _birth$split2 = _slicedToArray(_birth$split, 3),
                  year = _birth$split2[0],
                  month = _birth$split2[1],
                  day = _birth$split2[2];

              var today = new Date();
              var dateBirth = new Date(year, month, day, 0, 0, 0);
              var timeToTest = 1000 * 60 * 60 * 24 * 365 * 14; // 14 anos em milissegundos...

              if (today.getTime() - dateBirth.getTime() >= timeToTest) return null;
            }

            return {
              under14years: true
            };
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMap"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.component.scss */
        "./src/app/components/profile/profile.component.scss"))["default"]]
      })], ProfileComponent);
      /***/
    },

    /***/
    "./src/app/user/new/new-routing.module.ts":
    /*!************************************************!*\
      !*** ./src/app/user/new/new-routing.module.ts ***!
      \************************************************/

    /*! exports provided: NewPageRoutingModule */

    /***/
    function srcAppUserNewNewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageRoutingModule", function () {
        return NewPageRoutingModule;
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


      var _new_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/user/new/new.page.ts");

      var routes = [{
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_3__["NewPage"]
      }];

      var NewPageRoutingModule = function NewPageRoutingModule() {
        _classCallCheck(this, NewPageRoutingModule);
      };

      NewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/user/new/new.module.ts":
    /*!****************************************!*\
      !*** ./src/app/user/new/new.module.ts ***!
      \****************************************/

    /*! exports provided: NewPageModule */

    /***/
    function srcAppUserNewNewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPageModule", function () {
        return NewPageModule;
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


      var _new_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-routing.module */
      "./src/app/user/new/new-routing.module.ts");
      /* harmony import */


      var _new_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new.page */
      "./src/app/user/new/new.page.ts");
      /* harmony import */


      var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/profile/profile.component */
      "./src/app/components/profile/profile.component.ts"); // 5.1) Importa dependências


      var NewPageModule = function NewPageModule() {
        _classCallCheck(this, NewPageModule);
      };

      NewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewPageRoutingModule"], // 5.2) Injeta dependências
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_6__["NewPage"], // 5.3) Declara componente importado
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]]
      })], NewPageModule);
      /***/
    },

    /***/
    "./src/app/user/new/new.page.scss":
    /*!****************************************!*\
      !*** ./src/app/user/new/new.page.scss ***!
      \****************************************/

    /*! exports provided: default */

    /***/
    function srcAppUserNewNewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvbmV3L25ldy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/user/new/new.page.ts":
    /*!**************************************!*\
      !*** ./src/app/user/new/new.page.ts ***!
      \**************************************/

    /*! exports provided: NewPage */

    /***/
    function srcAppUserNewNewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewPage", function () {
        return NewPage;
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


      var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/app.service */
      "./src/app/services/app.service.ts");
      /* harmony import */


      var _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngx-pwa/local-storage */
      "./node_modules/@ngx-pwa/local-storage/__ivy_ngcc__/fesm2015/ngx-pwa-local-storage.js"); // 4.1) Importa dependências 


      var NewPage = /*#__PURE__*/function () {
        function NewPage( // 4.3) Injeta dependências
        app, storage) {
          _classCallCheck(this, NewPage);

          this.app = app;
          this.storage = storage;
        }

        _createClass(NewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // 4.4) Obtém dados do usuário logado
            this.storage.get('userData', {
              type: 'string'
            }).subscribe(function (data) {
              _this2.userData = JSON.parse(data); // 6.1) Comentar exibição da caixa de alerta
              // // 4.5) Exibe caixa de alerta
              // this.app.myAlert(
              //   `Olá ${this.userData.displayName}`,
              //   `Você precisa completar seu cadastro para usar todos os recursos do aplicativo.`
              // );
            });
          }
        }]);

        return NewPage;
      }();

      NewPage.ctorParameters = function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]
        }, {
          type: _ngx_pwa_local_storage__WEBPACK_IMPORTED_MODULE_3__["StorageMap"]
        }];
      };

      NewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/user/new/new.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new.page.scss */
        "./src/app/user/new/new.page.scss"))["default"]]
      })], NewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=user-new-new-module-es5.js.map