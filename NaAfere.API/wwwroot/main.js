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

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, alertify) {
        this.authService = authService;
        this.router = router;
        this.alertify = alertify;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You shall not pass!!');
        this.router.navigate(['']);
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        // tslint:disable-next-line:only-arrow-functions
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:5000/api/auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token.result);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token.result);
                console.log(_this.decodedToken);
            }
        }));
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + 'register', user);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modalStateErrors = '';
                if (serverError && typeof serverError === 'object') {
                    for (var key in serverError) {
                        if (serverError[key]) {
                            modalStateErrors += serverError[key] + '\n';
                        }
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(modalStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _talk_talk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./talk/talk.component */ "./src/app/talk/talk.component.ts");
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crew/crew.component */ "./src/app/crew/crew.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _regist_regist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./regist/regist.component */ "./src/app/regist/regist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");











var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__["AuthGuard"]],
        children: [
            { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'games', component: _games_games_component__WEBPACK_IMPORTED_MODULE_7__["GamesComponent"] },
            { path: 'crew', component: _crew_crew_component__WEBPACK_IMPORTED_MODULE_6__["CrewComponent"] },
            { path: 'talk', component: _talk_talk_component__WEBPACK_IMPORTED_MODULE_5__["TalkComponent"] },
            { path: 'teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_4__["TeamsComponent"] }
        ]
    },
    // {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    // {path: 'games', component: GamesComponent, canActivate: [AuthGuard]},
    // {path: 'crew', component: CrewComponent, canActivate: [AuthGuard]},
    // {path: 'talk', component: TalkComponent, canActivate: [AuthGuard]},
    // {path: 'teams', component: TeamsComponent, canActivate: [AuthGuard]},
    { path: 'register', component: _regist_regist_component__WEBPACK_IMPORTED_MODULE_8__["RegistComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-show-hide-password */ "./node_modules/ngx-show-hide-password/fesm5/ngx-show-hide-password.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _regist_regist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./regist/regist.component */ "./src/app/regist/regist.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _games_games_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./games/games.component */ "./src/app/games/games.component.ts");
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./crew/crew.component */ "./src/app/crew/crew.component.ts");
/* harmony import */ var _talk_talk_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./talk/talk.component */ "./src/app/talk/talk.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _regist_regist_component__WEBPACK_IMPORTED_MODULE_10__["RegistComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _games_games_component__WEBPACK_IMPORTED_MODULE_13__["GamesComponent"],
                _crew_crew_component__WEBPACK_IMPORTED_MODULE_14__["CrewComponent"],
                _talk_talk_component__WEBPACK_IMPORTED_MODULE_15__["TalkComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_16__["TeamsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_5__["BsDatepickerModule"].forRoot(),
                ngx_show_hide_password__WEBPACK_IMPORTED_MODULE_6__["ShowHidePasswordModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_17__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_18__["AlertifyService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/crew/crew.component.css":
/*!*****************************************!*\
  !*** ./src/app/crew/crew.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZXcvY3Jldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/crew/crew.component.html":
/*!******************************************!*\
  !*** ./src/app/crew/crew.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  crew works!\n</p>\n"

/***/ }),

/***/ "./src/app/crew/crew.component.ts":
/*!****************************************!*\
  !*** ./src/app/crew/crew.component.ts ***!
  \****************************************/
/*! exports provided: CrewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrewComponent", function() { return CrewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CrewComponent = /** @class */ (function () {
    function CrewComponent() {
    }
    CrewComponent.prototype.ngOnInit = function () {
    };
    CrewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-crew',
            template: __webpack_require__(/*! ./crew.component.html */ "./src/app/crew/crew.component.html"),
            styles: [__webpack_require__(/*! ./crew.component.css */ "./src/app/crew/crew.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CrewComponent);
    return CrewComponent;
}());



/***/ }),

/***/ "./src/app/games/games.component.css":
/*!*******************************************!*\
  !*** ./src/app/games/games.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWVzL2dhbWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/games/games.component.html":
/*!********************************************!*\
  !*** ./src/app/games/games.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  games works!\n</p>\n"

/***/ }),

