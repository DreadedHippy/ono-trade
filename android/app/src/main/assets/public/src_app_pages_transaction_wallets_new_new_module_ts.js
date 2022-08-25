"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_transaction_wallets_new_new_module_ts"],{

/***/ 5380:
/*!*********************************************************************!*\
  !*** ./src/app/pages/transaction/wallets/new/new-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPageRoutingModule": () => (/* binding */ NewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new.page */ 9921);




const routes = [
    {
        path: '',
        component: _new_page__WEBPACK_IMPORTED_MODULE_0__.NewPage
    }
];
let NewPageRoutingModule = class NewPageRoutingModule {
};
NewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewPageRoutingModule);



/***/ }),

/***/ 9319:
/*!*************************************************************!*\
  !*** ./src/app/pages/transaction/wallets/new/new.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPageModule": () => (/* binding */ NewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _new_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-routing.module */ 5380);
/* harmony import */ var _new_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.page */ 9921);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let NewPageModule = class NewPageModule {
};
NewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _new_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_new_page__WEBPACK_IMPORTED_MODULE_1__.NewPage]
    })
], NewPageModule);



/***/ }),

/***/ 9921:
/*!***********************************************************!*\
  !*** ./src/app/pages/transaction/wallets/new/new.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPage": () => (/* binding */ NewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./new.page.html */ 5421);
/* harmony import */ var _new_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new.page.scss */ 5539);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/transactions.service */ 5495);







let NewPage = class NewPage {
    constructor(alertSrv, transactionsSrv) {
        this.alertSrv = alertSrv;
        this.transactionsSrv = transactionsSrv;
        this.walletInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            walletName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            walletAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            walletCurr: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
        });
    }
    ngOnInit() {
    }
    onCreate() {
        console.log(this.walletInfo.valid);
        if (!this.walletInfo.valid) {
            this.alertSrv.toast('Please fill in all details', 3000);
            return;
        }
        const walletInfo = {
            name: this.walletInfo.get('walletName').value,
            address: this.walletInfo.get('walletAddress').value,
            currency: this.walletInfo.get('walletCurr').value,
            iconSrc: '',
            balance: 0.00,
            transactions: []
        };
        this.transactionsSrv.createWallet(walletInfo);
    }
};
NewPage.ctorParameters = () => [
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_3__.TransactionsService }
];
NewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-new',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_new_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewPage);



/***/ }),

/***/ 5421:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/transaction/wallets/new/new.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\n<ion-content class=\"mainbackground\">\n  <app-header></app-header>\n  <div class=\"body\">\n\n    <div class=\"container\">\n      <div class=\"form-box\">\n        <form (ngSubmit)=\"onCreate()\" [formGroup]=\"walletInfo\">\n          <div class=\"form-group flexContainer\">\n\n            <input type=\"text\"  class=\"form-control\" minlength=\"5\"\n            formControlName=\"walletName\"\n            placeholder=\"Name your wallet\"\n            required=\"true\" ionFocus=\"focus()\">\n          </div>\n\n          <!-- Receiver Info -->\n          <div class=\"form-group flexContainer\">\n            <input type=\"text\" formControlName=\"walletAddress\"\n              placeholder=\"Type in your wallet Adress/Card Number\"\n              class=\"form-control inputField\" required=\"true\" ionFocus=\"focus()\"\n            >\n            <br>\n\n            <ion-select interface=\"popover\"placeholder=\"Currency\"\n            formControlName=\"walletCurr\" style=\"color: white;\">\n              <ion-select-option value=\"usd\">USD</ion-select-option>\n              <ion-select-option value=\"ngn\">NGN</ion-select-option>\n              <ion-select-option value=\"cad\">CAD</ion-select-option>\n              <ion-select-option value=\"eur\">EUR</ion-select-option>\n            </ion-select>\n          </div>\n            <button type=\"submit\" class=\"theme btn btn-primary\">Create Wallet</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ }),

