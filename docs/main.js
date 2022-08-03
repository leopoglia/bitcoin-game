(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'game';
        this.nickname = localStorage.getItem("nickname");
        this.audio = new Audio();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.audio.src = "../../../assets/minecraft.mp3";
        this.audio.load();
        this.audio.play();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_initial_initial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/initial/initial.component */ "./src/app/start/initial/initial.component.ts");
/* harmony import */ var _fases_um_um_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fases/um/um.component */ "./src/app/fases/um/um.component.ts");
/* harmony import */ var _start_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start/login/login.component */ "./src/app/start/login/login.component.ts");
/* harmony import */ var _start_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./start/ranking/ranking.component */ "./src/app/start/ranking/ranking.component.ts");
/* harmony import */ var _fases_tempo_tempo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fases/tempo/tempo.component */ "./src/app/fases/tempo/tempo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _start_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'inicio', component: _start_initial_initial_component__WEBPACK_IMPORTED_MODULE_5__["InitialComponent"] },
    { path: 'ranking', component: _start_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_8__["RankingComponent"] },
    {
        path: 'fase', children: [
            { path: '1', component: _fases_um_um_component__WEBPACK_IMPORTED_MODULE_6__["UmComponent"] }
        ]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _start_initial_initial_component__WEBPACK_IMPORTED_MODULE_5__["InitialComponent"],
                _fases_um_um_component__WEBPACK_IMPORTED_MODULE_6__["UmComponent"],
                _start_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _start_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_8__["RankingComponent"],
                _fases_tempo_tempo_component__WEBPACK_IMPORTED_MODULE_9__["TempoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            providers: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/fases/tempo/tempo.component.css":
/*!*************************************************!*\
  !*** ./src/app/fases/tempo/tempo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tempo,\r\n.moedas,\r\n.fase {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 98px;\r\n    height: 56px;\r\n    border-radius: 5px;\r\n    background-image: url('/bitcoin-game/src/app/imgs/bau.png');\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.agrupamento {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.moedas img {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin-right: 10px;\r\n}"

/***/ }),

/***/ "./src/app/fases/tempo/tempo.component.html":
/*!**************************************************!*\
  !*** ./src/app/fases/tempo/tempo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"agrupamento\">\r\n    <div class=\"tempo\">{{segundos}}</div>\r\n    <div class=\"moedas\"><img src=\"https://i.imgur.com/H2gpnJd.png\" alt=\"\">{{moedas}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/fases/tempo/tempo.component.ts":
/*!************************************************!*\
  !*** ./src/app/fases/tempo/tempo.component.ts ***!
  \************************************************/
/*! exports provided: TempoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TempoComponent", function() { return TempoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TempoComponent = /** @class */ (function () {
    function TempoComponent() {
        this.wins = 1;
        this.ganhadores = JSON.parse(localStorage.getItem('lista'));
        this.morte = localStorage.setItem('morte', 'false');
        this.nickname = localStorage.getItem('nickname');
        this.moedas = 0;
        this.segundos = 10;
        this.segundostotal = 10;
    }
    TempoComponent.prototype.ngOnInit = function () {
        this.startTimer();
    };
    TempoComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.morte = localStorage.getItem('morte');
            if (localStorage.getItem('moedas') == 'moedas') {
                console.log("10");
            }
            else {
                _this.moedas = localStorage.getItem('moedas');
            }
            if (localStorage.getItem('moedas') == "3") {
                _this.tempo = _this.segundostotal - _this.segundos;
                localStorage.setItem('tempo', _this.tempo);
                if (_this.wins == 1) {
                    console.log(_this.ganhadores);
                    if (_this.ganhadores == undefined) {
                        _this.ganhadores = [];
                    }
                    _this.ganhadores.push({ nome: _this.nickname, tempo: _this.tempo + 1 });
                    localStorage.setItem('lista', JSON.stringify(_this.ganhadores));
                    _this.wins = 0;
                }
            }
            if (_this.segundos > 0) {
                if (_this.morte == "false") {
                    _this.segundos--;
                }
            }
            else {
                localStorage.setItem('morte', 'true');
            }
        }, 1000);
    };
    TempoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tempo',
            template: __webpack_require__(/*! ./tempo.component.html */ "./src/app/fases/tempo/tempo.component.html"),
            styles: [__webpack_require__(/*! ./tempo.component.css */ "./src/app/fases/tempo/tempo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TempoComponent);
    return TempoComponent;
}());