/***/ "./src/app/games/games.component.ts":
/*!******************************************!*\
  !*** ./src/app/games/games.component.ts ***!
  \******************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GamesComponent = /** @class */ (function () {
    function GamesComponent() {
    }
    GamesComponent.prototype.ngOnInit = function () {
    };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/games/games.component.html"),
            styles: [__webpack_require__(/*! ./games.component.css */ "./src/app/games/games.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropdown-toggle, .dropdown-item {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJvcGRvd24tdG9nZ2xlLCAuZHJvcGRvd24taXRlbSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"checkToken()\" class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <!-- <div class=\"container\"> -->\n    <a class=\"navbar-brand\">NaAFERE</a>\n\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/games\">Games</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/talk\">Talk</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/crew\">Crew</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/teams\">Teams</a>\n      </li>\n    </ul>\n\n    <div class=\"dropdown\" dropdown>\n      <a class=\"dropdown-toggle text-light\" dropdownToggle>\n        {{authService.decodedToken?.unique_name | titlecase}}\n      </a>\n      <div class=\"dropdown-menu mt-3\" *dropdownMenu>\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i>Edit Profile</a>\n        <div class=\"dropdown-divider\"></div>\n        <a class=\"dropdown-item\" routerLink=\"\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i>Logout</a>\n      </div>\n    </div>\n  <!-- </div> -->\n</nav>\n\n\n \n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('loged out');
    };
    HomeComponent.prototype.checkToken = function () {
        var token = localStorage.getItem('token');
        return !!token; // if token is not empty because of !! it will return true, otherwise it will return false
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.form-signin {\r\n  align-items: center;\r\n  width: 50%;\r\n  max-width: 330px;\r\n  padding: 15px;\r\n  margin: auto;\r\n}\r\n\r\n.form-signin .center {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.form-signin .checkbox {\r\n  font-weight: 400;\r\n}\r\n\r\n.form-signin .form-control {\r\n  position: relative;\r\n  box-sizing: border-box;\r\n  height: auto;\r\n  padding: 10px;\r\n  font-size: 16px;\r\n}\r\n\r\n.form-signin .form-control:focus {\r\n  z-index: 2;\r\n}\r\n\r\n.form-signin input[type=\"email\"] {\r\n  margin-bottom: -1px;\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.form-signin input[type=\"password\"] {\r\n  margin-bottom: 10px;\r\n  border-top-left-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1heC13aWR0aDogMzMwcHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuY2VudGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uZm9ybS1zaWduaW4gLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cImVtYWlsXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!checkToken()\" #loginForm=\"ngForm\" class=\"form-signin\" (ngSubmit)=\"login()\" autocomplete=\"on\">\n<!-- <form *ngIf=\"!registerMode && !checkToken()\" #loginForm=\"ngForm\" class=\"form-signin\"> -->\n  <img class=\"center mb-3 mt-2\" src=\"../assets/logoForNow.PNG\" alt=\"\" width=\"72\" height=\"72\">\n  <h1 class=\"h3 mb-3 font-weight-normal text-center\">Please sign in</h1>\n\n  <!-- <label for=\"inputEmail\" class=\"sr-only\">Email address</label> -->\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control mb-2\" placeholder=\"Email address\" required=\"\" \n      autofocus=\"\" [(ngModel)]=\"model.email\" name=\"email\">\n\n  <!-- <label for=\"inputPassword\" class=\"sr-only\">Password</label> -->\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required=\"\" \n      [(ngModel)]=\"model.password\" name=\"password\">\n\n  <div class=\"checkbox mb-1\">\n    <label>\n      <input type=\"checkbox\" value=\"remember-me\"> Remember me\n    </label>\n  </div>\n  \n  <div class=\"text-center\">\n      <button [disabled]=\"!loginForm.valid\" class=\"btn btn-success mr-1\" type=\"submit\">Sign in</button>\n      <button class=\"btn btn-secondary\" routerLink=\"/register\" type=\"button\">Register</button>\n  </div> \n</form>\n\n<!-- <div *ngIf=\"registerMode\" class=\"container\">\n  <app-regist></app-regist>\n</div> -->\n<!-- class=\"nav-item nav-link-edit\" -->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('login success!');
        }, function (error) {
            _this.alertify.error(error);
        }, function () {
            _this.router.navigate(['/games']);
        });
    };
    LoginComponent.prototype.checkToken = function () {
        return this.authService.loggedIn();
        // return !!token;  // if token is not empty because of !! it will return true, otherwise it will return false
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/regist/regist.component.css":
/*!*********************************************!*\
  !*** ./src/app/regist/regist.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  .form-signin {\r\n    align-items: center;\r\n    width: 50%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: auto;\r\n  }\r\n\r\n  .form-signin .center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n  .form-signin .checkbox {\r\n    font-weight: 400;\r\n  }\r\n\r\n  .form-signin .form-control {\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    height: auto;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .form-signin .form-control:focus {\r\n    z-index: 2;\r\n  }\r\n\r\n  .form-signin input[type=\"email\"] {\r\n    margin-bottom: -1px;\r\n    border-bottom-right-radius: 0;\r\n    border-bottom-left-radius: 0;\r\n  }\r\n\r\n  /* .form-signin input[type=\"password\"] {\r\n    margin-bottom: 10px;\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0L3JlZ2lzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3Qiw0QkFBNEI7RUFDOUI7O0VBQ0E7Ozs7S0FJRyIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdC9yZWdpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC5mb3JtLXNpZ25pbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1heC13aWR0aDogMzMwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tc2lnbmluIC5jZW50ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5mb3JtLXNpZ25pbiAuY2hlY2tib3gge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgLmZvcm0tc2lnbmluIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgfVxyXG4gIC5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxuICB9XHJcbiAgLyogLmZvcm0tc2lnbmluIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/regist/regist.component.html":
/*!**********************************************!*\
  !*** ./src/app/regist/regist.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"!checkToken()\" [formGroup]=\"registerForm\" class=\"form-signin\" (ngSubmit)=\"register()\">\n  <img class=\"center mb-3 mt-2\" src=\"../assets/logoForNow.PNG\" alt=\"\" width=\"72\" height=\"72\">\n  <h1 class=\"h3 mb-3 font-weight-normal text-center\">Sing up!</h1>\n\n  <div class=\"mb-2\">\n    <input type=\"email\" id=\"inputEmail\"\n      [ngClass]=\"{'is-invalid': registerForm.get('email').errors && registerForm.get('email').touched}\"\n      class=\"form-control\" placeholder=\"Email address\" formControlName=\"email\">\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('email').hasError('required') \n            && registerForm.get('email').touched\">Please choose an email</div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('email').hasError('email') \n            && registerForm.get('email').touched\">It is not an email</div>\n  </div>\n\n  <div class=\"mb-2\">\n    <!-- <show-hide-password size=\"sm\" btnStyle=\"secondary\" [btnOutline]=\"true\"> -->\n    <input type=\"password\" id=\"inputPassword\"\n      [ngClass]=\"{'is-invalid': registerForm.get('password').errors && registerForm.get('password').touched}\"\n      class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n    <!-- </show-hide-password> -->\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('required') \n            && registerForm.get('password').touched\">Password is required</div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('minlength') \n            && registerForm.get('password').touched\">Password has to have at least 7 characters</div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('password').hasError('pattern') \n                  && registerForm.get('password').touched\">Password requires at least one: number, uppercase and\n      lowercase character</div>\n\n  </div>\n\n  <div class=\"mb-2\">\n    <!-- <label for=\"inputConfirmPassword\" class=\"sr-only\">Confirm Password</label> -->\n    <input type=\"password\" id=\"inputConfirmPassword\" [ngClass]=\"{'is-invalid': registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').touched\n                || registerForm.get('confirmPassword').touched && registerForm.hasError('mismatch')}\"\n      class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\">\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('confirmPassword').hasError('required') \n          && registerForm.get('confirmPassword').touched\">This field is required</div>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.hasError('mismatch') \n          && registerForm.get('confirmPassword').touched\">The confirmation don't match to Password</div>\n  </div>\n\n  <div class=\"mb-2\">\n    <input type=\"text\" id=\"inputFirstName\"\n      [ngClass]=\"{'is-invalid': registerForm.get('firstName').errors && registerForm.get('firstName').touched}\"\n      class=\"form-control\" placeholder=\"First Name\" formControlName=\"firstName\">\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('firstName').hasError('required') \n              && registerForm.get('firstName').touched\">Please enter your first name</div>\n  </div>\n\n  <div class=\"mb-2\">\n    <input type=\"text\" id=\"inputLastName\"\n      [ngClass]=\"{'is-invalid': registerForm.get('lastName').errors && registerForm.get('lastName').touched}\"\n      class=\"form-control\" placeholder=\"Last Name\" formControlName=\"lastName\">\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('lastName').hasError('required') \n              && registerForm.get('lastName').touched\">Please enter your last name</div>\n  </div>\n\n  <div class=\"mb-2\">\n    <input type=\"text\" id=\"inputCity\"\n      [ngClass]=\"{'is-invalid': registerForm.get('city').errors && registerForm.get('city').touched}\"\n      class=\"form-control\" placeholder=\"City\" formControlName=\"city\">\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('city').hasError('required') \n              && registerForm.get('city').touched\">Please enter your city where you live</div>\n  </div>\n\n  <div class=\"mb-2\">\n    <label class=\"control-label\" style=\"margin-right:10px\">I am a:</label>\n    <label class=\"radio-inline\">\n      <input type=\"radio\" class=\"form-control mr-3\" value=\"male\" formControlName=\"gender\">Male\n    </label>\n    <label class=\"radio-inline ml-3\">\n      <input type=\"radio\" class=\"form-control mr-3\" value=\"female\" formControlName=\"gender\">Female\n    </label>\n  </div>\n\n  <div class=\"mb-2\">\n    <input type=\"text\" bsDatepicker [bsConfig]=\"bsConfig\" id=\"inputDateOfBirth\"\n      [ngClass]=\"{'is-invalid': registerForm.get('dateOfBirth').errors && registerForm.get('dateOfBirth').touched}\"\n      class=\"form-control\" placeholder=\"Date Of Birth\" formControlName=\"dateOfBirth\">\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('dateOfBirth').hasError('required') \n              && registerForm.get('dateOfBirth').touched\">Please choose your nationality</div>\n  </div>\n\n  <div class=\"mb-2\">\n    <label>Nationality: </label>\n    <select [ngClass]=\"{'is-invalid': registerForm.get('country').errors && registerForm.get('country').touched}\"\n      class=\"form-control\" formControlName=\"country\">\n      <option value=\"\" selected disabled hidden>-select one-</option>\n      <option value=\"afghan\">Afghan</option>\n      <option value=\"albanian\">Albanian</option>\n      <option value=\"algerian\">Algerian</option>\n      <option value=\"american\">American</option>\n      <option value=\"andorran\">Andorran</option>\n      <option value=\"angolan\">Angolan</option>\n      <option value=\"antiguans\">Antiguans</option>\n      <option value=\"argentinean\">Argentinean</option>\n      <option value=\"armenian\">Armenian</option>\n      <option value=\"australian\">Australian</option>\n      <option value=\"austrian\">Austrian</option>\n      <option value=\"azerbaijani\">Azerbaijani</option>\n      <option value=\"bahamian\">Bahamian</option>\n      <option value=\"bahraini\">Bahraini</option>\n      <option value=\"bangladeshi\">Bangladeshi</option>\n      <option value=\"barbadian\">Barbadian</option>\n      <option value=\"barbudans\">Barbudans</option>\n      <option value=\"batswana\">Batswana</option>\n      <option value=\"belarusian\">Belarusian</option>\n      <option value=\"belgian\">Belgian</option>\n      <option value=\"belizean\">Belizean</option>\n      <option value=\"beninese\">Beninese</option>\n      <option value=\"bhutanese\">Bhutanese</option>\n      <option value=\"bolivian\">Bolivian</option>\n      <option value=\"bosnian\">Bosnian</option>\n      <option value=\"brazilian\">Brazilian</option>\n      <option value=\"british\">British</option>\n      <option value=\"bruneian\">Bruneian</option>\n      <option value=\"bulgarian\">Bulgarian</option>\n      <option value=\"burkinabe\">Burkinabe</option>\n      <option value=\"burmese\">Burmese</option>\n      <option value=\"burundian\">Burundian</option>\n      <option value=\"cambodian\">Cambodian</option>\n      <option value=\"cameroonian\">Cameroonian</option>\n      <option value=\"canadian\">Canadian</option>\n      <option value=\"cape verdean\">Cape Verdean</option>\n      <option value=\"central african\">Central African</option>\n      <option value=\"chadian\">Chadian</option>\n      <option value=\"chilean\">Chilean</option>\n      <option value=\"chinese\">Chinese</option>\n      <option value=\"colombian\">Colombian</option>\n      <option value=\"comoran\">Comoran</option>\n      <option value=\"congolese\">Congolese</option>\n      <option value=\"costa rican\">Costa Rican</option>\n      <option value=\"croatian\">Croatian</option>\n      <option value=\"cuban\">Cuban</option>\n      <option value=\"cypriot\">Cypriot</option>\n      <option value=\"czech\">Czech</option>\n      <option value=\"danish\">Danish</option>\n      <option value=\"djibouti\">Djibouti</option>\n      <option value=\"dominican\">Dominican</option>\n      <option value=\"dutch\">Dutch</option>\n      <option value=\"east timorese\">East Timorese</option>\n      <option value=\"ecuadorean\">Ecuadorean</option>\n      <option value=\"egyptian\">Egyptian</option>\n      <option value=\"emirian\">Emirian</option>\n      <option value=\"equatorial guinean\">Equatorial Guinean</option>\n      <option value=\"eritrean\">Eritrean</option>\n      <option value=\"estonian\">Estonian</option>\n      <option value=\"ethiopian\">Ethiopian</option>\n      <option value=\"fijian\">Fijian</option>\n      <option value=\"filipino\">Filipino</option>\n      <option value=\"finnish\">Finnish</option>\n      <option value=\"french\">French</option>\n      <option value=\"gabonese\">Gabonese</option>\n      <option value=\"gambian\">Gambian</option>\n      <option value=\"georgian\">Georgian</option>\n      <option value=\"german\">German</option>\n      <option value=\"ghanaian\">Ghanaian</option>\n      <option value=\"greek\">Greek</option>\n      <option value=\"grenadian\">Grenadian</option>\n      <option value=\"guatemalan\">Guatemalan</option>\n      <option value=\"guinea-bissauan\">Guinea-Bissauan</option>\n      <option value=\"guinean\">Guinean</option>\n      <option value=\"guyanese\">Guyanese</option>\n      <option value=\"haitian\">Haitian</option>\n      <option value=\"herzegovinian\">Herzegovinian</option>\n      <option value=\"honduran\">Honduran</option>\n      <option value=\"hungarian\">Hungarian</option>\n      <option value=\"icelander\">Icelander</option>\n      <option value=\"indian\">Indian</option>\n      <option value=\"indonesian\">Indonesian</option>\n      <option value=\"iranian\">Iranian</option>\n      <option value=\"iraqi\">Iraqi</option>\n      <option value=\"irish\">Irish</option>\n      <option value=\"israeli\">Israeli</option>\n      <option value=\"italian\">Italian</option>\n      <option value=\"ivorian\">Ivorian</option>\n      <option value=\"jamaican\">Jamaican</option>\n      <option value=\"japanese\">Japanese</option>\n      <option value=\"jordanian\">Jordanian</option>\n      <option value=\"kazakhstani\">Kazakhstani</option>\n      <option value=\"kenyan\">Kenyan</option>\n      <option value=\"kittian and nevisian\">Kittian and Nevisian</option>\n      <option value=\"kuwaiti\">Kuwaiti</option>\n      <option value=\"kyrgyz\">Kyrgyz</option>\n      <option value=\"laotian\">Laotian</option>\n      <option value=\"latvian\">Latvian</option>\n      <option value=\"lebanese\">Lebanese</option>\n      <option value=\"liberian\">Liberian</option>\n      <option value=\"libyan\">Libyan</option>\n      <option value=\"liechtensteiner\">Liechtensteiner</option>\n      <option value=\"lithuanian\">Lithuanian</option>\n      <option value=\"luxembourger\">Luxembourger</option>\n      <option value=\"macedonian\">Macedonian</option>\n      <option value=\"malagasy\">Malagasy</option>\n      <option value=\"malawian\">Malawian</option>\n      <option value=\"malaysian\">Malaysian</option>\n      <option value=\"maldivan\">Maldivan</option>\n      <option value=\"malian\">Malian</option>\n      <option value=\"maltese\">Maltese</option>\n      <option value=\"marshallese\">Marshallese</option>\n      <option value=\"mauritanian\">Mauritanian</option>\n      <option value=\"mauritian\">Mauritian</option>\n      <option value=\"mexican\">Mexican</option>\n      <option value=\"micronesian\">Micronesian</option>\n      <option value=\"moldovan\">Moldovan</option>\n      <option value=\"monacan\">Monacan</option>\n      <option value=\"mongolian\">Mongolian</option>\n      <option value=\"moroccan\">Moroccan</option>\n      <option value=\"mosotho\">Mosotho</option>\n      <option value=\"motswana\">Motswana</option>\n      <option value=\"mozambican\">Mozambican</option>\n      <option value=\"namibian\">Namibian</option>\n      <option value=\"nauruan\">Nauruan</option>\n      <option value=\"nepalese\">Nepalese</option>\n      <option value=\"new zealander\">New Zealander</option>\n      <option value=\"ni-vanuatu\">Ni-Vanuatu</option>\n      <option value=\"nicaraguan\">Nicaraguan</option>\n      <option value=\"nigerien\">Nigerien</option>\n      <option value=\"north korean\">North Korean</option>\n      <option value=\"northern irish\">Northern Irish</option>\n      <option value=\"norwegian\">Norwegian</option>\n      <option value=\"omani\">Omani</option>\n      <option value=\"pakistani\">Pakistani</option>\n      <option value=\"palauan\">Palauan</option>\n      <option value=\"panamanian\">Panamanian</option>\n      <option value=\"papua new guinean\">Papua New Guinean</option>\n      <option value=\"paraguayan\">Paraguayan</option>\n      <option value=\"peruvian\">Peruvian</option>\n      <option value=\"polish\" selected>Polish</option>\n      <option value=\"portuguese\">Portuguese</option>\n      <option value=\"qatari\">Qatari</option>\n      <option value=\"romanian\">Romanian</option>\n      <option value=\"russian\">Russian</option>\n      <option value=\"rwandan\">Rwandan</option>\n      <option value=\"saint lucian\">Saint Lucian</option>\n      <option value=\"salvadoran\">Salvadoran</option>\n      <option value=\"samoan\">Samoan</option>\n      <option value=\"san marinese\">San Marinese</option>\n      <option value=\"sao tomean\">Sao Tomean</option>\n      <option value=\"saudi\">Saudi</option>\n      <option value=\"scottish\">Scottish</option>\n      <option value=\"senegalese\">Senegalese</option>\n      <option value=\"serbian\">Serbian</option>\n      <option value=\"seychellois\">Seychellois</option>\n      <option value=\"sierra leonean\">Sierra Leonean</option>\n      <option value=\"singaporean\">Singaporean</option>\n      <option value=\"slovakian\">Slovakian</option>\n      <option value=\"slovenian\">Slovenian</option>\n      <option value=\"solomon islander\">Solomon Islander</option>\n      <option value=\"somali\">Somali</option>\n      <option value=\"south african\">South African</option>\n      <option value=\"south korean\">South Korean</option>\n      <option value=\"spanish\">Spanish</option>\n      <option value=\"sri lankan\">Sri Lankan</option>\n      <option value=\"sudanese\">Sudanese</option>\n      <option value=\"surinamer\">Surinamer</option>\n      <option value=\"swazi\">Swazi</option>\n      <option value=\"swedish\">Swedish</option>\n      <option value=\"swiss\">Swiss</option>\n      <option value=\"syrian\">Syrian</option>\n      <option value=\"taiwanese\">Taiwanese</option>\n      <option value=\"tajik\">Tajik</option>\n      <option value=\"tanzanian\">Tanzanian</option>\n      <option value=\"thai\">Thai</option>\n      <option value=\"togolese\">Togolese</option>\n      <option value=\"tongan\">Tongan</option>\n      <option value=\"trinidadian or tobagonian\">Trinidadian or Tobagonian</option>\n      <option value=\"tunisian\">Tunisian</option>\n      <option value=\"turkish\">Turkish</option>\n      <option value=\"tuvaluan\">Tuvaluan</option>\n      <option value=\"ugandan\">Ugandan</option>\n      <option value=\"ukrainian\">Ukrainian</option>\n      <option value=\"uruguayan\">Uruguayan</option>\n      <option value=\"uzbekistani\">Uzbekistani</option>\n      <option value=\"venezuelan\">Venezuelan</option>\n      <option value=\"vietnamese\">Vietnamese</option>\n      <option value=\"welsh\">Welsh</option>\n      <option value=\"yemenite\">Yemenite</option>\n      <option value=\"zambian\">Zambian</option>\n      <option value=\"zimbabwean\">Zimbabwean</option>\n    </select>\n    <div class=\"invalid-feedback\" *ngIf=\"registerForm.get('country').hasError('required') \n              && registerForm.get('country').touched\">Please choose your nationality</div>\n  </div>\n\n  <div class=\"mb-2\">\n    <input type=\"number\" id=\"inputPhoneNumber\" class=\"form-control mb-2\" placeholder=\"Phone Number - optional\"\n      formControlName=\"phoneNumber\">\n  </div>\n\n  <div class=\"text-center\">\n    <button [disabled]=\"!registerForm.valid\" class=\"btn btn-success\" type=\"submit\">Sign up</button>\n    <button class=\"btn btn-secondary\" routerLink=\"\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n  </div>\n\n</form>\n"

/***/ }),

/***/ "./src/app/regist/regist.component.ts":
/*!********************************************!*\
  !*** ./src/app/regist/regist.component.ts ***!
  \********************************************/
/*! exports provided: RegistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistComponent", function() { return RegistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegistComponent = /** @class */ (function () {
    function RegistComponent(authService, alertify, fb, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.fb = fb;
        this.router = router;
    }
    RegistComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-default',
            dateInputFormat: 'YYYY-MM-DD',
            adaptivePosition: true
        },
            this.createRegisterForm();
    };
    RegistComponent.prototype.createRegisterForm = function () {
        this.registerForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(7),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/))]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            gender: ['male'],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phoneNumber: ['']
        }, { validators: this.passwordMatchValidator });
    };
    RegistComponent.prototype.passwordMatchValidator = function (g) {
        return g.get('password').value === g.get('confirmPassword').value ? null : { mismatch: true };
    };
    RegistComponent.prototype.register = function () {
        var _this = this;
        if (this.registerForm.valid) {
            this.user = Object.assign({}, this.registerForm.value);
            this.authService.register(this.user).subscribe(function () {
                _this.alertify.success('Registration successful');
            }, function (error) {
                _this.alertify.error(error);
            }, function () {
                _this.authService.login(_this.user).subscribe(function () {
                    _this.router.navigate(['/games']);
                });
            });
        }
    };
    RegistComponent.prototype.checkToken = function () {
        return this.authService.loggedIn();
        // return !!token;  // if token is not empty because of !! it will return true, otherwise it will return false
    };
    RegistComponent.prototype.cancel = function () {
        console.log('cancelled');
    };
    RegistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regist',
            template: __webpack_require__(/*! ./regist.component.html */ "./src/app/regist/regist.component.html"),
            styles: [__webpack_require__(/*! ./regist.component.css */ "./src/app/regist/regist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegistComponent);
    return RegistComponent;
}());



