"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_transaction_deposit_deposit_module_ts"],{

/***/ 7869:
/*!*********************************************************************!*\
  !*** ./src/app/pages/transaction/deposit/deposit-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositPageRoutingModule": () => (/* binding */ DepositPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _deposit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit.page */ 5181);




const routes = [
    {
        path: '',
        component: _deposit_page__WEBPACK_IMPORTED_MODULE_0__.DepositPage
    }
];
let DepositPageRoutingModule = class DepositPageRoutingModule {
};
DepositPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DepositPageRoutingModule);



/***/ }),

/***/ 505:
/*!*************************************************************!*\
  !*** ./src/app/pages/transaction/deposit/deposit.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositPageModule": () => (/* binding */ DepositPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _deposit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-routing.module */ 7869);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/components.module */ 5642);
/* harmony import */ var _deposit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit.page */ 5181);








let DepositPageModule = class DepositPageModule {
};
DepositPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _deposit_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepositPageRoutingModule
        ],
        declarations: [_deposit_page__WEBPACK_IMPORTED_MODULE_2__.DepositPage]
    })
], DepositPageModule);



/***/ }),

/***/ 5181:
/*!***********************************************************!*\
  !*** ./src/app/pages/transaction/deposit/deposit.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositPage": () => (/* binding */ DepositPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_deposit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./deposit.page.html */ 1488);
/* harmony import */ var _deposit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit.page.scss */ 1696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 926);
/* harmony import */ var src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/transactions.service */ 5495);







let DepositPage = class DepositPage {
    constructor(router, barcodeScanner, transSrv) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.transSrv = transSrv;
        this.deposits = [
            {
                from: 'Adress1',
                date: '13-09-2021',
                amount: 20,
            },
            {
                from: 'Adress2',
                date: '15-10-2021',
                amount: 200
            },
            {
                from: 'Adress3',
                date: '12-11-2021',
                amount: 4600
            }
        ];
    }
    ngOnInit() {
        this.wallet = this.transSrv.depWallet;
        console.log(this.wallet);
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            // success. barcodeData is the data returned by scanner
        }).catch(err => {
            // error
        });
    }
    copyText() {
        navigator.clipboard.writeText(this.wallet.address);
    }
};
DepositPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_3__.TransactionsService }
];
DepositPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-deposit',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_deposit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_deposit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DepositPage);



/***/ }),

/***/ 1488:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/transaction/deposit/deposit.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\n<ion-content class=\"mainbackground\">\n  <app-header></app-header>\n  <div class=\"body\">\n    <div class=\"container\">\n      <div class=\"head-title name\">Wallet: {{wallet.name}}</div>\n      <div class=\"scan-btn\" (click)=\"scanCode()\">\n        <div class=\"icon\">\n          <img src=\"../../../assets/images/qrcode.png\" class=\"w-100\" />\n        </div>\n      </div>\n      <div class=\"or-text\">OR</div>\n      <div class=\"paymentoptions\">\n        <ul>\n          <!-- <li>\n            <a href=\"#\"\n              ><img src=\"../../../assets/images/transfer.svg\" class=\"w-100\"\n            /></a>\n          </li> -->\n          <li>\n            <div class=\"form-group flexContainer\">\n              <input\n                class=\"form-control inputField\" disabled=\"true\"\n                [value]=\"wallet.address\"\n                name=\"Username\" onFocus=\"focus()\">\n            <ion-button (click)=\"copyText()\" class=\"ion-btn\">Copy</ion-button>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"head-title\">\n      <div class=\"container\">Recent Deposits</div>\n    </div>\n    <div class=\"transactionlist\">\n      <div class=\"container\">\n        <div class=\"transactions-box\" *ngFor=\"let deposit of deposits\">\n          <div class=\"left\">\n            <div class=\"icon bg-success\">\n              <img src=\"../../../assets/images/card.svg\" class=\"w-100 card-icon\" />\n            </div>\n          </div>\n          <div class=\"middle\">\n            <div class=\"title\">{{deposit.from}}</div>\n            <div class=\"time\">{{deposit.date}}</div>\n          </div>\n          <div class=\"right\">\n            <div class=\"price text-success\">{{deposit.amount}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ }),

