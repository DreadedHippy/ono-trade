"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_faqs_faqs_module_ts"],{

/***/ 3463:
/*!***************************************************!*\
  !*** ./src/app/pages/faqs/faqs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageRoutingModule": () => (/* binding */ FaqsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.page */ 2593);




const routes = [
    {
        path: '',
        component: _faqs_page__WEBPACK_IMPORTED_MODULE_0__.FaqsPage
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqsPageRoutingModule);



/***/ }),

/***/ 6392:
/*!*******************************************!*\
  !*** ./src/app/pages/faqs/faqs.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPageModule": () => (/* binding */ FaqsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs-routing.module */ 3463);
/* harmony import */ var _faqs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page */ 2593);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let FaqsPageModule = class FaqsPageModule {
};
FaqsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _faqs_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqsPageRoutingModule
        ],
        declarations: [_faqs_page__WEBPACK_IMPORTED_MODULE_1__.FaqsPage]
    })
], FaqsPageModule);



/***/ }),

/***/ 2593:
/*!*****************************************!*\
  !*** ./src/app/pages/faqs/faqs.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqsPage": () => (/* binding */ FaqsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faqs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./faqs.page.html */ 5352);
/* harmony import */ var _faqs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.page.scss */ 156);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);





let FaqsPage = class FaqsPage {
    constructor(router) {
        this.router = router;
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    notificationsPage() {
        this.router.navigate(['notifications']);
    }
    settingsPage() {
        this.router.navigate(['settings']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    ngOnInit() {
    }
};
FaqsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FaqsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faqs',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faqs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faqs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqsPage);



/***/ }),

/***/ 5352:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/faqs/faqs.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n  <div class=\"container\">\r\n    <app-header></app-header>\r\n    <div class=\"body\">\r\n      <div class=\"theme accordion\" id=\"faqs\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingOne\">\r\n            <h2 class=\"mb-0\">\r\n              <button\r\n                class=\"btn\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#collapseOne\"\r\n                aria-expanded=\"true\"\r\n                aria-controls=\"collapseOne\"\r\n              >\r\n                What is kird? <i class=\"fas fa-angle-up\"></i>\r\n              </button>\r\n            </h2>\r\n          </div>\r\n\r\n          <div\r\n            id=\"collapseOne\"\r\n            class=\"collapse show\"\r\n            aria-labelledby=\"headingOne\"\r\n            data-parent=\"#faqs\"\r\n          >\r\n            <div class=\"card-body\">\r\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\r\n              accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r\n              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\r\n              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\r\n              on it squid single-origin coffee nulla assumenda shoreditch et.\r\n              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\r\n              lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n              aesthetic synth nesciunt you probably haven't heard of them\r\n              accusamus labore sustainable VHS.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingTwo\">\r\n            <h2 class=\"mb-0\">\r\n              <button\r\n                class=\"btn btn-link collapsed\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#collapseTwo\"\r\n                aria-expanded=\"false\"\r\n                aria-controls=\"collapseTwo\"\r\n              >\r\n                What is bank? <i class=\"fas fa-angle-up\"></i>\r\n              </button>\r\n            </h2>\r\n          </div>\r\n          <div\r\n            id=\"collapseTwo\"\r\n            class=\"collapse\"\r\n            aria-labelledby=\"headingTwo\"\r\n            data-parent=\"#faqs\"\r\n          >\r\n            <div class=\"card-body\">\r\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\r\n              accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r\n              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\r\n              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\r\n              on it squid single-origin coffee nulla assumenda shoreditch et.\r\n              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\r\n              lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n              aesthetic synth nesciunt you probably haven't heard of them\r\n              accusamus labore sustainable VHS.\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" id=\"headingThree\">\r\n            <h2 class=\"mb-0\">\r\n              <button\r\n                class=\"btn btn-link collapsed\"\r\n                type=\"button\"\r\n                data-toggle=\"collapse\"\r\n                data-target=\"#collapseThree\"\r\n                aria-expanded=\"false\"\r\n                aria-controls=\"collapseThree\"\r\n              >\r\n                How use app? <i class=\"fas fa-angle-up\"></i>\r\n              </button>\r\n            </h2>\r\n          </div>\r\n          <div\r\n            id=\"collapseThree\"\r\n            class=\"collapse\"\r\n            aria-labelledby=\"headingThree\"\r\n            data-parent=\"#faqs\"\r\n          >\r\n            <div class=\"card-body\">\r\n              Anim pariatur cliche reprehenderit, enim eiusmod high life\r\n              accusamus terry richardson ad squid. 3 wolf moon officia aute, non\r\n              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt\r\n              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird\r\n              on it squid single-origin coffee nulla assumenda shoreditch et.\r\n              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred\r\n              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice\r\n              lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n              aesthetic synth nesciunt you probably haven't heard of them\r\n              accusamus labore sustainable VHS.\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 156:
/*!*******************************************!*\
  !*** ./src/app/pages/faqs/faqs.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXFzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_faqs_faqs_module_ts.js.map