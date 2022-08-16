"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_payments_payments_module_ts"],{

/***/ 6568:
/*!***********************************************************!*\
  !*** ./src/app/pages/payments/payments-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageRoutingModule": () => (/* binding */ PaymentsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments.page */ 2061);




const routes = [
    {
        path: '',
        component: _payments_page__WEBPACK_IMPORTED_MODULE_0__.PaymentsPage
    }
];
let PaymentsPageRoutingModule = class PaymentsPageRoutingModule {
};
PaymentsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentsPageRoutingModule);



/***/ }),

/***/ 5795:
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPageModule": () => (/* binding */ PaymentsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payments-routing.module */ 6568);
/* harmony import */ var _payments_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page */ 2061);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let PaymentsPageModule = class PaymentsPageModule {
};
PaymentsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _payments_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentsPageRoutingModule
        ],
        declarations: [_payments_page__WEBPACK_IMPORTED_MODULE_1__.PaymentsPage]
    })
], PaymentsPageModule);



/***/ }),

/***/ 2061:
/*!*************************************************!*\
  !*** ./src/app/pages/payments/payments.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentsPage": () => (/* binding */ PaymentsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payments_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./payments.page.html */ 4448);
/* harmony import */ var _payments_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payments.page.scss */ 7804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 926);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);






let PaymentsPage = class PaymentsPage {
    constructor(barcodeScanner, router) {
        this.barcodeScanner = barcodeScanner;
        this.router = router;
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
    ngOnInit() {
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            // success. barcodeData is the data returned by scanner
        }).catch(err => {
            // error
        });
    }
};
PaymentsPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__.BarcodeScanner },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
PaymentsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-payments',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_payments_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payments_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentsPage);



/***/ }),

