"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_walkthrough_walkthrough_module_ts"],{

/***/ 5054:
/*!*****************************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalkthroughPageRoutingModule": () => (/* binding */ WalkthroughPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./walkthrough.page */ 2847);




const routes = [
    {
        path: '',
        component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_0__.WalkthroughPage
    }
];
let WalkthroughPageRoutingModule = class WalkthroughPageRoutingModule {
};
WalkthroughPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WalkthroughPageRoutingModule);



/***/ }),

/***/ 2520:
/*!*********************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalkthroughPageModule": () => (/* binding */ WalkthroughPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./walkthrough-routing.module */ 5054);
/* harmony import */ var _walkthrough_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walkthrough.page */ 2847);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ 1111);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);








let WalkthroughPageModule = class WalkthroughPageModule {
};
WalkthroughPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.OwlModule,
            _walkthrough_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalkthroughPageRoutingModule
        ],
        declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_1__.WalkthroughPage]
    })
], WalkthroughPageModule);



/***/ }),

/***/ 2847:
/*!*******************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalkthroughPage": () => (/* binding */ WalkthroughPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_walkthrough_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./walkthrough.page.html */ 2473);
/* harmony import */ var _walkthrough_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./walkthrough.page.scss */ 2486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);





let WalkthroughPage = class WalkthroughPage {
    constructor(router) {
        this.router = router;
        this.mySlideOptions = { items: 1, dots: true, margin: 30, center: true, loop: true, };
    }
    loginPage() {
        this.router.navigate(['login']);
    }
    ngOnInit() {
    }
};
WalkthroughPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WalkthroughPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-walkthrough',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_walkthrough_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_walkthrough_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], WalkthroughPage);



/***/ }),

/***/ 2473:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/walkthrough/walkthrough.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"mainbackground\">\r\n  <div class=\"logo\">\r\n    <div class=\"logo-box\">\r\n      <div class=\"icon\">\r\n        <img src=\"../../../assets/images/logoicon.svg\" class=\"w-100\" />\r\n      </div>\r\n      <div class=\"name\">OnoTrade</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"walkthrough-slider\">\r\n    <owl-carousel [options]=\"mySlideOptions\" class=\"owl-theme\">\r\n      <div class=\"item\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../../assets/images/icon1.svg\" class=\"w-100 h-100\" />\r\n        </div>\r\n        <div class=\"slider-title\">Don't share password</div>\r\n        <p class=\"slider-description\">\r\n          Use strong combonations of letters, numbers and special characters to\r\n          make your password.\r\n        </p>\r\n      </div>\r\n      <div class=\"item\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../../assets/images/icon2.svg\" class=\"w-100 h-100\" />\r\n        </div>\r\n        <div class=\"slider-title\">Forgot PIN?</div>\r\n        <p class=\"slider-description\">\r\n          Don't take too much tension about PIN. Just make one call to bank and\r\n          change your pin.\r\n        </p>\r\n      </div>\r\n      <div class=\"item\">\r\n        <div class=\"icon\">\r\n          <img src=\"../../../assets/images/icon3.svg\" class=\"w-100 h-100\" />\r\n        </div>\r\n        <div class=\"slider-title\">Manage Account</div>\r\n        <p class=\"slider-description\">\r\n          Bank account make more secure keeping transaction active and changing\r\n          password regularly.\r\n        </p>\r\n      </div>\r\n    </owl-carousel>\r\n  </div>\r\n  <div class=\"bottom-btn-box\">\r\n    <a class=\"theme btn btn-primary\" (click)=\"loginPage()\">Get Started</a>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 2486:
/*!*********************************************************!*\
  !*** ./src/app/pages/walkthrough/walkthrough.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "/*\n* ----------------------------------------------------------------------------------------\n*  Walkthrough screen\n* ----------------------------------------------------------------------------------------\n*/\n.logo {\n  position: relative;\n  width: 200px;\n  margin-top: 50px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.logo .icon {\n  width: 35px;\n  display: inline-block;\n  vertical-align: middle;\n}\n.logo .name {\n  font-size: 24px;\n  font-weight: 900;\n  color: #FFF;\n  display: inline-block;\n  margin-left: 10px;\n  vertical-align: middle;\n}\n.walkthrough-slider {\n  position: absolute;\n  top: 22%;\n  left: 0px;\n  right: 0px;\n}\n.walkthrough-slider .item {\n  text-align: center;\n  padding: 30px;\n}\n.walkthrough-slider .item .icon {\n  width: 200px;\n  height: 200px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.walkthrough-slider .item .slider-title {\n  font-size: 16px;\n  color: #FFF;\n  font-weight: 700;\n  margin-top: 15px;\n  margin-bottom: 5px;\n}\n.walkthrough-slider .item .slider-description {\n  font-size: 14px;\n  font-weight: 500;\n  opacity: 0.7;\n  color: #FFF;\n}\n.bottom-btn-box {\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGt0aHJvdWdoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUFBO0FBTUE7RUFFQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFERDtBQUdBO0VBRUUsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFERjtBQUlBO0VBRUcsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUZIO0FBTUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUpBO0FBTUE7RUFFRSxrQkFBQTtFQUNBLGFBQUE7QUFKRjtBQU9BO0VBRUcsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTEg7QUFPQTtFQUdDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTkQ7QUFTQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUEE7QUFTQTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFQRiIsImZpbGUiOiJ3YWxrdGhyb3VnaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiAgV2Fsa3Rocm91Z2ggc2NyZWVuXHJcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLmxvZ29cclxue1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0bWFyZ2luLXRvcDogNTBweDtcclxuXHRtYXJnaW4tbGVmdDogYXV0bztcclxuXHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmxvZ28gLmljb25cclxue1xyXG4gIHdpZHRoOjM1cHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbn1cclxuLmxvZ28gLm5hbWVcclxue1xyXG4gICBmb250LXNpemU6MjRweDtcclxuICAgZm9udC13ZWlnaHQ6OTAwO1xyXG4gICBjb2xvcjojRkZGO1xyXG4gICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbn1cclxuXHJcbi53YWxrdGhyb3VnaC1zbGlkZXJcclxue1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbnRvcDogMjIlO1xyXG5sZWZ0OiAwcHg7XHJcbnJpZ2h0OiAwcHg7XHJcbn1cclxuLndhbGt0aHJvdWdoLXNsaWRlciAuaXRlbVxyXG57XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZzozMHB4O1xyXG59XHJcblxyXG4ud2Fsa3Rocm91Z2gtc2xpZGVyIC5pdGVtIC5pY29uXHJcbntcclxuICAgd2lkdGg6MjAwcHg7XHJcbiAgIGhlaWdodDoyMDBweDtcclxuICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbn1cclxuLndhbGt0aHJvdWdoLXNsaWRlciAuaXRlbSAuc2xpZGVyLXRpdGxlXHJcbntcclxuXHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGNvbG9yOiAjRkZGO1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0bWFyZ2luLXRvcDogMTVweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHg7XHJcblxyXG59XHJcbi53YWxrdGhyb3VnaC1zbGlkZXIgLml0ZW0gLnNsaWRlci1kZXNjcmlwdGlvblxyXG57XHJcbmZvbnQtc2l6ZToxNHB4O1xyXG5mb250LXdlaWdodDo1MDA7XHJcbm9wYWNpdHk6MC43O1xyXG5jb2xvcjojRkZGO1xyXG59XHJcbi5ib3R0b20tYnRuLWJveFxyXG57XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm90dG9tOjUwcHg7XHJcbiAgbGVmdDowcHg7XHJcbiAgcmlnaHQ6MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_walkthrough_walkthrough_module_ts.js.map