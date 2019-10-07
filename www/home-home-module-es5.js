(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title style=\"margin-left: 20%;color: #4aba70\">CEIF IFPR</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!-- ASSISTENTE -->\r\n\r\n  <!-- FIM ASSISTENTE -->\r\n\r\n\r\n  <!-- USUARIO -->\r\n  <!-- LISTA -->\r\n  <div *ngIf=\"!tipo\">\r\n    <!-- <ion-list>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img width=\"30px\" height=\"30px\" src=\"https://blog.certisign.com.br/wp-content/uploads/2018/10/certo.png?cod_rev=38788\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Instrumentos</h2>\r\n          <h3>Violão</h3>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list> -->\r\n        <ion-card *ngFor=\"let locacaoFora of locacao$| async;let i = index;\" style=\"width:80%;margin-left:10%;text-align: center\">\r\n          <ion-card-header>\r\n            <ion-card-title style=\"text-align: center\">{{ locacaoFora.dataLocacao.seconds * 1000 | date:'dd/MM/yyyy' }}</ion-card-title>\r\n            <hr style=\"border-top:solid 1px; border-color: grey\"  >\r\n            <ion-card-subtitle style=\"text-align: center\"><strong>Itens Emprestimo</strong></ion-card-subtitle>\r\n            <ion-card-subtitle *ngFor=\"let locacao of locacaoFora.itensLocacao\">{{locacao.material.descricao}} x{{locacao.quantidade}}</ion-card-subtitle>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div style=\"text-align:center\">\r\n              <h2 style=\"color:green\">Emprestado</h2>\r\n              <h3>Edmar</h3>\r\n            </div>\r\n          </ion-card-content>\r\n          <ion-button (click)=\"qrcode()\" style=\"padding-bottom:1%\">QR Code</ion-button>\r\n        </ion-card>\r\n      <!-- LISTA -->\r\n  </div>\r\n  <ion-fab *ngIf=\"!tipo\" horizontal=\"end\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button color=\"success\" routerLink=\"/emprestimo\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n  <!-- FIM USUAIO -->\r\n</ion-content>\r\n\r\n<ion-tabs *ngIf=\"tipo\">\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button>\r\n      <ion-icon name=\"calendar\"></ion-icon>\r\n      <ion-label>Schedule</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"speakers\">\r\n      <ion-icon name=\"contacts\"></ion-icon>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"map\">\r\n      <ion-icon name=\"map\"></ion-icon>\r\n      <ion-label>Map</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\">\r\n      <ion-icon name=\"information-circle\"></ion-icon>\r\n      <ion-label>About</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>"

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




var HomePage = /** @class */ (function () {
    function HomePage(menuController, alertController, locacaoService) {
        this.menuController = menuController;
        this.alertController = alertController;
        this.locacaoService = locacaoService;
        this.tipoUsuario = 'aluno';
        this.tipo = true;
        if (this.tipoUsuario === "aluno") {
            this.tipo = false;
        }
        else {
            this.tipo = true;
        }
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
        { type: _service_locacao_service__WEBPACK_IMPORTED_MODULE_3__["LocacaoService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _service_locacao_service__WEBPACK_IMPORTED_MODULE_3__["LocacaoService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map