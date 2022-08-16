"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_feedback_feedback_module_ts"],{

/***/ 34:
/*!***********************************************************!*\
  !*** ./src/app/pages/feedback/feedback-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPageRoutingModule": () => (/* binding */ FeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.page */ 1106);




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_0__.FeedbackPage
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ 7792:
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPageModule": () => (/* binding */ FeedbackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-routing.module */ 34);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page */ 1106);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedbackPageRoutingModule
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_1__.FeedbackPage]
    })
], FeedbackPageModule);



/***/ }),

/***/ 1106:
/*!*************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPage": () => (/* binding */ FeedbackPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./feedback.page.html */ 1574);
/* harmony import */ var _feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page.scss */ 7099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);





let FeedbackPage = class FeedbackPage {
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
FeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FeedbackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-feedback',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_feedback_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_feedback_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedbackPage);



/***/ }),

/***/ 1574:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/feedback/feedback.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content  class=\"mainbackground\">\r\n<div class=\"container\">\r\n<div class=\"header\">\r\n<div class=\"row\">\r\n<div class=\"col-8\"><div class=\"title\"><a (click)=\"settingsPage()\" class=\"back-btn\"><i class=\"fas fa-angle-left\" ></i></a> Feedback</div>\r\n</div>\r\n<div class=\"col-4 text-right\"><a class=\"pulse-animation notification-btn\" (click)=\"notificationsPage()\"><i class=\"far fa-bell\"></i></a> <div class=\"profile-pic\" (click)=\"profilePage()\"><img src=\"../../../assets/images/user-profile.jpg\" class=\"width-100\"/></div></div>\r\n</div>\r\n</div>\r\n<div class=\"body\">\r\n<div class=\"feedback\">\r\n<div class=\"title\">Rate This App</div>\r\n<p>We waiting for your valuable feedback.Please rate our app</p>\r\n<div class=\"rating\">\r\n<i class=\"fa fa-star\"></i>\r\n<i class=\"fa fa-star\"></i>\r\n<i class=\"fa fa-star\"></i>\r\n<i class=\"fa fa-star\"></i>\r\n<i class=\"fa fa-star\"></i>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n\r\n");

/***/ }),

/***/ 7099:
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWVkYmFjay5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feedback_feedback_module_ts.js.map