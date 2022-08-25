"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_transaction_wallets_wallets_module_ts"],{

/***/ 7973:
/*!*********************************************************************!*\
  !*** ./src/app/pages/transaction/wallets/wallets-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletsPageRoutingModule": () => (/* binding */ WalletsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _wallets_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallets.page */ 1998);




const routes = [
    {
        path: '',
        component: _wallets_page__WEBPACK_IMPORTED_MODULE_0__.WalletsPage
    },
    {
        path: 'new',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_transaction_wallets_new_new_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./new/new.module */ 9319)).then(m => m.NewPageModule)
    }
];
let WalletsPageRoutingModule = class WalletsPageRoutingModule {
};
WalletsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WalletsPageRoutingModule);



/***/ }),

/***/ 1602:
/*!*************************************************************!*\
  !*** ./src/app/pages/transaction/wallets/wallets.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletsPageModule": () => (/* binding */ WalletsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _wallets_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallets-routing.module */ 7973);
/* harmony import */ var _wallets_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallets.page */ 1998);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);








let WalletsPageModule = class WalletsPageModule {
};
WalletsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _wallets_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletsPageRoutingModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_wallets_page__WEBPACK_IMPORTED_MODULE_1__.WalletsPage]
    })
], WalletsPageModule);



/***/ }),

/***/ 1998:
/*!***********************************************************!*\
  !*** ./src/app/pages/transaction/wallets/wallets.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletsPage": () => (/* binding */ WalletsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallets_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./wallets.page.html */ 3270);
/* harmony import */ var _wallets_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallets.page.scss */ 2058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 926);
/* harmony import */ var src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/transactions.service */ 5495);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! subsink */ 4408);








let WalletsPage = class WalletsPage {
    constructor(router, barcodeScanner, transSrv) {
        this.router = router;
        this.barcodeScanner = barcodeScanner;
        this.transSrv = transSrv;
        this.wallets = [];
        this.isLoading = true;
        this.slowNetwork = false;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_4__.SubSink();
        this.prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    ngOnInit() {
        this.slowConnect();
        this.loadWallets();
    }
    ionViewDidEnter() {
        this.slowConnect();
        this.loadWallets();
    }
    depositPage(wallet) {
        this.transSrv.useWallet(wallet, 'deposit');
    }
    transferPage(wallet) {
        this.transSrv.useWallet(wallet, 'transfer');
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    notificationsPage() {
        this.router.navigate(['notifications']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    loadWallets() {
        this.subs.sink = this.transSrv.fetchWallets().subscribe((data) => {
            this.wallets = data.wallets;
            console.log(data);
            this.slowNetwork = false;
            this.isLoading = false;
        });
    }
    slowConnect() {
        setTimeout(() => {
            this.slowNetwork = true;
        }, 5000);
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            // success. barcodeData is the data returned by scanner
        }).catch(err => {
            // error
        });
    }
    newWallet() {
        this.router.navigate(['wallets/new']);
    }
};
WalletsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_3__.TransactionsService }
];
WalletsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-wallets',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_wallets_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_wallets_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WalletsPage);



/***/ }),

/***/ 3270:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/transaction/wallets/wallets.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\n<ion-content class=\"mainbackground\">\n  <app-header></app-header>\n  <div class=\"body\">\n    <div class=\"head-title\">\n      <div class=\"container\">\n          List of Wallets\n        <ion-button slot=\"end\" size=\"small\" (click)=\"newWallet()\" class=\"b\"><ion-icon name=\"add\"></ion-icon></ion-button>\n      </div>\n    </div>\n\n    <div class=\"transactionslist\">\n      <div class=\"container\">\n        <div class=\"spinner\" *ngIf=\"isLoading\">\n          <ion-spinner color=\"gold-primary\" name=\"bubbles\"></ion-spinner>\n        </div>\n        <div style=\"text-align: center;\">\n          <ion-note *ngIf=\"slowNetwork && isLoading\"> Wallets not loading? Try checking your internet connection</ion-note>\n        </div>\n        <ion-card *ngIf=\"wallets.length < 1 && !isLoading\" style=\"text-align: center;\">\n          <ion-card-header>\n            No wallets found!\n          </ion-card-header>\n          <ion-card-title>Please Create a wallet with the '+' button above</ion-card-title>\n          <ion-card-content>\n            <ion-icon class=\"warnicon\" color=\"warning\" name=\"warning-outline\"></ion-icon>\n          </ion-card-content>\n        </ion-card>\n        <ion-accordion-group color=\"primary\">\n        <ion-accordion *ngFor=\"let wallet of wallets; index as i\" class=\"transactions-box\" style=\"padding-top: 15px;\">\n            <div slot=\"header\">\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"2\">\n                    <div class=\"left\">\n                      <div class=\"icon bg-success\">\n                        <img src=\"../../../assets/images/card.svg\" class=\"w-100 card-icon\" />\n                      </div>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <div class=\"middle\">\n                      <div class=\"title\">{{wallet.name}}</div>\n                      <div class=\"time\">{{wallet.address}}</div>\n                    </div>\n                  </ion-col>\n                  <ion-col size=\"4\">\n                    <div class=\"ion-text-end\">\n                      <div class=\"price text-success\">{{(wallet.balance).toFixed(2)}}</div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </div>\n\n            <ion-list slot=\"content\" inset=\"true\" lines=\" none\">\n              <ion-item>\n                <ion-label>Currency:</ion-label>\n                <span>{{wallet.currency.toUpperCase()}}</span>\n              </ion-item>\n              <ion-item>\n                <ion-label>Address:</ion-label>\n                <span>{{wallet.address}}</span>\n              </ion-item>\n              <ion-item>\n                <ion-label>Last Transaction:</ion-label>\n                <span *ngIf=\"wallet.transactions.length > 0\">\n                  <p>{{wallet.transactions}}</p>\n                  <p>{{wallet.transactions}}</p>\n                  <p style=\"color: yellow;\">{{wallet.transactions}}</p>\n                </span>\n              </ion-item>\n              <ion-item>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col size=\"3\">\n                        <ion-button expand=\"block\" color=\"success\" (click)=\"depositPage(wallet)\">DEPOSIT</ion-button>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                      <ion-button expand=\"block\" color=\"primary\" (click)=\"transferPage(wallet)\">TRANSFER</ion-button>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                      <ion-button expand=\"block\" color=\"tertiary\">BUY</ion-button>\n                    </ion-col>\n                    <ion-col size=\"3\">\n                      <ion-button expand=\"block\" color=\"warning\">SELL</ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n              </ion-item>\n            </ion-list>\n          </ion-accordion>\n        </ion-accordion-group>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<app-footer></app-footer>\n");