/***/ }),

/***/ "./src/app/fases/um/um.component.css":
/*!*******************************************!*\
  !*** ./src/app/fases/um/um.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\nbody {\r\n    padding: 50px;\r\n    height: 100vh;\r\n    background-image: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/65614919-0734-4dc8-9460-7034fd979346/dbg8qqd-0fb0aced-d05c-4df6-a7c6-b8e04c184ac5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY1NjE0OTE5LTA3MzQtNGRjOC05NDYwLTcwMzRmZDk3OTM0NlwvZGJnOHFxZC0wZmIwYWNlZC1kMDVjLTRkZjYtYTdjNi1iOGUwNGMxODRhYzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9IQbxC3HC3uuJLf8V9Ridq005b2_-4zFg6Cb9rJ2tbw');\r\n}\r\n\r\n.personagem {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n}\r\n\r\n.personagem:hover {\r\n    -webkit-transform: translateY(-3px);\r\n            transform: translateY(-3px);\r\n}\r\n\r\n#pane {\r\n    position: relative;\r\n    height: 86vh;\r\n}\r\n\r\n#box {\r\n    position: relative;\r\n    width: 1px;\r\n    height: 1px;\r\n}\r\n\r\n#box .personagem img {\r\n    height: 70px;\r\n    position: absolute;\r\n    transition: 0s;\r\n}\r\n\r\n.parede {\r\n    width: 100px;\r\n    height: 100px;\r\n    right: 0;\r\n    background-color: black;\r\n}\r\n\r\n.inimigos {\r\n    position: absolute;\r\n}\r\n\r\n.inimigos img {\r\n    height: 70px;\r\n}\r\n\r\n.moeda img {\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.moeda {\r\n    position: absolute;\r\n    bottom: 0;\r\n    cursor: pointer;\r\n    -webkit-animation: moeda 2s infinite;\r\n            animation: moeda 2s infinite;\r\n}\r\n\r\nbutton {\r\n    font-size: 35px;\r\n    margin: 20px;\r\n    background-color: transparent;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: 0.2s;\r\n    border: 0;\r\n}\r\n\r\nbutton:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    color: rgb(238, 180, 20);\r\n}\r\n\r\n@-webkit-keyframes moeda {\r\n    0% {\r\n        margin-top: 0px;\r\n    }\r\n\r\n    50% {\r\n        margin-top: 5px;\r\n    }\r\n\r\n    100% {\r\n        margin-top: 0%;\r\n    }\r\n}\r\n\r\n@keyframes moeda {\r\n    0% {\r\n        margin-top: 0px;\r\n    }\r\n\r\n    50% {\r\n        margin-top: 5px;\r\n    }\r\n\r\n    100% {\r\n        margin-top: 0%;\r\n    }\r\n}\r\n\r\n.modal, .modalvenceu {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n    display: none;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: rgba(214, 1, 1, 0.664);\r\n    background: radial-gradient(circle, rgba(0, 0, 0, 0.322) 0%, rgba(2, 0, 36, 1) 100%);\r\n}\r\n\r\n.capa {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n\r\n.modal .gameover, .modalvenceu .gameover  {\r\n    width: 400px;\r\n    height: 400px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.modal .gameover .botoes, .modalvenceu .gameover .botoes  {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.modal .gameover .botoes button, .modalvenceu .gameover .botoes button {\r\n    font-size: 25px !important;\r\n}\r\n\r\n.modal .gameover .titulo, .modalvenceu .gameover .titulo {\r\n    font-size: 55px;\r\n    margin-bottom: 80px;\r\n}\r\n\r\n.modal .gameover p, .modalvenceu .gameover p {\r\n    margin: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color: #fff;\r\n    font-size: 30px;\r\n}\r\n\r\n.arvores img {\r\n    width: 150px;\r\n    position: absolute;\r\n}\r\n\r\n.infos {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    position: absolute;\r\n    bottom: 0;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.infos div {\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.tempo,\r\n.moedas,\r\n.fase {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 98px;\r\n    height: 56px;\r\n    border-radius: 5px;\r\n    background-image: url('/bitcoin-game/src/app/imgs/bau.png');\r\n}\r\n\r\n.moedas img {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin-right: 10px;\r\n}\r\n\r\n@-webkit-keyframes inimigos {\r\n    0% {\r\n        right: 0;\r\n    }\r\n\r\n    100% {\r\n        right: 120%;\r\n    }\r\n}\r\n\r\n@keyframes inimigos {\r\n    0% {\r\n        right: 0;\r\n    }\r\n\r\n    100% {\r\n        right: 120%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/fases/um/um.component.html":
/*!********************************************!*\
  !*** ./src/app/fases/um/um.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <!-- <div class=\"capa\"></div> -->\r\n\r\n  <div id=\"pane\">\r\n    <div id=\"box\">\r\n      <div class=\"personagem\">\r\n        <img id=\"imgpersonagem\" src=\"/src/app/imgs/3.gif\" alt=\"\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"infos\">\r\n      <div class=\"fase\">fase: 1</div>\r\n      <app-tempo></app-tempo>\r\n    </div>\r\n\r\n\r\n    <!-- <img class=\"arvore\" src=\"https://i.imgur.com/2jP0xYE.png\" alt=\"\"> -->\r\n    <!-- <img src=\"https://i.imgur.com/jRdaXCu.png\" alt=\"\"> -->\r\n\r\n    <div class=\"inimigos\">\r\n      <img src=\"/src/app/imgs/1.gif\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"inimigos\">\r\n      <img src=\"/src/app/imgs/2.gif\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"inimigos\">\r\n      <img src=\"/src/app/imgs/6.gif\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"inimigos\">\r\n      <img src=\"/src/app/imgs/5.gif\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"inimigos\">\r\n      <img src=\"/src/app/imgs/4.gif\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"moeda\">\r\n      <img src=\"https://i.imgur.com/H2gpnJd.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"moeda\">\r\n      <img src=\"https://i.imgur.com/H2gpnJd.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"moeda\">\r\n      <img src=\"https://i.imgur.com/H2gpnJd.png\" alt=\"\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal\">\r\n    <div class=\"gameover\">\r\n      <p class=\"titulo\">GAME OVER!</p>\r\n      <p>jogar de novo?</p>\r\n      <div class=\"botoes\">\r\n        <button (click)=\"sim()\">sim</button>\r\n        <button routerLink=\"/inicio\">nao</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modalvenceu\">\r\n    <div class=\"gameover\">\r\n      <p class=\"titulo\">WIN!</p>\r\n      <p>tempo: {{tempo}}s</p>\r\n      <p>jogar de novo?</p>\r\n      <div class=\"botoes\">\r\n        <button (click)=\"sim()\">sim</button>\r\n        <button routerLink=\"/inicio\">nao</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/fases/um/um.component.ts":
/*!******************************************!*\
  !*** ./src/app/fases/um/um.component.ts ***!
  \******************************************/
