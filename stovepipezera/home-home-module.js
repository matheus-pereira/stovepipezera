(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-screen {\n    height: 100vh;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    background-color: #3d4146;\n    margin-top: -70px;\n}\n\n.home-forms {\n    width: 100%;\n    max-width: 400px;\n    padding: 15px;\n    margin: auto;\n    color: #fff;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-screen\">\n    <img class=\"img-fluid mx-auto my-5 px-3 d-block\"  src=\"assets/logo-light.png\" alt=\"Stovepipezera\">\n    <div class=\"home-forms\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/home/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.routing.module */ "./src/app/home/home.routing.module.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_4__["SigninComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeRoutingModule"]
            ],
            providers: [
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home.routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/home/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _auth_logged_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/logged.guard */ "./src/app/auth/logged.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        canActivate: [_auth_logged_guard__WEBPACK_IMPORTED_MODULE_5__["LoggedGuard"]],
        children: [
            {
                path: '',
                component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
            },
            {
                path: 'signup',
                component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
            }
        ]
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center font-weight-bold mb-4\">Login</h4>\n\n<form [formGroup]=\"signinForm\" class=\"form mt-3\" (submit)=\"signin()\">\n\t<p class=\"text-center\">Ainda não tem uma conta? <a class=\"text-white font-weight-bold\" [routerLink]=\"['signup']\">Crie a sua!</a></p>\n\n\t<div class=\"form-group\">\n\t\t<input formControlName=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" autofocus>\n\t\t<small\n\t\t\t*ngIf=\"signinForm.touched && signinForm.get('email').errors?.required\"\n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tE-mail é obrigatório.\n\t\t</small>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<input formControlName=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Senha\">\n\t\t<small\n\t\t\t*ngIf=\"signinForm.touched && signinForm.get('password').errors?.required\"\n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tSenha é obrigatória.\n\t\t</small>\n\t</div>\n\n\t<button type=\"submit\" [disabled]=\"signinForm.invalid\" class=\"btn btn-primary btn-block font-weight-bold\">Entrar</button>\n</form>"

/***/ }),

/***/ "./src/app/home/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/user.service */ "./src/app/auth/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(formBuilder, authService, userService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    SigninComponent.prototype.signin = function () {
        var _this = this;
        var email = this.signinForm.get('email').value;
        var password = this.signinForm.get('password').value;
        this.authService
            .signin(email, password)
            .then(function () {
            _this.userService.setUser(email);
            _this.router.navigate(['crm']);
        })
            .catch(function (error) {
            console.log(error);
            alert('Usuário e/ou senha incorreto!');
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/home/signin/signin.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _auth_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/home/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center font-weight-bold mb-4\">Cadastrar conta</h4>\n\n<form [formGroup]=\"signupForm\" class=\"form mt-3\" (submit)=\"signup()\">\n\n\t<div class=\"form-group\">\n\t\t<input formControlName=\"email\" class=\"form-control\" type=\"email\" placeholder=\"E-mail\" (keyup)=\"emailAlreadyInUse = false\">\n\t\t<small\n\t\t\t*ngIf=\"signupForm.get('email').errors?.required\"\n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tE-mail é obrigatório.\n\t\t</small>\n\t\t<small\n\t\t\t*ngIf=\"signupForm.get('email').errors?.email\" \n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tE-mail inválido.\n\t\t</small>\n\t\t<small\n\t\t\t*ngIf=\"emailAlreadyInUse\"\n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tE-mail já está cadastrado.\n\t\t</small>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<input formControlName=\"password\" class=\"form-control\" type=\"password\" placeholder=\"Senha\">\n\t\t<small\n\t\t\t*ngIf=\"signupForm.get('password').errors?.required\"\n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tSenha é obrigatória.\n\t\t</small>\n\t\t<small\n\t\t\t*ngIf=\"signupForm.get('password').errors?.minlength\"\n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tNo mínimo 8 caracteres.\n\t\t</small>\n\t\t<small\n\t\t\t*ngIf=\"signupForm.get('password').errors?.maxlength\"\n\t\t\tclass=\"text-danger d-block mt-2\">\n\t\t\tNo máximo 14 caracteres.\n\t\t</small>\n\t</div>\n\n\t<button type=\"submit\" [disabled]=\"signupForm.invalid\" class=\"btn btn-primary btn-block font-weight-bold\">Cadastrar</button>\n\t\n\t<p class=\"mt-4\">Já tem uma conta? <a class=\"text-white font-weight-bold\" [routerLink]=\"['']\">Acessar</a></p>\n</form>"

/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.emailAlreadyInUse = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]
            ],
            password: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(14)
                ]
            ]
        });
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        var email = this.signupForm.get('email').value;
        var password = this.signupForm.get('password').value;
        this.authService
            .signup(email, password)
            .then(function () { return _this.router.navigate(['']); })
            .catch(function (error) {
            console.log(error);
            _this.emailAlreadyInUse = true;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/home/signup/signup.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map