/***/ 5539:
/*!*************************************************************!*\
  !*** ./src/app/pages/transaction/wallets/new/new.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".scan-btn {\n  position: relative;\n  height: 130px;\n}\n\n.scan-btn .icon {\n  width: 50px;\n  margin: auto;\n}\n\n.scan-btn .icon img {\n  position: absolute;\n  width: 50px !important;\n  height: 50px;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n\n.scan-btn .icon:after {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-bottom: 5px solid #007bff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  bottom: 0px;\n}\n\n.scan-btn .icon:before {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-top: 5px solid #007bff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  top: 0px;\n}\n\n.or-text {\n  font-size: 12px;\n  color: #FFF;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.paymentoptions ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  width: 320px;\n  margin: auto;\n}\n\n.paymentoptions ul li {\n  display: inline-block;\n}\n\n.paymentoptions ul li a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n  margin-right: 15px;\n}\n\n.paymentoptions ul li:first-child a {\n  background: rgba(40, 167, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:nth-child(2) a {\n  background: rgba(220, 53, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:last-child a {\n  margin-right: 0px;\n  background: rgba(255, 193, 7, 0.2) !important;\n}\n\n.paymentoptions ul li a:hover img {\n  transform: rotate(180deg);\n}\n\n.paymentoptions ul li a img {\n  width: 20px !important;\n  transition: all 0.3s ease-out 0s;\n}\n\n.flexContainer {\n  display: flex;\n}\n\n.inputField {\n  flex: 3;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.inputFieldTwo {\n  flex: 1;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.ion-btn {\n  --background: #f79e1b ;\n}\n\n.form-box {\n  width: 80%;\n  margin: auto;\n  height: 200px;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.form-box .logo {\n  width: 60px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #FFF;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxrQkFBQTtFQUNBLGFBQUE7QUFBQTs7QUFFQTtFQUVHLFdBQUE7RUFDQSxZQUFBO0FBQUg7O0FBRUE7RUFHQyxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBREQ7O0FBSUE7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBRkY7O0FBSUE7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxRQUFBO0FBRkY7O0FBSUE7RUFFRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUVFLHFCQUFBO0FBSEY7O0FBS0E7RUFFRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0U7RUFFQSw2Q0FBQTtBQUhGOztBQU1HO0VBRUEsNkNBQUE7QUFKSDs7QUFNRTtFQUVHLGlCQUFBO0VBRUYsNkNBQUE7QUFMSDs7QUFPRztFQUVFLHlCQUFBO0FBTEw7O0FBT0E7RUFFRyxzQkFBQTtFQUNBLGdDQUFBO0FBTEg7O0FBUUE7RUFDRSxhQUFBO0FBTEY7O0FBUUE7RUFDRSxPQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtBQUxGOztBQVFBO0VBQ0UsT0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7QUFMRjs7QUFRQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFMRjs7QUFRQTtFQUNFLHNCQUFBO0FBTEY7O0FBU0E7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFFQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFSRjs7QUFVQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0FBUkY7O0FBV0E7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVRBIiwiZmlsZSI6Im5ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nhbi1idG5cbntcbnBvc2l0aW9uOiByZWxhdGl2ZTtcbmhlaWdodDogMTMwcHg7XG59XG4uc2Nhbi1idG4gLmljb25cbntcbiAgIHdpZHRoOjUwcHg7XG4gICBtYXJnaW46YXV0bztcbn1cbi5zY2FuLWJ0biAuaWNvbiBpbWdcbntcblxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG5cdGhlaWdodDogNTBweDtcblx0dG9wOiAwcHg7XG5cdGJvdHRvbTogMHB4O1xuXHRsZWZ0OiAwcHg7XG5cdHJpZ2h0OiAwcHg7XG5cdG1hcmdpbjogYXV0bztcblxufVxuLnNjYW4tYnRuIC5pY29uOmFmdGVyXG57XG4gIGNvbnRlbnQ6XCJcIjtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjIwMHB4O1xuICBoZWlnaHQ6NTBweDtcbiAgbGVmdDowcHg7XG4gIHJpZ2h0OjBweDtcbiAgbWFyZ2luOmF1dG87XG4gIGJvcmRlci1sZWZ0OjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItcmlnaHQ6NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci1ib3R0b206NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MTVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTVweDtcbiAgYm90dG9tOjBweDtcbn1cbi5zY2FuLWJ0biAuaWNvbjpiZWZvcmVcbntcbiAgY29udGVudDpcIlwiO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6MjAwcHg7XG4gIGhlaWdodDo1MHB4O1xuICBsZWZ0OjBweDtcbiAgcmlnaHQ6MHB4O1xuICBtYXJnaW46YXV0bztcbiAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci1yaWdodDo1cHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLXRvcDo1cHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czoxNXB4O1xuICB0b3A6MHB4O1xufVxuLm9yLXRleHRcbntcbiAgZm9udC1zaXplOjEycHg7XG4gIGNvbG9yOiNGRkY7XG4gIGZvbnQtd2VpZ2h0OjcwMDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIG1hcmdpbi10b3A6MTVweDtcbiAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuXG4ucGF5bWVudG9wdGlvbnMgdWxcbntcbiAgbWFyZ2luOjBweDtcbiAgcGFkZGluZzowcHg7XG4gIGxpc3Qtc3R5bGU6bm9uZTtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46YXV0bztcbn1cbi5wYXltZW50b3B0aW9ucyB1bCBsaVxue1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbi5wYXltZW50b3B0aW9ucyB1bCBsaSBhXG57XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6NTBweDtcbiAgbGluZS1oZWlnaHQ6NTBweDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGJhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICBib3JkZXItcmFkaXVzOjVweDtcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XG4gIH1cbiAgLnBheW1lbnRvcHRpb25zIHVsIGxpOmZpcnN0LWNoaWxkIGFcbiAge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDQwLCAxNjcsIDY5LDAuMikgIWltcG9ydGFudDtcblxuICB9XG4gICAucGF5bWVudG9wdGlvbnMgdWwgbGk6bnRoLWNoaWxkKDIpIGFcbiAge1xuICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDUzLCA2OSwwLjIpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnBheW1lbnRvcHRpb25zIHVsIGxpOmxhc3QtY2hpbGQgYVxuICB7XG4gICAgIG1hcmdpbi1yaWdodDowcHg7XG5cblx0ICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkzLCA3LDAuMikgIWltcG9ydGFudDtcbiAgfVxuICAgLnBheW1lbnRvcHRpb25zIHVsIGxpIGE6aG92ZXIgaW1nXG4gICB7XG4gICAgIHRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTtcbiAgIH1cbi5wYXltZW50b3B0aW9ucyB1bCBsaSBhIGltZ1xue1xuICAgd2lkdGg6MjBweCAhaW1wb3J0YW50O1xuICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQgMHM7XG59XG5cbi5mbGV4Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0RmllbGQge1xuICBmbGV4OiAzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xufVxuXG4uaW5wdXRGaWVsZFR3byB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmlvbi1idG4ge1xuICAtLWJhY2tncm91bmQ6ICNmNzllMWJcbn1cblxuXG4uZm9ybS1ib3hcbntcbiAgd2lkdGg6ODAlO1xuICBtYXJnaW46YXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgLy8gcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDowcHg7XG4gIGJvdHRvbTowcHg7XG4gIGxlZnQ6MHB4O1xuICByaWdodDowcHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xufVxuLmZvcm0tYm94IC5sb2dvXG57XG4gIHdpZHRoOjYwcHg7XG4gIG1hcmdpbjphdXRvO1xufVxuXG4udGl0bGVcbntcbnZlcnRpY2FsLWFsaWduOiB0b3A7XG5jb2xvcjojRkZGO1xuZm9udC1zaXplOjE2cHg7XG5mb250LXdlaWdodDo2MDA7XG5wb3NpdGlvbjpyZWxhdGl2ZTtcbnRleHQtYWxpZ246Y2VudGVyO1xubWFyZ2luLXRvcDoxNXB4O1xubWFyZ2luLWJvdHRvbToyMHB4O1xufVxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transaction_wallets_new_new_module_ts.js.map