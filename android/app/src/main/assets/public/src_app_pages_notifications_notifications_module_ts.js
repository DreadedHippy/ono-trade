"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_notifications_notifications_module_ts"],{

/***/ 5947:
/*!*********************************************************************!*\
  !*** ./src/app/pages/notifications/notifications-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 4462);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 4558:
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 5947);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 4462);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
    })
], NotificationsPageModule);



/***/ }),

/***/ 4462:
/*!***********************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./notifications.page.html */ 7499);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 1691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);





let NotificationsPage = class NotificationsPage {
    constructor(router) {
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
};
NotificationsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notifications',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NotificationsPage);



/***/ }),

/***/ 7499:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/notifications/notifications.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n<div class=\"header\">\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-8\"><div class=\"title\"><a (click)=\"dashboardPage()\" class=\"back-btn\"><i class=\"fas fa-angle-left\" ></i></a> Notifications</div>\r\n</div>\r\n<div class=\"col-4 text-right\"><a class=\"pulse-animation notification-btn\"><i class=\"far fa-bell\"></i></a> <div class=\"profile-pic\" (click)=\"profilePage()\"><img src=\"../../../assets/images/user-profile.jpg\" class=\"width-100\"/></div></div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"body\">\r\n<div class=\"container\">\r\n<div class=\"head-title\">Recharge  <a class=\"float-right viewall-btn\">View All</a></div>\r\n<div class=\"transactionlist grouped\">\r\n<div class=\"transactions-box\">\r\n<div class=\"left\"><div class=\"icon bg-danger\"><img src=\"../../../assets/images/mobile.svg\" class=\"w-100\"/></div></div>\r\n<div class=\"middle\">\r\n<div class=\"title\">Mobile recharge</div>\r\n<div class=\"time\">2 min ago</div>\r\n</div>\r\n<div class=\"right\">\r\n<div class=\"price text-danger\">-$20</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"head-title\">Transfer  <a class=\"float-right viewall-btn\">View All</a></div>\r\n<div class=\"transactionlist grouped\">\r\n<div class=\"transactions-box\">\r\n<div class=\"left\"><div class=\"icon bg-danger\"><img src=\"../../../assets/images/transfer.svg\" class=\"w-100\"/></div></div>\r\n<div class=\"middle\">\r\n<div class=\"title\">Money debit</div>\r\n<div class=\"time\">3 days ago</div>\r\n</div>\r\n<div class=\"right\">\r\n<div class=\"price text-danger\">-$20</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"head-title\">Exchange  <a class=\"float-right viewall-btn\">View All</a></div>\r\n<div class=\"transactionlist grouped\">\r\n<div class=\"transactions-box\">\r\n<div class=\"left\"><div class=\"icon bg-success\"><img src=\"../../../assets/images/exchange-green.svg\" class=\"w-100\"/></div></div>\r\n<div class=\"middle\">\r\n<div class=\"title\">CAD TO USD</div>\r\n<div class=\"time\">5 days ago</div>\r\n</div>\r\n<div class=\"right\">\r\n<div class=\"price text-success\">+$150</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"head-title\">Others</div>\r\n<div class=\"transactionlist\">\r\n<div class=\"transactions-box\">\r\n<div class=\"left\"><div class=\"icon bg-success\"><img src=\"../../../assets/images/card.svg\" class=\"w-100 card-icon\"/></div></div>\r\n<div class=\"middle\">\r\n<div class=\"title\">Money back </div>\r\n<div class=\"time\">10 days ago</div>\r\n</div>\r\n<div class=\"right\">\r\n<div class=\"price text-success\">+$55</div>\r\n</div>\r\n</div>\r\n<div class=\"transactions-box\">\r\n<div class=\"left\"><div class=\"icon bg-success\"><img src=\"../../../assets/images/card.svg\" class=\"w-100 card-icon\"/></div></div>\r\n<div class=\"middle\">\r\n<div class=\"title\">Gift card</div>\r\n<div class=\"time\">15 days ago</div>\r\n</div>\r\n<div class=\"right\">\r\n<div class=\"price text-success\">+$85</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 1691:
/*!*************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = ".transactionlist.grouped {\n  position: relative;\n}\n\n.transactionlist .transactions-box {\n  position: relative;\n  z-index: 3;\n}\n\n.transactionlist.grouped:before {\n  content: \"\";\n  position: absolute;\n  width: 88%;\n  background: #3E3E3E;\n  left: 0px;\n  right: 0px;\n  bottom: -10px;\n  margin: auto;\n  opacity: 0.3;\n  height: 40px;\n  border-radius: 5px;\n  z-index: 1;\n}\n\n.transactionlist.grouped:after {\n  content: \"\";\n  position: absolute;\n  width: 95%;\n  background: #3E3E3E;\n  left: 0px;\n  right: 0px;\n  bottom: -5px;\n  margin: auto;\n  opacity: 0.5;\n  height: 40px;\n  border-radius: 5px;\n  z-index: 1;\n}\n\n.viewall-btn {\n  font-size: 12px;\n  color: #FFF;\n  opacity: 0.7;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.viewall-btn:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsa0JBQUE7QUFBRjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUVBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQUE7O0FBRUE7RUFFQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFBQTs7QUFHQTtFQUVFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUdBO0VBRUEsWUFBQTtBQURBIiwiZmlsZSI6Im5vdGlmaWNhdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zYWN0aW9ubGlzdC5ncm91cGVkIFxyXG57XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnRyYW5zYWN0aW9ubGlzdCAudHJhbnNhY3Rpb25zLWJveFxyXG57XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgei1pbmRleDozXHJcbn1cclxuLnRyYW5zYWN0aW9ubGlzdC5ncm91cGVkOmJlZm9yZVxyXG57XHJcbmNvbnRlbnQ6IFwiXCI7XHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxud2lkdGg6IDg4JTtcclxuYmFja2dyb3VuZDogIzNFM0UzRTtcclxubGVmdDogMHB4O1xyXG5yaWdodDogMHB4O1xyXG5ib3R0b206IC0xMHB4O1xyXG5tYXJnaW46IGF1dG87XHJcbm9wYWNpdHk6IDAuMztcclxuaGVpZ2h0OiA0MHB4O1xyXG5ib3JkZXItcmFkaXVzOiA1cHg7XHJcbnotaW5kZXg6IDE7XHJcbn1cclxuLnRyYW5zYWN0aW9ubGlzdC5ncm91cGVkOmFmdGVyXHJcbntcclxuY29udGVudDogXCJcIjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG53aWR0aDogOTUlO1xyXG5iYWNrZ3JvdW5kOiAjM0UzRTNFO1xyXG5sZWZ0OiAwcHg7XHJcbnJpZ2h0OiAwcHg7XHJcbmJvdHRvbTogLTVweDtcclxubWFyZ2luOiBhdXRvO1xyXG5vcGFjaXR5OiAwLjU7XHJcbmhlaWdodDogNDBweDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG56LWluZGV4OiAxO1xyXG59XHJcblxyXG4udmlld2FsbC1idG5cclxue1xyXG4gIGZvbnQtc2l6ZToxMnB4O1xyXG4gIGNvbG9yOiNGRkY7XHJcbiAgb3BhY2l0eTowLjc7XHJcbiAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcbi52aWV3YWxsLWJ0bjpob3ZlclxyXG57XHJcbm9wYWNpdHk6MC45O1xyXG59XHJcbiJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_notifications_notifications_module_ts.js.map