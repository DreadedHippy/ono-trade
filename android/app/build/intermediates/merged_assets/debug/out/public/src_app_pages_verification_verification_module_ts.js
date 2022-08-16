"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_verification_verification_module_ts"],{

/***/ 4658:
/*!*******************************************************************!*\
  !*** ./src/app/pages/verification/verification-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageRoutingModule": () => (/* binding */ VerificationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification.page */ 840);




const routes = [
    {
        path: '',
        component: _verification_page__WEBPACK_IMPORTED_MODULE_0__.VerificationPage
    }
];
let VerificationPageRoutingModule = class VerificationPageRoutingModule {
};
VerificationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerificationPageRoutingModule);



/***/ }),

/***/ 8692:
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPageModule": () => (/* binding */ VerificationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verification-routing.module */ 4658);
/* harmony import */ var _verification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page */ 840);







let VerificationPageModule = class VerificationPageModule {
};
VerificationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _verification_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerificationPageRoutingModule
        ],
        declarations: [_verification_page__WEBPACK_IMPORTED_MODULE_1__.VerificationPage]
    })
], VerificationPageModule);



/***/ }),

/***/ 840:
/*!*********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationPage": () => (/* binding */ VerificationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./verification.page.html */ 2456);
/* harmony import */ var _verification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verification.page.scss */ 2425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);






let VerificationPage = class VerificationPage {
    constructor(authSrv, route) {
        this.authSrv = authSrv;
        this.route = route;
        this.verified = false;
    }
    ngOnInit() {
        const key = this.route.snapshot.queryParamMap.get('key');
        console.log(key);
        this.authSrv.userverify(key).subscribe(data => {
            this.verified = true;
        }, error => {
            console.log(error);
        });
    }
};
VerificationPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
VerificationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-verification',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_verification_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verification_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerificationPage);



/***/ }),

/***/ 2456:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/verification/verification.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"mainbackground\">\n  <div class=\"form-box\">\n    <div class=\"logo\"><img src=\"../../../assets/images/logoicon.svg\" class=\"w-100\"></div>\n\n    <div class=\"body\">\n      <div class=\"head-title\" *ngIf=\"verified\"><div class=\"container\">Thank you for verifying!</div></div>\n    </div>\n  </div>\n  </ion-content>\n");

/***/ }),

/***/ 2425:
/*!***********************************************************!*\
  !*** ./src/app/pages/verification/verification.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".form-box {\n  width: 300px;\n  margin: auto;\n  height: 450px;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.form-box .logo {\n  width: 60px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #FFF;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.social {\n  margin: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 0px;\n  list-style: none;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\nul.social li {\n  display: inline-block;\n  margin-right: 10px;\n}\n\nul.social li a {\n  display: block;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #CCC;\n  line-height: 40px;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\nul.social li:first-child a {\n  background: #4267B2;\n  border: 0px;\n  color: #FFF;\n}\n\nul.social li:nth-child(2) a {\n  background: #00ACAA;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li:last-child a {\n  background: #0E76A8;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li a:hover {\n  opacity: 0.8;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #EEE;\n}\n\n.form-box .forgot a {\n  text-align: center;\n  font-size: 14px;\n  color: #FFF;\n  opacity: 0.8;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFF;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdBO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkE7O0FBS0E7RUFFQSxXQUFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0osWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSEE7O0FBS0E7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBREQ7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0gscUJBQUE7QUFLRDs7QUFIQTtFQUNJLGNBQUE7QUFNSjs7QUFKQTtFQUVHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFNSDs7QUFIQTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFLRjs7QUFIQTtFQUVHLGNBQUE7QUFLSCIsImZpbGUiOiJ2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9ybS1ib3hcbntcbiAgd2lkdGg6MzAwcHg7XG4gIG1hcmdpbjphdXRvO1xuICBoZWlnaHQ6NDUwcHg7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MHB4O1xuICBib3R0b206MHB4O1xuICBsZWZ0OjBweDtcbiAgcmlnaHQ6MHB4O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5mb3JtLWJveCAubG9nb1xue1xuICB3aWR0aDo2MHB4O1xuICBtYXJnaW46YXV0bztcbn1cblxuLnRpdGxlXG57XG52ZXJ0aWNhbC1hbGlnbjogdG9wO1xuY29sb3I6I0ZGRjtcbmZvbnQtc2l6ZToxNnB4O1xuZm9udC13ZWlnaHQ6NjAwO1xucG9zaXRpb246cmVsYXRpdmU7XG50ZXh0LWFsaWduOmNlbnRlcjtcbm1hcmdpbi10b3A6MTVweDtcbm1hcmdpbi1ib3R0b206MjBweDtcbn1cblxuLnNvY2lhbFxue1xubWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbnBhZGRpbmc6IDBweDtcbmxpc3Qtc3R5bGU6IG5vbmU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5tYXJnaW4tdG9wOiAxNXB4O1xubWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbnVsLnNvY2lhbCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbnVsLnNvY2lhbCBsaSBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgI0NDQztcblx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG51bC5zb2NpYWwgbGk6Zmlyc3QtY2hpbGQgYSB7XG4gICAgYmFja2dyb3VuZDogIzQyNjdCMjtcbiAgICBib3JkZXI6IDBweDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cbnVsLnNvY2lhbCBsaTpudGgtY2hpbGQoMikgYSB7XG4gICAgYmFja2dyb3VuZDogIzAwQUNBQTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cbi5mb3JtLWJveCB1bC5zb2NpYWwgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuLmZvcm0tYm94IHVsLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG4uZm9ybS1ib3ggLm9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNFRUU7XG59XG4uZm9ybS1ib3ggLmZvcmdvdCBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbi5mb3JtLWJveCAuZm9yZ290IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjRUIwMDFCO1xufVxuLmZvb3Rlci1saW5rXG57XG4gICBmb250LXNpemU6MTRweDtcbiAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgIGNvbG9yOiNGRkY7XG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgIHBvc2l0aW9uOmZpeGVkO1xuICAgYm90dG9tOjIwcHg7XG4gICBsZWZ0OjBweDtcbiAgIHJpZ2h0OjBweDtcbn1cblxuLmZvb3Rlci1saW5rIGFcbntcbiAgY29sb3I6I2JlMjYyMztcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmZvb3Rlci1saW5rIGE6aG92ZXJcbntcbiAgIGNvbG9yOiNmNzllMWI7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_verification_verification_module_ts.js.map