/*! exports provided: UmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmComponent", function() { return UmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UmComponent = /** @class */ (function () {
    function UmComponent(Router) {
        this.Router = Router;
        this.segundos = 0;
        this.nick = localStorage.getItem("nickname");
        this.arvores = document.getElementsByClassName('arvores');
        this.inimigos = document.getElementsByClassName('inimigos');
    }
    UmComponent.prototype.ngOnInit = function () {
        localStorage.setItem("moedas", '0');
        this.startTimer();
    };
    UmComponent.prototype.startTimer = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.tempo = localStorage.getItem('tempo');
        }, 200);
    };
    UmComponent.prototype.sim = function () {
        location.reload();
    };
    UmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-um',
            template: __webpack_require__(/*! ./um.component.html */ "./src/app/fases/um/um.component.html"),
            styles: [__webpack_require__(/*! ./um.component.css */ "./src/app/fases/um/um.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UmComponent);
    return UmComponent;
}());



/***/ }),

/***/ "./src/app/start/initial/initial.component.css":
/*!*****************************************************!*\
  !*** ./src/app/start/initial/initial.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    background-image: url('https://st3.depositphotos.com/1340907/14598/v/600/depositphotos_145988365-stock-illustration-pixel-game-background.jpg');\r\n    background-repeat: repeat-x;\r\n    background-color: rgb(103, 59, 49);\r\n}\r\n\r\n.usuario {\r\n    position: absolute;\r\n    margin-left: 25px;\r\n}\r\n\r\n.icone img {\r\n    margin: 20px;\r\n    width: 50px;\r\n}\r\n\r\n.personagens {\r\n    margin-top: 10px;\r\n}\r\n\r\n.personagens,\r\n.personagem,\r\n.titulo {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.personagens .personagem {\r\n    -webkit-filter: grayscale(1);\r\n            filter: grayscale(1);\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 5px;\r\n    transition: 0.3s;\r\n    cursor: pointer;\r\n    margin: 0px 30px;\r\n    border: 3px solid transparent;\r\n}\r\n\r\n#atual {\r\n    -webkit-filter: grayscale(0);\r\n            filter: grayscale(0);\r\n}\r\n\r\n.personagens #atual:hover {\r\n    -webkit-transform: translateY(-3px);\r\n            transform: translateY(-3px);\r\n}\r\n\r\n.cadeado {\r\n    position: absolute;\r\n    width: 20px;\r\n}\r\n\r\n.titulo p {\r\n    font-size: 40px;\r\n    margin-top: 150px;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.opcoes {\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.opcoes a {\r\n    width: 100%;\r\n}\r\n\r\n.opcoes button {\r\n    width: 100%;\r\n    font-size: 35px;\r\n    margin: 20px 0px;\r\n    background-color: transparent;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: 0.2s;\r\n    border: 0;\r\n    outline: none;\r\n}\r\n\r\n.opcoes button:hover {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    color: rgb(238, 180, 20);\r\n}\r\n\r\np {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.coracao {\r\n    width: 25px;\r\n    height: 25px;\r\n    margin: 0 5px;\r\n}"

/***/ }),

