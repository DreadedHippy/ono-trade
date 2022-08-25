"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 7230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 2032);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);







let LoginPage = class LoginPage {
    constructor(router, alertSrv, authService) {
        this.router = router;
        this.alertSrv = alertSrv;
        this.authService = authService;
        this.title = '';
        this.isLoading = false;
    }
    ngOnInit() {
        this.title = 'LOGIN';
        this.user = false;
        // this.id = process.env.CLIENT_ID;
    }
    onLogin(form) {
        const data = {
            email: form.value.email,
            password: form.value.password
        };
        if (form.invalid) {
            this.error();
            return;
        }
        this.authService.login(data);
    }
    registerPage() {
        this.router.navigate(['register']);
    }
    forgotpasswordPage() {
        this.router.navigate(['forgotpassword']);
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    error() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.alertSrv.toast('Invalid Email/Password', 3000);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"mainbackground\">\r\n<div class=\"form-box\">\r\n\r\n  <div class=\"logo\"><img src=\"../../../assets/images/logoicon.svg\" class=\"w-100\"></div>\r\n  <div class=\"title\">Sign In With Social</div>\r\n\r\n  <ul class=\"social\">\r\n  <li><a><i class=\"fab fa-facebook-f\"></i></a></li>\r\n  <li><a><i class=\"fab fa-twitter\"></i></a></li>\r\n  <li><a><i class=\"fab fa-linkedin-in\"></i></a></li>\r\n  </ul>\r\n  <div class=\"or\">OR</div>\r\n  <form #form=\"ngForm\" (ngSubmit)=\"onLogin(form)\" *ngIf=\"!isLoading\">\r\n    <div class=\"form-group\">\r\n      <input type=\"email\"\r\n        class=\"form-control\"\r\n        id=\"username\" placeholder=\"Email\"\r\n        ngModel name=\"email\" #emailInput=\"ngModel\" required=\"true\" ionFocus=\"focus()\" email>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <input type=\"password\" class=\"form-control\" id=\"password\"\r\n        placeholder=\"Password\" name=\"password\" required=\"true\"\r\n        ngModel #passwordInput=\"ngModel\" minlength=\"8\">\r\n    </div>\r\n      <button type=\"submit\" class=\"theme btn btn-primary\">Sign In</button>\r\n      <div class=\"forgot\"> <a (click)=\"forgotpasswordPage()\">Forgot your password?</a></div>\r\n  </form>\r\n</div>\r\n<div class=\"footer-link\" *ngIf=\"!isLoading\"> Don't have account? <a (click)=\"registerPage()\">Sign up</a></div>\r\n<ion-spinner *ngIf=\"isLoading\"></ion-spinner>\r\n</ion-content>\r\n");

/***/ }),

/***/ 2032:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".form-box {\n  width: 300px;\n  margin: auto;\n  height: 450px;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.form-box .logo {\n  width: 60px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #FFF;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.social {\n  margin: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 0px;\n  list-style: none;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\nul.social li {\n  display: inline-block;\n  margin-right: 10px;\n}\n\nul.social li a {\n  display: block;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #CCC;\n  line-height: 40px;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\nul.social li:first-child a {\n  background: #4267B2;\n  border: 0px;\n  color: #FFF;\n}\n\nul.social li:nth-child(2) a {\n  background: #00ACAA;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li:last-child a {\n  background: #0E76A8;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li a:hover {\n  opacity: 0.8;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #EEE;\n}\n\n.form-box .forgot a {\n  text-align: center;\n  font-size: 14px;\n  color: #FFF;\n  opacity: 0.8;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFF;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGQTs7QUFLQTtFQUVBLFdBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDSixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIQTs7QUFLQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFERDs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDSCxxQkFBQTtBQUtEOztBQUhBO0VBQ0ksY0FBQTtBQU1KOztBQUpBO0VBRUcsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU1IOztBQUhBO0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUhBO0VBRUcsY0FBQTtBQUtIIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9ybS1ib3hcclxue1xyXG4gIHdpZHRoOjMwMHB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGhlaWdodDo0NTBweDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MHB4O1xyXG4gIGJvdHRvbTowcHg7XHJcbiAgbGVmdDowcHg7XHJcbiAgcmlnaHQ6MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5mb3JtLWJveCAubG9nb1xyXG57XHJcbiAgd2lkdGg6NjBweDtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuLnRpdGxlXHJcbntcclxudmVydGljYWwtYWxpZ246IHRvcDtcclxuY29sb3I6I0ZGRjtcclxuZm9udC1zaXplOjE2cHg7XHJcbmZvbnQtd2VpZ2h0OjYwMDtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5tYXJnaW4tdG9wOjE1cHg7XHJcbm1hcmdpbi1ib3R0b206MjBweDtcclxufVxyXG5cclxuLnNvY2lhbCBcclxue1xyXG5tYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxucGFkZGluZzogMHB4O1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxudWwuc29jaWFsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG51bC5zb2NpYWwgbGkgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnVsLnNvY2lhbCBsaTpmaXJzdC1jaGlsZCBhIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MjY3QjI7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbnVsLnNvY2lhbCBsaTpudGgtY2hpbGQoMikgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBBQ0FBO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4uZm9ybS1ib3ggdWwuc29jaWFsIGxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4uZm9ybS1ib3ggdWwuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5mb3JtLWJveCAub3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNFRUU7XHJcbn1cclxuLmZvcm0tYm94IC5mb3Jnb3QgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZm9ybS1ib3ggLmZvcmdvdCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRUIwMDFCO1xyXG59XHJcbi5mb290ZXItbGlua1xyXG57XHJcbiAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICBmb250LXdlaWdodDo0MDA7XHJcbiAgIGNvbG9yOiNGRkY7XHJcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgYm90dG9tOjIwcHg7XHJcbiAgIGxlZnQ6MHB4O1xyXG4gICByaWdodDowcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayBhXHJcbntcclxuICBjb2xvcjojYmUyNjIzO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5mb290ZXItbGluayBhOmhvdmVyXHJcbntcclxuICAgY29sb3I6I2Y3OWUxYjtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map