/***/ 4448:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/payments/payments.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n  <app-header></app-header>\r\n  <div class=\"body\">\r\n    <div class=\"container\">\r\n      <div class=\"scan-btn\" (click)=\"scanCode()\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../../assets/images/qrcode.png\" class=\"w-100\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"or-text\">OR</div>\r\n      <div class=\"paymentoptions\">\r\n        <ul>\r\n          <li>\r\n            <a href=\"#\"\r\n              ><img src=\"../../../assets/images/recharge.svg\" class=\"w-100\"\r\n            /></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"\r\n              ><img src=\"../../../assets/images/transfer.svg\" class=\"w-100\"\r\n            /></a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"\r\n              ><img src=\"../../../assets/images/exchange.svg\" class=\"w-100\"\r\n            /></a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"head-title\">\r\n      <div class=\"container\">Recent Transactions</div>\r\n    </div>\r\n    <div class=\"transactionlist\">\r\n      <div class=\"container\">\r\n        <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-danger\">\r\n              <img src=\"../../../assets/images/mobile.svg\" class=\"w-100\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Mobile recharge</div>\r\n            <div class=\"time\">2 min ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-danger\">-$20</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-success\">\r\n              <img\r\n                src=\"../../../assets/images/card.svg\"\r\n                class=\"w-100 card-icon\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Money back offer</div>\r\n            <div class=\"time\">50 min ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-success\">+$55</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-danger\">\r\n              <img src=\"../../../assets/images/mobile.svg\" class=\"w-100\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Mobile recharge</div>\r\n            <div class=\"time\">1 day ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-danger\">-$100</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 7804:
/*!***************************************************!*\
  !*** ./src/app/pages/payments/payments.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ".scan-btn {\n  position: relative;\n  height: 130px;\n}\n\n.scan-btn .icon {\n  width: 50px;\n  margin: auto;\n}\n\n.scan-btn .icon img {\n  position: absolute;\n  width: 50px !important;\n  height: 50px;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n\n.scan-btn .icon:after {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-bottom: 5px solid #007bff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  bottom: 0px;\n}\n\n.scan-btn .icon:before {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-top: 5px solid #007bff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  top: 0px;\n}\n\n.or-text {\n  font-size: 12px;\n  color: #FFF;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.paymentoptions ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  width: 180px;\n  margin: auto;\n}\n\n.paymentoptions ul li {\n  display: inline-block;\n}\n\n.paymentoptions ul li a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n  margin-right: 15px;\n}\n\n.paymentoptions ul li:first-child a {\n  background: rgba(40, 167, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:nth-child(2) a {\n  background: rgba(220, 53, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:last-child a {\n  margin-right: 0px;\n  background: rgba(255, 193, 7, 0.2) !important;\n}\n\n.paymentoptions ul li a:hover img {\n  transform: rotate(180deg);\n}\n\n.paymentoptions ul li a img {\n  width: 20px !important;\n  transition: all 0.3s ease-out 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVBLGtCQUFBO0VBQ0EsYUFBQTtBQUFBOztBQUVBO0VBRUcsV0FBQTtFQUNBLFlBQUE7QUFBSDs7QUFFQTtFQUdDLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFERDs7QUFJQTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFGRjs7QUFJQTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFFBQUE7QUFGRjs7QUFJQTtFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUhGOztBQUtBO0VBRUUscUJBQUE7QUFIRjs7QUFLQTtFQUVFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFLRTtFQUVBLDZDQUFBO0FBSEY7O0FBTUc7RUFFQSw2Q0FBQTtBQUpIOztBQU1FO0VBRUcsaUJBQUE7RUFFRiw2Q0FBQTtBQUxIOztBQU9HO0VBRUUseUJBQUE7QUFMTDs7QUFPQTtFQUVHLHNCQUFBO0VBQ0EsZ0NBQUE7QUFMSCIsImZpbGUiOiJwYXltZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nhbi1idG5cclxue1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmhlaWdodDogMTMwcHg7XHJcbn1cclxuLnNjYW4tYnRuIC5pY29uXHJcbntcclxuICAgd2lkdGg6NTBweDtcclxuICAgbWFyZ2luOmF1dG87XHJcbn1cclxuLnNjYW4tYnRuIC5pY29uIGltZ1xyXG57XHJcblxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG5cdGhlaWdodDogNTBweDtcclxuXHR0b3A6IDBweDtcclxuXHRib3R0b206IDBweDtcclxuXHRsZWZ0OiAwcHg7XHJcblx0cmlnaHQ6IDBweDtcclxuXHRtYXJnaW46IGF1dG87XHJcblxyXG59XHJcbi5zY2FuLWJ0biAuaWNvbjphZnRlclxyXG57XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOjIwMHB4O1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIGxlZnQ6MHB4O1xyXG4gIHJpZ2h0OjBweDtcclxuICBtYXJnaW46YXV0bztcclxuICBib3JkZXItbGVmdDo1cHggc29saWQgIzAwN2JmZjtcclxuICBib3JkZXItcmlnaHQ6NXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTo1cHggc29saWQgIzAwN2JmZjtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MTVweDtcclxuICBib3R0b206MHB4O1xyXG59XHJcbi5zY2FuLWJ0biAuaWNvbjpiZWZvcmVcclxue1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoyMDBweDtcclxuICBoZWlnaHQ6NTBweDtcclxuICBsZWZ0OjBweDtcclxuICByaWdodDowcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OjVweCBzb2xpZCAjMDA3YmZmO1xyXG4gIGJvcmRlci10b3A6NXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czoxNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjE1cHg7XHJcbiAgdG9wOjBweDtcclxufVxyXG4ub3ItdGV4dFxyXG57XHJcbiAgZm9udC1zaXplOjEycHg7XHJcbiAgY29sb3I6I0ZGRjtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLnBheW1lbnRvcHRpb25zIHVsXHJcbntcclxuICBtYXJnaW46MHB4O1xyXG4gIHBhZGRpbmc6MHB4O1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuLnBheW1lbnRvcHRpb25zIHVsIGxpXHJcbntcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG4ucGF5bWVudG9wdGlvbnMgdWwgbGkgYVxyXG57XHJcbiAgZGlzcGxheTpibG9jaztcclxuICB3aWR0aDo1MHB4O1xyXG4gIGhlaWdodDo1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjUwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgfVxyXG4gIC5wYXltZW50b3B0aW9ucyB1bCBsaTpmaXJzdC1jaGlsZCBhXHJcbiAge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNDAsIDE2NywgNjksMC4yKSAhaW1wb3J0YW50O1xyXG4gXHJcbiAgfVxyXG4gICAucGF5bWVudG9wdGlvbnMgdWwgbGk6bnRoLWNoaWxkKDIpIGFcclxuICB7XHJcbiAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksMC4yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucGF5bWVudG9wdGlvbnMgdWwgbGk6bGFzdC1jaGlsZCBhXHJcbiAge1xyXG4gICAgIG1hcmdpbi1yaWdodDowcHg7XHJcblx0IFxyXG5cdCAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywwLjIpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gICAucGF5bWVudG9wdGlvbnMgdWwgbGkgYTpob3ZlciBpbWdcclxuICAge1xyXG4gICAgIHRyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKTtcclxuICAgfVxyXG4ucGF5bWVudG9wdGlvbnMgdWwgbGkgYSBpbWdcclxue1xyXG4gICB3aWR0aDoyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payments_payments_module_ts.js.map