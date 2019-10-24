(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title><span style=\"margin-left: 30%;color: #4aba70\">CEIF IFPR</span></ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button>\n        <ion-icon name=\"camera\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- ASSISTENTE -->\n  <div *ngIf=\"tipo\">\n    <ion-card style=\"width:80%;margin-left:10%;text-align: center\">\n      <ion-card-header>\n        <ion-card-title style=\"text-align: center\">24/10/2019\n        </ion-card-title>\n        <hr style=\"border-top:solid 1px; border-color: grey\">\n        <ion-card-subtitle style=\"text-align: center\"><strong>Aluno</strong></ion-card-subtitle>\n        <ion-card-subtitle>Matheus Ramos Cardoso</ion-card-subtitle>\n        <ion-card-subtitle>049.103.729-54</ion-card-subtitle>\n        <ion-card-subtitle style=\"text-align: center\"><strong>Itens Emprestimo</strong></ion-card-subtitle>\n        <ion-card-subtitle>Viola\n          x 3</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <div style=\"text-align:center\">\n          <h2 style=\"color:green\">Solicitado</h2>\n          <h3>Edmar</h3>\n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <!-- FIM ASSISTENTE -->\n\n\n  <!-- USUARIO -->\n  <!-- LISTA -->\n  <div *ngIf=\"!tipo\">\n    <!-- <ion-list>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img width=\"30px\" height=\"30px\" src=\"https://blog.certisign.com.br/wp-content/uploads/2018/10/certo.png?cod_rev=38788\">\n        </ion-avatar>\n        <ion-label>\n          <h2>Instrumentos</h2>\n          <h3>Violão</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list> -->\n    <ion-card *ngFor=\"let locacaoFora of locacao$| async;let i = index;\"\n      style=\"width:80%;margin-left:10%;text-align: center\">\n      <ion-card-header>\n        <ion-card-title style=\"text-align: center\">{{ locacaoFora.dataLocacao.seconds * 1000 | date:'dd/MM/yyyy' }}\n        </ion-card-title>\n        <hr style=\"border-top:solid 1px; border-color: grey\">\n        <ion-card-subtitle style=\"text-align: center\"><strong>Itens Emprestimo</strong></ion-card-subtitle>\n        <ion-card-subtitle *ngFor=\"let locacao of locacaoFora.itensLocacao\">{{locacao.material.descricao}}\n          x{{locacao.quantidade}}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <div style=\"text-align:center\">\n          <h2 style=\"color:green\">Emprestado</h2>\n          <h3>Edmar</h3>\n        </div>\n      </ion-card-content>\n      <ion-button (click)=\"qrcode()\" style=\"padding-bottom:1%\">QR Code</ion-button>\n    </ion-card>\n    <!-- LISTA -->\n  </div>\n  <ion-fab *ngIf=\"!tipo\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"success\" routerLink=\"/emprestimo\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <!-- FIM USUAIO -->\n</ion-content>\n\n<ion-tabs *ngIf=\"tipo\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button>\n      <ion-icon name=\"alert\"></ion-icon>\n      <ion-label>Solicitados</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n      <ion-label>Emprestados</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"checkmark-circle\"></ion-icon>\n      <ion-label>Devolvidos</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"close\"></ion-icon>\n      <ion-label>Atrasados</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _service_locacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/locacao.service */ "./src/app/service/locacao.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _service_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/usuarios.service */ "./src/app/service/usuarios.service.ts");






var HomePage = /** @class */ (function () {
    function HomePage(menuController, alertController, locacaoService, afAuth, usuarioService) {
        var _this = this;
        this.menuController = menuController;
        this.alertController = alertController;
        this.locacaoService = locacaoService;
        this.afAuth = afAuth;
        this.usuarioService = usuarioService;
        this.tipo = true;
        this.afAuth.authState.subscribe(function (usuario) {
            if (usuario) {
                _this.usuarioService.buscarPorId(usuario.uid, (function (usuario) {
                    if (usuario != null) {
                        _this.tipo = false;
                    }
                }));
            }
        });
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.locacaoService.buscarLocacao(function (local$) {
            _this.locacao$ = local$;
        });
    };
    HomePage.prototype.openFirst = function () {
        this.menuController.enable(true, 'first');
        this.menuController.open('first');
    };
    HomePage.prototype.qrcode = function () {
        this.mostraQrAlert();
    };
    HomePage.prototype.mostraQrAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: '',
                            message: '<img  src="http://s.glbimg.com/jo/g1/f/original/2011/05/17/qrcode.jpg" />',
                            buttons: [
                                {
                                    text: 'Fechar',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _service_locacao_service__WEBPACK_IMPORTED_MODULE_3__["LocacaoService"] },
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
        { type: _service_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _service_locacao_service__WEBPACK_IMPORTED_MODULE_3__["LocacaoService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _service_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map