/***/ "./src/app/start/initial/initial.component.html":
/*!******************************************************!*\
  !*** ./src/app/start/initial/initial.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n  <div class=\"usuario\">\r\n    <p>{{nickname}}</p>\r\n  </div>\r\n\r\n  <div class=\"titulo\">\r\n    <p>escolha seu personagem</p>\r\n  </div>\r\n\r\n\r\n  <div class=\"personagens\">\r\n    <div class=\"personagem\" id=\"atual\">\r\n      <img src=\"https://i.imgur.com/JfLIZwh.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"personagem\">\r\n      <img src=\"https://i.imgur.com/eSBDZn1.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"personagem\">\r\n      <img src=\"https://i.imgur.com/bLrfvPk.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"personagem\">\r\n      <img src=\"https://i.imgur.com/lPzmP0Y.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"personagem\">\r\n      <img src=\"https://i.imgur.com/NWWXzoC.png\" alt=\"\">\r\n    </div>\r\n\r\n    <div class=\"personagem\">\r\n      <img src=\"https://i.imgur.com/ofzFn0M.png\" alt=\"\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"opcoes\">\r\n    <a href=\"/fase/1\"> <button>PLAY</button>\r\n    </a>\r\n    <button routerLink=\"/ranking\">RANKING</button>\r\n    <button routerLink=\"\">EXIT</button>\r\n  </div>\r\n\r\n  <p>feito com ❤️ por eduarda, leonardo e vytor.</p>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/start/initial/initial.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start/initial/initial.component.ts ***!
  \****************************************************/