/***/ }),

/***/ "./src/app/talk/talk.component.css":
/*!*****************************************!*\
  !*** ./src/app/talk/talk.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhbGsvdGFsay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/talk/talk.component.html":
/*!******************************************!*\
  !*** ./src/app/talk/talk.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  talk works!\n</p>\n"

/***/ }),

/***/ "./src/app/talk/talk.component.ts":
/*!****************************************!*\
  !*** ./src/app/talk/talk.component.ts ***!
  \****************************************/
/*! exports provided: TalkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkComponent", function() { return TalkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TalkComponent = /** @class */ (function () {
    function TalkComponent() {
    }
    TalkComponent.prototype.ngOnInit = function () {
    };
    TalkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-talk',
            template: __webpack_require__(/*! ./talk.component.html */ "./src/app/talk/talk.component.html"),
            styles: [__webpack_require__(/*! ./talk.component.css */ "./src/app/talk/talk.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TalkComponent);
    return TalkComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.css":
/*!*******************************************!*\
  !*** ./src/app/teams/teams.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlYW1zL3RlYW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  teams works!\n</p>\n"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamsComponent = /** @class */ (function () {
    function TeamsComponent() {
    }
    TeamsComponent.prototype.ngOnInit = function () {
    };
    TeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.css */ "./src/app/teams/teams.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamsComponent);
    return TeamsComponent;
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
    production: false,
    apiUrl: 'http://localhost:5000/api/'
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

module.exports = __webpack_require__(/*! C:\MAREK\Nauka\NaAfere\NaAfere-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map