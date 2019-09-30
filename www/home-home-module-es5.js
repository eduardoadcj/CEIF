(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title style=\"margin-left: 20%;color: #4aba70\">CEIF IFPR</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- ASSISTENTE -->\n\n  <!-- FIM ASSISTENTE -->\n\n\n  <!-- USUARIO -->\n  <!-- LISTA -->\n  <div *ngIf=\"!tipo\">\n    <!-- <ion-list>\n      <ion-item>\n        <ion-avatar slot=\"start\">\n          <img width=\"30px\" height=\"30px\" src=\"https://blog.certisign.com.br/wp-content/uploads/2018/10/certo.png?cod_rev=38788\">\n        </ion-avatar>\n        <ion-label>\n          <h2>Instrumentos</h2>\n          <h3>Violão</h3>\n        </ion-label>\n      </ion-item>\n    </ion-list> -->\n    <ion-list>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Instrumentos</ion-card-subtitle>\n          <ion-card-title>Violão</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          <div style=\"text-align:center\">\n            <h2 style=\"color:blue\">Emprestado</h2>\n            <h3>Edmar</h3>\n            <h2>27/09/2019 - 22:00</h2>\n          </div>\n        </ion-card-content>\n        <ion-button (click)=\"qrcode()\">show code</ion-button>\n      </ion-card>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Instrumentos</ion-card-subtitle>\n          <ion-card-title>Violão</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          <div style=\"text-align:center\">\n            <h2 style=\"color:green\">Devolvido</h2>\n            <h3>Edmar</h3>\n            <h2>27/09/2019 - 22:00</h2>\n          </div>\n        </ion-card-content>\n        <ion-button (click)=\"qrcode()\">show code</ion-button>\n      </ion-card>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Instrumentos</ion-card-subtitle>\n          <ion-card-title>Guitarra</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n          <div style=\"text-align:center\">\n            <h2 style=\"color:green\">Devolvido</h2>\n            <h3>Edgar</h3>\n            <h2>27/09/2019 - 22:00</h2>\n          </div>\n        </ion-card-content>\n        <ion-button (click)=\"qrcode()\">show code</ion-button>\n      </ion-card>\n      <!-- LISTA -->\n\n      <div class=\"ion-padding\">\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n          <ion-fab-button color=\"success\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n      </div>\n    </ion-list>\n  </div>\n  <!-- FIM USUAIO -->\n</ion-content>\n\n<ion-tabs *ngIf=\"tipo\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button>\n      <ion-icon name=\"calendar\"></ion-icon>\n      <ion-label>Schedule</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"contacts\"></ion-icon>\n      <ion-label>Speakers</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"map\">\n      <ion-icon name=\"map\"></ion-icon>\n      <ion-label>Map</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"about\">\n      <ion-icon name=\"information-circle\"></ion-icon>\n      <ion-label>About</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

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



var HomePage = /** @class */ (function () {
    function HomePage(menuController, alertController) {
        this.menuController = menuController;
        this.alertController = alertController;
        this.tipoUsuario = 'usuario';
        this.tipo = true;
        if (this.tipoUsuario === "aluno") {
            this.tipo = false;
        }
        else {
            this.tipo = true;
        }
    }
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map