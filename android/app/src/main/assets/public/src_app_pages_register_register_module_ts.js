"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./register.page.html */ 2004);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 9917);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);






let RegisterPage = class RegisterPage {
    constructor(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.userData = [];
    }
    loginPage() {
        this.router.navigate(['login']);
    }
    ngOnInit() {
    }
    onSignup(form) {
        const data = {
            id: null,
            username: form.value.Username,
            email: form.value.Email,
            password: form.value.Password,
            verifyToken: '',
            passwordToken: '',
            wallets: []
        };
        if (form.invalid) {
            return;
        }
        this.userData.push(data);
        this.authSrv.createUser(data);
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 2004:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/register/register.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"mainbackground\">\r\n  <div class=\"form-box\">\r\n    <div class=\"logo\">\r\n      <img src=\"../../../assets/images/logoicon.svg\" class=\"w-100\" />\r\n    </div>\r\n    <div class=\"title\">Sign Up With Social</div>\r\n\r\n    <ul class=\"social\">\r\n      <li>\r\n        <a><i class=\"fab fa-facebook-f\"></i></a>\r\n      </li>\r\n      <li>\r\n        <a><i class=\"fab fa-twitter\"></i></a>\r\n      </li>\r\n      <li>\r\n        <a><i class=\"fab fa-linkedin-in\"></i></a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"or\">OR</div>\r\n\r\n\r\n    <form #form=\"ngForm\" (ngSubmit)=\"onSignup(form)\">\r\n      <div class=\"form-group\">\r\n        <input ngModel\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          id=\"username\"\r\n          #nameInput=\"ngModel\"\r\n          placeholder=\"Username\"\r\n          name=\"Username\"\r\n          required=\"true\"\r\n        />\r\n        <p *ngIf=nameInput.invalid class=\"inputwarnings\" style=\"margin-left: 11px;\">This field is required</p>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input ngModel\r\n          type=\"email\"\r\n          class=\"form-control\"\r\n          id=\"email\"\r\n          placeholder=\"Email\"\r\n          name=\"Email\"\r\n          #emailInput = \"ngModel\"\r\n          required=\"true\"\r\n        />\r\n        <p *ngIf=emailInput.invalid class=\"inputwarnings\" style=\"margin-left: 11px;\"> Please enter a valid email address</p>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input ngModel\r\n          type=\"password\"\r\n          class=\"form-control\"\r\n          id=\"password\"\r\n          #passwordInput=\"ngModel\"\r\n          placeholder=\"Password\"\r\n          name=\"Password\"\r\n          required=\"true\"\r\n          minlength=\"8\"\r\n        />\r\n        <p *ngIf=passwordInput.invalid class=\"inputwarnings\" style=\"margin-left: 11px;\">Input at leat 8 characters</p>\r\n      </div>\r\n      <button type=\"submit\" class=\"theme btn btn-primary\">Sign Up</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"footer-link\">\r\n    You have account? <a (click)=\"loginPage()\">Sign In</a>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 9917:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".form-box {\n  width: 300px;\n  margin: auto;\n  height: 500px;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.form-box .logo {\n  width: 60px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #FFF;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.social {\n  margin: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 0px;\n  list-style: none;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\nul.social li {\n  display: inline-block;\n  margin-right: 10px;\n}\n\nul.social li a {\n  display: block;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #CCC;\n  line-height: 40px;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\nul.social li:first-child a {\n  background: #4267B2;\n  border: 0px;\n  color: #FFF;\n}\n\nul.social li:nth-child(2) a {\n  background: #00ACAA;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li:last-child a {\n  background: #0E76A8;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li a:hover {\n  opacity: 0.8;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #EEE;\n}\n\n.form-box .forgot a {\n  text-align: center;\n  font-size: 14px;\n  color: #FFF;\n  opacity: 0.8;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFF;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n\n.inputwarnings {\n  font-size: 10px;\n  font-style: italic;\n  color: rgba(241, 151, 15, 0.979);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGQTs7QUFLQTtFQUVBLFdBQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDSixZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIQTs7QUFLQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFJQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFERDs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7QUFHSjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUlKOztBQUZBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDSCxxQkFBQTtBQUtEOztBQUhBO0VBQ0ksY0FBQTtBQU1KOztBQUpBO0VBRUcsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU1IOztBQUhBO0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUtGOztBQUhBO0VBRUcsY0FBQTtBQUtIOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFLRiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tYm94XHJcbntcclxuICB3aWR0aDozMDBweDtcclxuICBtYXJnaW46YXV0bztcclxuICBoZWlnaHQ6NTAwcHg7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjBweDtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6MHB4O1xyXG4gIHJpZ2h0OjBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uZm9ybS1ib3ggLmxvZ29cclxue1xyXG4gIHdpZHRoOjYwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi50aXRsZVxyXG57XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbmNvbG9yOiNGRkY7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo2MDA7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLXRvcDoxNXB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWxcclxue1xyXG5tYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxucGFkZGluZzogMHB4O1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbm1hcmdpbi10b3A6IDE1cHg7XHJcbm1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxudWwuc29jaWFsIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG51bC5zb2NpYWwgbGkgYSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDQwcHg7XHJcblx0aGVpZ2h0OiA0MHB4O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xyXG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRmb250LXNpemU6IDE0cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbnVsLnNvY2lhbCBsaTpmaXJzdC1jaGlsZCBhIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MjY3QjI7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcbnVsLnNvY2lhbCBsaTpudGgtY2hpbGQoMikgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBBQ0FBO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4uZm9ybS1ib3ggdWwuc29jaWFsIGxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxufVxyXG4uZm9ybS1ib3ggdWwuc29jaWFsIGxpIGE6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5mb3JtLWJveCAub3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNFRUU7XHJcbn1cclxuLmZvcm0tYm94IC5mb3Jnb3QgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZm9ybS1ib3ggLmZvcmdvdCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjRUIwMDFCO1xyXG59XHJcbi5mb290ZXItbGlua1xyXG57XHJcbiAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICBmb250LXdlaWdodDo0MDA7XHJcbiAgIGNvbG9yOiNGRkY7XHJcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgYm90dG9tOjIwcHg7XHJcbiAgIGxlZnQ6MHB4O1xyXG4gICByaWdodDowcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayBhXHJcbntcclxuICBjb2xvcjojYmUyNjIzO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5mb290ZXItbGluayBhOmhvdmVyXHJcbntcclxuICAgY29sb3I6I2Y3OWUxYjtcclxufVxyXG5cclxuLmlucHV0d2FybmluZ3N7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogcmdiYSgyNDEsIDE1MSwgMTUsIDAuOTc5KTtcclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map