/***/ }),

/***/ 2058:
/*!*************************************************************!*\
  !*** ./src/app/pages/transaction/wallets/wallets.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".scan-btn {\n  position: relative;\n  height: 130px;\n}\n\n.scan-btn .icon {\n  width: 50px;\n  margin: auto;\n}\n\n.scan-btn .icon img {\n  position: absolute;\n  width: 50px !important;\n  height: 50px;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n\n.scan-btn .icon:after {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-bottom: 5px solid #007bff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  bottom: 0px;\n}\n\n.scan-btn .icon:before {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-top: 5px solid #007bff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  top: 0px;\n}\n\n.or-text {\n  font-size: 12px;\n  color: #FFF;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.paymentoptions ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  width: 320px;\n  margin: auto;\n}\n\n.paymentoptions ul li {\n  display: inline-block;\n}\n\n.paymentoptions ul li a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n  margin-right: 15px;\n}\n\n.paymentoptions ul li:first-child a {\n  background: rgba(40, 167, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:nth-child(2) a {\n  background: rgba(220, 53, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:last-child a {\n  margin-right: 0px;\n  background: rgba(255, 193, 7, 0.2) !important;\n}\n\n.paymentoptions ul li a:hover img {\n  transform: rotate(180deg);\n}\n\n.paymentoptions ul li a img {\n  width: 20px !important;\n  transition: all 0.3s ease-out 0s;\n}\n\n.flexContainer {\n  display: flex;\n}\n\n.inputField {\n  flex: 1;\n}\n\n.ion-btn {\n  --background: #f79e1b ;\n}\n\n.balance {\n  text-align: right !important;\n}\n\n.depositButton {\n  text-align: right;\n}\n\nion-accordion {\n  cursor: pointer;\n}\n\n.warnicon {\n  font-size: 100px;\n}\n\n.spinner {\n  text-align: center;\n  padding-bottom: 40px;\n  padding-top: 50px;\n}\n\nion-spinner {\n  transform: scale(6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUEsa0JBQUE7RUFDQSxhQUFBO0FBQUE7O0FBRUE7RUFFRyxXQUFBO0VBQ0EsWUFBQTtBQUFIOztBQUVBO0VBR0Msa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUREOztBQUlBO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUZGOztBQUlBO0VBRUUsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsUUFBQTtBQUZGOztBQUlBO0VBRUUsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSEY7O0FBS0E7RUFFRSxxQkFBQTtBQUhGOztBQUtBO0VBRUUsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtFO0VBRUEsNkNBQUE7QUFIRjs7QUFNRztFQUVBLDZDQUFBO0FBSkg7O0FBTUU7RUFFRyxpQkFBQTtFQUVGLDZDQUFBO0FBTEg7O0FBT0c7RUFFRSx5QkFBQTtBQUxMOztBQU9BO0VBRUcsc0JBQUE7RUFDQSxnQ0FBQTtBQUxIOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VBQ0UsT0FBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjs7QUFRQTtFQUNFLDRCQUFBO0FBTEY7O0FBYUE7RUFDRSxpQkFBQTtBQVZGOztBQWFBO0VBQ0UsZUFBQTtBQVZGOztBQWFBO0VBQ0UsZ0JBQUE7QUFWRjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQVZGOztBQWFBO0VBQ0UsbUJBQUE7QUFWRiIsImZpbGUiOiJ3YWxsZXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2FuLWJ0blxue1xucG9zaXRpb246IHJlbGF0aXZlO1xuaGVpZ2h0OiAxMzBweDtcbn1cbi5zY2FuLWJ0biAuaWNvblxue1xuICAgd2lkdGg6NTBweDtcbiAgIG1hcmdpbjphdXRvO1xufVxuLnNjYW4tYnRuIC5pY29uIGltZ1xue1xuXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDUwcHggIWltcG9ydGFudDtcblx0aGVpZ2h0OiA1MHB4O1xuXHR0b3A6IDBweDtcblx0Ym90dG9tOiAwcHg7XG5cdGxlZnQ6IDBweDtcblx0cmlnaHQ6IDBweDtcblx0bWFyZ2luOiBhdXRvO1xuXG59XG4uc2Nhbi1idG4gLmljb246YWZ0ZXJcbntcbiAgY29udGVudDpcIlwiO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgd2lkdGg6MjAwcHg7XG4gIGhlaWdodDo1MHB4O1xuICBsZWZ0OjBweDtcbiAgcmlnaHQ6MHB4O1xuICBtYXJnaW46YXV0bztcbiAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci1yaWdodDo1cHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czoxNXB4O1xuICBib3R0b206MHB4O1xufVxuLnNjYW4tYnRuIC5pY29uOmJlZm9yZVxue1xuICBjb250ZW50OlwiXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoyMDBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIGxlZnQ6MHB4O1xuICByaWdodDowcHg7XG4gIG1hcmdpbjphdXRvO1xuICBib3JkZXItbGVmdDo1cHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLXJpZ2h0OjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItdG9wOjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjE1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjE1cHg7XG4gIHRvcDowcHg7XG59XG4ub3ItdGV4dFxue1xuICBmb250LXNpemU6MTJweDtcbiAgY29sb3I6I0ZGRjtcbiAgZm9udC13ZWlnaHQ6NzAwO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgbWFyZ2luLXRvcDoxNXB4O1xuICBtYXJnaW4tYm90dG9tOjE1cHg7XG59XG5cbi5wYXltZW50b3B0aW9ucyB1bFxue1xuICBtYXJnaW46MHB4O1xuICBwYWRkaW5nOjBweDtcbiAgbGlzdC1zdHlsZTpub25lO1xuICB3aWR0aDogMzIwcHg7XG4gIG1hcmdpbjphdXRvO1xufVxuLnBheW1lbnRvcHRpb25zIHVsIGxpXG57XG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuLnBheW1lbnRvcHRpb25zIHVsIGxpIGFcbntcbiAgZGlzcGxheTpibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDo1MHB4O1xuICBsaW5lLWhlaWdodDo1MHB4O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6NXB4O1xuICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgfVxuICAucGF5bWVudG9wdGlvbnMgdWwgbGk6Zmlyc3QtY2hpbGQgYVxuICB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksMC4yKSAhaW1wb3J0YW50O1xuXG4gIH1cbiAgIC5wYXltZW50b3B0aW9ucyB1bCBsaTpudGgtY2hpbGQoMikgYVxuICB7XG4gICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgNTMsIDY5LDAuMikgIWltcG9ydGFudDtcbiAgfVxuICAucGF5bWVudG9wdGlvbnMgdWwgbGk6bGFzdC1jaGlsZCBhXG4gIHtcbiAgICAgbWFyZ2luLXJpZ2h0OjBweDtcblxuXHQgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxOTMsIDcsMC4yKSAhaW1wb3J0YW50O1xuICB9XG4gICAucGF5bWVudG9wdGlvbnMgdWwgbGkgYTpob3ZlciBpbWdcbiAgIHtcbiAgICAgdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO1xuICAgfVxuLnBheW1lbnRvcHRpb25zIHVsIGxpIGEgaW1nXG57XG4gICB3aWR0aDoyMHB4ICFpbXBvcnRhbnQ7XG4gICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dCAwcztcbn1cblxuLmZsZXhDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXRGaWVsZCB7XG4gIGZsZXg6IDE7XG59XG5cbi5pb24tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjc5ZTFiXG59XG5cbi5iYWxhbmNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLy8gLmFjY29yZHtcbi8vICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuLy8gICAtLWlvbi1pdGVtLWNvbG9yOiB3aGl0ZTtcbi8vIH1cblxuLmRlcG9zaXRCdXR0b257XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pb24tYWNjb3JkaW9ue1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi53YXJuaWNvbntcbiAgZm9udC1zaXplOiAxMDBweDtcbn1cblxuLnNwaW5uZXJ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuXG5pb24tc3Bpbm5lciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoNik7XG59XG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transaction_wallets_wallets_module_ts.js.map