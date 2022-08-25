"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_changepassword_changepassword_module_ts"],{

/***/ 5299:
/*!***********************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPageRoutingModule": () => (/* binding */ ChangepasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword.page */ 7963);




const routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_0__.ChangepasswordPage
    }
];
let ChangepasswordPageRoutingModule = class ChangepasswordPageRoutingModule {
};
ChangepasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangepasswordPageRoutingModule);



/***/ }),

/***/ 8142:
/*!***************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPageModule": () => (/* binding */ ChangepasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepassword-routing.module */ 5299);
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.page */ 7963);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let ChangepasswordPageModule = class ChangepasswordPageModule {
};
ChangepasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangepasswordPageRoutingModule
        ],
        declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_1__.ChangepasswordPage]
    })
], ChangepasswordPageModule);



/***/ }),

/***/ 7963:
/*!*************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangepasswordPage": () => (/* binding */ ChangepasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_changepassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./changepassword.page.html */ 4839);
/* harmony import */ var _changepassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepassword.page.scss */ 5739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);





let ChangepasswordPage = class ChangepasswordPage {
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
ChangepasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ChangepasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-changepassword',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_changepassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_changepassword_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangepasswordPage);



/***/ }),

/***/ 4839:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/changepassword/changepassword.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n  <div class=\"container\">\r\n    <app-header></app-header>\r\n    <div class=\"body\">\r\n      <div class=\"form-page-box\">\r\n        <form>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"password\"\r\n              placeholder=\"Old Password\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"password\"\r\n              placeholder=\"New Password\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <input\r\n              type=\"password\"\r\n              placeholder=\"Confirm Password\"\r\n              class=\"form-control\"\r\n            />\r\n          </div>\r\n          <div class=\"text-center mt-4\">\r\n            <button type=\"submit\" class=\"theme btn btn-primary\">Save</button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 5739:
/*!***************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFuZ2VwYXNzd29yZC5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_changepassword_changepassword_module_ts.js.map