/*! exports provided: InitialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialComponent", function() { return InitialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InitialComponent = /** @class */ (function () {
    function InitialComponent() {
        this.nickname = localStorage.getItem("nickname");
        localStorage.setItem('ganhou', "0");
    }
    InitialComponent.prototype.ngOnInit = function () {
    };
    InitialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-initial',
            template: __webpack_require__(/*! ./initial.component.html */ "./src/app/start/initial/initial.component.html"),
            styles: [__webpack_require__(/*! ./initial.component.css */ "./src/app/start/initial/initial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InitialComponent);
    return InitialComponent;
}());



/***/ }),

/***/ "./src/app/start/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/start/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    background-image: url('https://st3.depositphotos.com/1340907/14598/v/600/depositphotos_145988365-stock-illustration-pixel-game-background.jpg');\r\n    background-repeat: repeat-x;\r\n    background-color: rgb(103, 59, 49);\r\n}\r\n\r\n.icone img{\r\n    margin: 20px;\r\n    width: 50px;\r\n}\r\n\r\n.personagens{\r\n    margin-top: 10px;\r\n}\r\n\r\n.personagens,\r\n.titulo {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#atual{\r\n    -webkit-filter: grayscale(0);\r\n            filter: grayscale(0);\r\n}\r\n\r\n.personagens #atual:hover {\r\n    -webkit-transform: translateY(-3px);\r\n            transform: translateY(-3px);\r\n}\r\n\r\n.cadeado{\r\n    position: absolute;\r\n    width: 20px;\r\n}\r\n\r\n.titulo p {\r\n    font-size: 40px;\r\n    margin-top: 150px;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n}\r\n\r\n.opcoes{\r\n    width: 100%;\r\n    display: -ms-grid;\r\n    display: grid;\r\n    margin-top: 60px;\r\n    margin-bottom: 160px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.opcoes button{\r\n    font-size: 35px;\r\n    margin: 20px;\r\n    background-color: transparent;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: 0.2s;\r\n    border: 0;\r\n}\r\n\r\n.opcoes button:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    color: rgb(238, 180, 20);\r\n}\r\n\r\np{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.coracao{\r\n    width: 25px;\r\n    height: 25px;\r\n    margin: 0 5px;\r\n}\r\n\r\ninput{\r\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    background-color: transparent;\r\n    height: 40px;\r\n    font-size: 20px;\r\n    color: #fff;\r\n    border: 3px solid #fff;\r\n    outline: none;\r\n    width: 400px;\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    transition: 0.5s;\r\n}\r\n\r\n.erro{\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: -150px;\r\n    position: absolute;\r\n}\r\n\r\n.erro p{\r\n    font-size: 30px;\r\n}\r\n\r\ninput:focus{\r\n    border: 3px solid rgb(238, 180, 20);\r\n}"

/***/ }),

