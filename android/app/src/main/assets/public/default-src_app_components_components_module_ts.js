"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["default-src_app_components_components_module_ts"],{

/***/ 5642:
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 9201);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 4662);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3646);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 1864);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule
        ]
    })
], ComponentsModule);



/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 3995);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 1519);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);





let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
        this.url1 = '';
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    paymentsPage() {
        this.router.navigate(['payments']);
    }
    historyPage() {
        this.router.navigate(['history']);
    }
    settingsPage() {
        this.router.navigate(['settings']);
    }
    walletsPage() {
        this.router.navigate(['wallets']);
    }
    ngOnInit() {
        this.url1 = this.router.url;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-footer',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 669);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 1199);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);







let HeaderComponent = class HeaderComponent {
    constructor(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.profilePicSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.staticUrl + localStorage.getItem('imageSrc');
    }
    ngOnInit() {
        this.checkTitle();
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
    checkTitle() {
        const currentUrl = this.router.url;
        switch (currentUrl) {
            case '/wallets/new':
                this.title = 'New Wallet';
                break;
            case '/wallets':
                this.title = 'Wallet';
                break;
            case '/dashboard':
                this.title = 'Dashboard';
                break;
            case '/profile':
                this.title = 'Profile';
                break;
            case '/history':
                this.title = 'History';
                break;
            case '/dashboard':
                this.title = 'Dashboard';
                break;
            case '/payments':
                this.title = 'Payments';
                break;
            case '/transfer':
                this.title = 'Transfer';
                break;
            case '/deposit':
                this.title = 'Deposit';
                break;
            case '/faqs':
                this.title = 'FAQs';
                break;
            case '/settings':
                this.title = 'Settings';
                break;
            case '/changepassword':
                this.title = 'Change Password';
                break;
            default:
                this.title = 'Page';
        }
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-header',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 9201:
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sidebar.component.html */ 141);
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss */ 4300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);






let SidebarComponent = class SidebarComponent {
    constructor(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.url1 = '';
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    paymentsPage() {
        this.router.navigate(['payments']);
    }
    historyPage() {
        this.router.navigate(['history']);
    }
    settingsPage() {
        this.router.navigate(['settings']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    logOut() {
        this.authSrv.logout();
    }
    ngOnInit() {
        this.url1 = this.router.url;
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-sidebar',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SidebarComponent);



/***/ }),

/***/ 3995:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/footer/footer.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div class=\"footer\">\r\n  <ul>\r\n\r\n    <li (click)=\"dashboardPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1 == '/dashboard' ? 'active ' : ''\"\r\n        ><img\r\n          src=\"../../../assets/images/menu-home.svg\"\r\n          class=\"w-100 normal\" /><img\r\n          src=\"../../../assets/images/menu-home-hover.svg\"\r\n          class=\"w-100 hover\"\r\n      /></a>\r\n      <ion-label color=\"dark\">Home</ion-label>\r\n    </li>\r\n    <li (click)=\"paymentsPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1 == '/payments' ? 'active ' : ''\"\r\n        ><img\r\n          src=\"../../../assets/images/menu-scan.svg\"\r\n          class=\"w-100 normal\" /><img\r\n          src=\"../../../assets/images/menu-scan-hover.svg\"\r\n          class=\"w-100 hover\"\r\n        />\r\n      </a>\r\n      <ion-label color=\"dark\">Explore</ion-label>\r\n    </li>\r\n\r\n    <li (click)=\"historyPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1 == '/history' ? 'active ' : ''\">\r\n        <img\r\n          src=\"../../../assets/images/menu-history.svg\"\r\n          class=\"w-100 normal\" /><img\r\n          src=\"../../../assets/images/menu-history-hover.svg\"\r\n          class=\"w-100 hover\"\r\n        />\r\n      </a>\r\n      <ion-label color=\"dark\">Market</ion-label>\r\n    </li>\r\n    <li (click)=\"walletsPage()\">\r\n      <a class=\"icon\" [ngClass]=\"url1 == '/wallets' ? 'active ' : ''\">\r\n        <img src=\"../../../assets/images/wallet-outline.svg\" class=\"w-100 normal\" />\r\n        <img src=\"../../../assets/images/wallet-outline-hover.svg\" class=\"w-100 hover\"/>\r\n      </a>\r\n      <ion-label color=\"dark\">Wallets</ion-label>\r\n    </li>\r\n    <li class=\"footer-label\">\r\n      <a class=\"icon menu-btn\">\r\n        <img src=\"../../../assets/images/menu-more.svg\"class=\"w-100 normal\" />\r\n        <img src=\"../../../assets/images/menu-more-hover.svg\" class=\"w-100 hover\"/>\r\n      </a>\r\n      <ion-label color=\"dark\">Menu</ion-label>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n");

/***/ }),

/***/ 669:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/header/header.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <div class=\"header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <div class=\"title\">\n            <a (click)=\"dashboardPage()\" class=\"back-btn\"\n              ><i class=\"fas fa-angle-left\"></i\n            ></a>\n            {{title}}\n          </div>\n        </div>\n        <div class=\"col-4 text-right\">\n          <a\n            class=\"pulse-animation notification-btn\"\n            (click)=\"notificationsPage()\"\n            ><i class=\"far fa-bell\"></i\n          ></a>\n          <div class=\"profile-pic\" (click)=\"profilePage()\">\n            <img\n              [src]=\"profilePicSrc\"\n              class=\"width-100\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ 141:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/sidebar/sidebar.component.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<aside class=\"main-menu-box bg-primary\">\r\n<div class=\"trangle-bg\"></div>\r\n<div class=\"header\">\r\n<div class=\"title\">Main Menu</div>\r\n<a class=\"close-btn\"><i class=\"fas fa-times\"></i></a>\r\n</div>\r\n<div class=\"menu\">\r\n<ul class=\"nav flex-column flex-nowrap main-menu overflow-hidden\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link submenu\"  (click)=\"dashboardPage()\" [ngClass]=\"url1=='/dashboard' ? 'active ' : ''\"> <span>Home</span></a>\r\n                </li>\r\n                 <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"paymentsPage()\" [ngClass]=\"url1=='/payments' ? 'active ' : ''\"> <span>Payments</span></a>\r\n\r\n                </li>\r\n                 <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"historyPage()\" [ngClass]=\"url1=='/history' ? 'active' : ''\"><span>History</span></a>\r\n                </li>\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"profilePage()\" [ngClass]=\"url1=='/profile' ? 'active ' : ''\"><span>Profile</span></a>\r\n                </li>\r\n\r\n                  <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" (click)=\"settingsPage()\" [ngClass]=\"url1=='/settings' ? 'active' : ''\"><span>Settings</span></a>\r\n                </li>\r\n\r\n\r\n            </ul>\r\n</div>\r\n\r\n<div class=\"menu-footer\">\r\n<div class=\"profile box\">\r\n<div class=\"profile-pic\" (click)=\"profilePage()\">\r\n<img src=\"../../../assets/images/user-profile.jpg\" class=\"w-100\" />\r\n</div>\r\n<div class=\"profile-info\">\r\n<div class=\"name\" (click)=\"profilePage()\">Aaran Doe</div>\r\n<div class=\"location\">New york, USA</div>\r\n</div>\r\n<div class=\"signout-btn\"><a (click)=\"logOut()\"><i class=\"fas fa-sign-out-alt\"></i></a></div>\r\n</div>\r\n</div>\r\n</aside>\r\n");

/***/ }),

/***/ 1519:
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = ".footer-label {\n  color: var(--ion-color-light);\n  transition: 0.3s;\n}\n\n.footer-label:hover {\n  color: #f79e1b;\n}\n\nli {\n  transition: 0.2s;\n}\n\nli:hover {\n  color: #f79e1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0FBRUYiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4uZm9vdGVyLWxhYmVsOmhvdmVyIHtcbiAgY29sb3I6ICNmNzllMWI7XG59XG5cbmxpIHtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbmxpOmhvdmVye1xuICBjb2xvcjogI2Y3OWUxYjtcbn1cblxuIl19 */";

/***/ }),

/***/ 1199:
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 4300:
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_components_module_ts.js.map