/***/ 1696:
/*!*************************************************************!*\
  !*** ./src/app/pages/transaction/deposit/deposit.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".scan-btn {\n  position: relative;\n  height: 130px;\n}\n\n.scan-btn .icon {\n  width: 50px;\n  margin: auto;\n}\n\n.scan-btn .icon img {\n  position: absolute;\n  width: 50px !important;\n  height: 50px;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n\n.scan-btn .icon:after {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-bottom: 5px solid #007bff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  bottom: 0px;\n}\n\n.scan-btn .icon:before {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-top: 5px solid #007bff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  top: 0px;\n}\n\n.or-text {\n  font-size: 12px;\n  color: #FFF;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.paymentoptions ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  width: 320px;\n  margin: auto;\n}\n\n.paymentoptions ul li {\n  display: inline-block;\n}\n\n.paymentoptions ul li a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n  margin-right: 15px;\n}\n\n.paymentoptions ul li:first-child a {\n  background: rgba(40, 167, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:nth-child(2) a {\n  background: rgba(220, 53, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:last-child a {\n  margin-right: 0px;\n  background: rgba(255, 193, 7, 0.2) !important;\n}\n\n.paymentoptions ul li a:hover img {\n  transform: rotate(180deg);\n}\n\n.paymentoptions ul li a img {\n  width: 20px !important;\n  transition: all 0.3s ease-out 0s;\n}\n\n.flexContainer {\n  display: flex;\n}\n\n.inputField {\n  flex: 1;\n  color: black;\n}\n\n.name {\n  text-align: center;\n  font-size: 20px;\n  border-radius: 3px;\n  background-color: #ff580a;\n  margin-left: 20%;\n  margin-right: 20%;\n}\n\n.ion-btn {\n  --background: #f79e1b ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0FBQUE7O0FBRUE7RUFFRyxXQUFBO0VBQ0EsWUFBQTtBQUFIOztBQUVBO0VBR0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUREOztBQUlBO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUlBO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsUUFBQTtBQUZGOztBQUlBO0VBRUUsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEY7O0FBS0E7RUFFRSxxQkFBQTtBQUhGOztBQUtBO0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtFO0VBRUEsNkNBQUE7QUFIRjs7QUFNRztFQUVBLDZDQUFBO0FBSkg7O0FBTUU7RUFFRyxpQkFBQTtFQUVGLDZDQUFBO0FBTEg7O0FBT0c7RUFFRSx5QkFBQTtBQUxMOztBQU9BO0VBRUcsc0JBQUE7RUFDQSxnQ0FBQTtBQUxIOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTEY7O0FBU0E7RUFDRSxzQkFBQTtBQU5GIiwiZmlsZSI6ImRlcG9zaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYW4tYnRuXG57XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5oZWlnaHQ6IDEzMHB4O1xufVxuLnNjYW4tYnRuIC5pY29uXG57XG4gICB3aWR0aDo1MHB4O1xuICAgbWFyZ2luOmF1dG87XG59XG4uc2Nhbi1idG4gLmljb24gaW1nXG57XG5cblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHRvcDogMHB4O1xuXHRib3R0b206IDBweDtcblx0bGVmdDogMHB4O1xuXHRyaWdodDogMHB4O1xuXHRtYXJnaW46IGF1dG87XG5cbn1cbi5zY2FuLWJ0biAuaWNvbjphZnRlclxue1xuICBjb250ZW50OlwiXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoyMDBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIGxlZnQ6MHB4O1xuICByaWdodDowcHg7XG4gIG1hcmdpbjphdXRvO1xuICBib3JkZXItbGVmdDo1cHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLXJpZ2h0OjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjE1cHg7XG4gIGJvdHRvbTowcHg7XG59XG4uc2Nhbi1idG4gLmljb246YmVmb3JlXG57XG4gIGNvbnRlbnQ6XCJcIjtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjIwMHB4O1xuICBoZWlnaHQ6NTBweDtcbiAgbGVmdDowcHg7XG4gIHJpZ2h0OjBweDtcbiAgbWFyZ2luOmF1dG87XG4gIGJvcmRlci1sZWZ0OjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItcmlnaHQ6NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci10b3A6NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTVweDtcbiAgdG9wOjBweDtcbn1cbi5vci10ZXh0XG57XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBjb2xvcjojRkZGO1xuICBmb250LXdlaWdodDo3MDA7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tdG9wOjE1cHg7XG4gIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLnBheW1lbnRvcHRpb25zIHVsXG57XG4gIG1hcmdpbjowcHg7XG4gIHBhZGRpbmc6MHB4O1xuICBsaXN0LXN0eWxlOm5vbmU7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOmF1dG87XG59XG4ucGF5bWVudG9wdGlvbnMgdWwgbGlcbntcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG4ucGF5bWVudG9wdGlvbnMgdWwgbGkgYVxue1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIGxpbmUtaGVpZ2h0OjUwcHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIG1hcmdpbi1yaWdodDoxNXB4O1xuICB9XG4gIC5wYXltZW50b3B0aW9ucyB1bCBsaTpmaXJzdC1jaGlsZCBhXG4gIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwwLjIpICFpbXBvcnRhbnQ7XG5cbiAgfVxuICAgLnBheW1lbnRvcHRpb25zIHVsIGxpOm50aC1jaGlsZCgyKSBhXG4gIHtcbiAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksMC4yKSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYXltZW50b3B0aW9ucyB1bCBsaTpsYXN0LWNoaWxkIGFcbiAge1xuICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xuXG5cdCAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywwLjIpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIC5wYXltZW50b3B0aW9ucyB1bCBsaSBhOmhvdmVyIGltZ1xuICAge1xuICAgICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7XG4gICB9XG4ucGF5bWVudG9wdGlvbnMgdWwgbGkgYSBpbWdcbntcbiAgIHdpZHRoOjIwcHggIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xufVxuXG4uZmxleENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgZmxleDogMTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgODgsIDEwKTtcbiAgbWFyZ2luLWxlZnQ6IDIwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMCU7XG5cbn1cblxuLmlvbi1idG4ge1xuICAtLWJhY2tncm91bmQ6ICNmNzllMWJcbn1cbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transaction_deposit_deposit_module_ts.js.map