/***/ "./src/app/start/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/start/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n\r\n  <div class=\"titulo\">\r\n    <p>digite seu nickname</p>\r\n  </div>\r\n\r\n\r\n  <div class=\"personagens\">\r\n   <input type=\"text\" [(ngModel)]=\"nickname\" name=\"nickname\">\r\n  </div>\r\n\r\n  <div class=\"opcoes\">\r\n    <button (click)=\"entrar()\">CONFIRMAR</button>\r\n  </div>\r\n\r\n  <div class=\"erro\" *ngIf=\"erro\"><p> digite um nickname!</p></div>\r\n\r\n  <p>feito com ❤️ por eduarda, leonardo e vytor.</p>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/start/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/start/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(route) {
        this.route = route;
        this.nickname = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.entrar = function () {
        var _this = this;
        if (this.nickname != "") {
            localStorage.setItem("nickname", this.nickname);
            this.route.navigate(['inicio']);
        }
        else {
            this.erro = true;
            setTimeout(function () {
                _this.erro = false;
            }, 1000 * 4);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/start/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/start/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/start/ranking/ranking.component.css":
/*!*****************************************************!*\
  !*** ./src/app/start/ranking/ranking.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    background-image: url('https://st3.depositphotos.com/1340907/14598/v/600/depositphotos_145988365-stock-illustration-pixel-game-background.jpg');\r\n    background-repeat: repeat-x;\r\n    background-position-y: -120px;\r\n    background-color: rgb(103, 59, 49);\r\n    color: #fff;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n*::-webkit-scrollbar-track {\r\n    background: rgb(81, 41, 38);\r\n    border-radius: 12px;\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n    background: rgb(49, 25, 24);\r\n    border-radius: 20px;\r\n}\r\n\r\n.usuario {\r\n    position: absolute;\r\n    margin-left: 25px;\r\n}\r\n\r\n.titulo p {\r\n    font-size: 40px;\r\n    margin-top: 150px;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    margin-bottom: 100px;\r\n}\r\n\r\np {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    color: #fff;\r\n}\r\n\r\n.background-ranking {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.ranking {\r\n    width: 600px;\r\n    height: 400px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.fases {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.fases button {\r\n    width: 200px;\r\n    margin-left: 15px !important;\r\n    font-size: 20px;\r\n    background-color: transparent;\r\n    color: #fff;\r\n    border: 0px;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n.fases button:hover {\r\n    color: rgb(238, 180, 20);\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n    transition: 0.3s;\r\n}\r\n\r\n.atual {\r\n    color: rgb(238, 180, 20);\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\n}\r\n\r\n.infos {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.usuarios {\r\n    overflow-y: auto;\r\n    height: 100%;\r\n}\r\n\r\n.infos tbody,\r\n.infos,\r\n.infos tr {\r\n    width: 100%;\r\n}\r\n\r\n.infos tr {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    margin-top: 10px;\r\n}\r\n\r\n.infos td {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100px;\r\n}"

/***/ }),

/***/ "./src/app/start/ranking/ranking.component.html":
/*!******************************************************!*\
  !*** ./src/app/start/ranking/ranking.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\r\n  <div class=\"usuario\">\r\n    <p>{{nickname}}</p>\r\n  </div>\r\n\r\n  <div class=\"titulo\">\r\n    <p>ranking</p>\r\n  </div>\r\n\r\n  <div class=\"background-ranking\">\r\n    <div class=\"ranking\">\r\n      <table class=\"fases\">\r\n        <button>fase 1</button>\r\n        <button>fase 2</button>\r\n        <button>fase 3</button>\r\n        <button>fase 4</button>\r\n        <button>fase 5</button>\r\n        <button>fase 6</button>\r\n      </table>\r\n\r\n      <table class=\"infos\">\r\n        <tr>\r\n          <td>\r\n            usuario\r\n          </td>\r\n\r\n          <td>\r\n            tempo\r\n          </td>\r\n        </tr>\r\n\r\n      </table>\r\n\r\n      <div class=\"usuarios\">\r\n        <table *ngFor=\"let item of rankingcerto;\" class=\"infos\">\r\n          <tr>\r\n            <td>\r\n              {{item.nome}}\r\n            </td>\r\n\r\n            <td>\r\n              {{item.tempo}}\r\n            </td>\r\n          </tr>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/start/ranking/ranking.component.ts":
/*!****************************************************!*\
  !*** ./src/app/start/ranking/ranking.component.ts ***!
  \****************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RankingComponent = /** @class */ (function () {
    function RankingComponent() {
        this.nickname = localStorage.getItem("nickname");
        this.ranking = JSON.parse(localStorage.getItem('lista'));
        this.rankingcerto = this.ranking.sort();
    }
    RankingComponent.prototype.ngOnInit = function () {
        console.log(this.ranking);
    };
    RankingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ranking',
            template: __webpack_require__(/*! ./ranking.component.html */ "./src/app/start/ranking/ranking.component.html"),
            styles: [__webpack_require__(/*! ./ranking.component.css */ "./src/app/start/ranking/ranking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RankingComponent);
    return RankingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aluno\Documents\GitHub\bitcoin-game\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map