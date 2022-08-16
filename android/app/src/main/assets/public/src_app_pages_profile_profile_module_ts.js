"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_profile_profile_module_ts"],{

/***/ 1474:
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 4629);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 8558:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 1474);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 4629);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 4629:
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.page.html */ 7787);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 6713);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ 5970);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);








let ProfilePage = class ProfilePage {
    constructor(router, authSrv, alertSrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.alertSrv = alertSrv;
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        this.isEditMode = false;
        this.profilePicSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.staticUrl + localStorage.getItem('imageSrc');
        this.fileInput = document.getElementById('input');
    }
    dashboardPage() {
        this.router.navigate(['dashboard']);
    }
    notificationsPage() {
        this.router.navigate(['notifications']);
    }
    uploadImg(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let file = event.target.files[0];
            if (!file) {
                this.alertSrv.toast('No image was uploaded', 2000);
                return;
            }
            const formData = new FormData();
            console.log(file);
            const email = localStorage.getItem('email');
            // Store form name as "image" with file data
            let extension = file.name.substring(file.name.lastIndexOf('.')); //Get file extension
            console.log(extension);
            formData.append("image", file, email + extension);
            let cookieString = email + extension;
            console.log(file.name, file, formData);
            yield this.authSrv.uploadImg(formData, cookieString).subscribe((response) => {
                console.log('Response is:', response);
                this.alertSrv.toast(response.message, 2000);
                this.profilePicSrc = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.staticUrl + localStorage.getItem('imageSrc');
            });
        });
    }
    ngOnInit() { }
    toggleEdit() {
        this.isEditMode = !this.isEditMode;
    }
    isEditable() {
        return new Promise(resolve => {
            resolve(this.isEditMode);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProfilePage);



/***/ }),

/***/ 7787:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/profile/profile.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n  <div class=\"container\">\r\n    <div class=\"header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n          <div class=\"title\">\r\n            <a (click)=\"dashboardPage()\" class=\"back-btn\"\r\n              ><i class=\"fas fa-angle-left\"></i\r\n            ></a>\r\n            Profile\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4 text-right\">\r\n          <a\r\n            class=\"pulse-animation notification-btn\"\r\n            (click)=\"notificationsPage()\"\r\n            ><i class=\"far fa-bell\"></i\r\n          ></a>\r\n          <a class=\"edit-btn\" (click)=\"toggleEdit()\"><i class=\"fas fa-edit\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"body\">\r\n      <div class=\"profile-box\">\r\n        <div class=\"top img-holder\">\r\n          <div class=\"pic image-holder\">\r\n            <img [src]=\"profilePicSrc\" width=\"auto\" height=\"100%\"/>\r\n            <label for=\"input\" class=\"edit\" [hidden]=\"isEditMode\">\r\n              <ion-icon name=\"camera\" size=\"large\" color=\"secondary\">\r\n                <input type=\"file\" name=\"image\" id=\"input\" (change)=\"uploadImg($event)\"/>\r\n              </ion-icon>\r\n            </label>\r\n          </div>\r\n          <div class=\"name\">{{name}}</div>\r\n          <div class=\"location\">New york, USA</div>\r\n        </div>\r\n        <div class=\"bottom\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <div class=\"label\">Income</div>\r\n              <div class=\"value text-success\">$2,345</div>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <div class=\"label\">Expenses</div>\r\n              <div class=\"value text-danger\">$1,234</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"head\">Personal Informations</div>\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n          <div class=\"label\">Address</div>\r\n          <div class=\"value\">200 cooper square, New york, USA</div>\r\n          <div class=\"label\">Email</div>\r\n          <div class=\"value\">{{email}}</div>\r\n          <div class=\"label\">Phone</div>\r\n          <div class=\"value\">+1 999 999 9999</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 6713:
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".edit-btn {\n  color: #FFF;\n  font-size: 16px;\n  cursor: pointer;\n  position: relative;\n  top: 3px;\n}\n\n.edit-btn:hover {\n  color: #F79E1B !important;\n}\n\n.head {\n  font-weight: 700;\n  color: #FFF;\n  font-size: 16px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n}\n\n.profile-box .top {\n  text-align: center;\n  padding-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 15px;\n}\n\n.profile-box .top .pic {\n  width: 100px;\n  height: 100px;\n  margin: auto;\n  border-radius: 100%;\n  overflow: hidden;\n}\n\ninput[type=file] {\n  display: none;\n}\n\nlabel {\n  cursor: pointer;\n  padding-bottom: 0px;\n}\n\n.profile-box .top .name {\n  font-size: 16px;\n  font-weight: 700;\n  color: #FFF;\n  margin-top: 15px;\n}\n\n.profile-box .top .location {\n  font-size: 14px;\n  font-weight: 500;\n  color: #FFF;\n  opacity: 0.7;\n}\n\n.profile-box .bottom {\n  text-align: center;\n  background: #333333;\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-bottom: 10px;\n  border-radius: 10px;\n}\n\n.profile-box .bottom .row .col-6:first-child:after {\n  content: \"\";\n  position: absolute;\n  top: -10px;\n  background: #FFF;\n  width: 1px;\n  height: 62px;\n  right: 0px;\n  opacity: 0.1;\n}\n\n.profile-box .bottom .label {\n  margin-top: 0px;\n  opacity: 0.7;\n  color: #FFF;\n  font-size: 12px;\n  margin-bottom: 3px;\n}\n\n.profile-box .bottom .value {\n  color: #FFF;\n  font-size: 14px;\n  font-weight: 700;\n}\n\n.card {\n  border-radius: 10px;\n  border: 0px;\n  overflow: hidden;\n  background: none;\n}\n\n.card-body {\n  background: #333333;\n  border-radius: 10px;\n  padding: 30px;\n}\n\n.card-body div:last-child {\n  margin-bottom: 0px;\n}\n\n.card .label {\n  font-size: 14px;\n  font-weight: 500;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  color: #FFF;\n  opacity: 0.7;\n}\n\n.card .value {\n  font-size: 14px;\n  font-weight: 700;\n  margin-top: 0px;\n  margin-bottom: 15px;\n  color: #EEE;\n  opacity: 1;\n}\n\n.img-holder {\n  position: relative;\n}\n\n.img-holder .edit {\n  position: absolute;\n  bottom: 60px;\n  /*your button position*/\n  right: 290px;\n  /*your button position*/\n  opacity: 0.8;\n  transition: 0.2s;\n}\n\n.img-holder .edit:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDQyx5QkFBQTtBQUNEOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDQTs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNDLGdCQUFBO0FBQ0g7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUVGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDRCxnQkFBQTtBQUVEOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFRjs7QUFDQTtFQUFhLGtCQUFBO0FBR2I7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFBYyx1QkFBQTtFQUNkLFlBQUE7RUFBYyx1QkFBQTtFQUNkLFlBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUpBO0VBQ0UsVUFBQTtBQU9GIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtYnRue1xyXG4gIGNvbG9yOiNGRkY7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG59XHJcblxyXG4uZWRpdC1idG46aG92ZXJ7XHJcblx0Y29sb3I6ICNGNzlFMUIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWR7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIGNvbG9yOiNGRkY7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgbWFyZ2luLXRvcDozMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLnByb2ZpbGUtYm94IC50b3B7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG5wYWRkaW5nLXRvcDoyMHB4O1xyXG5wYWRkaW5nLWxlZnQ6MjBweDtcclxucGFkZGluZy1yaWdodDoyMHB4O1xyXG5wYWRkaW5nLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4ucHJvZmlsZS1ib3ggLnRvcCAucGlje1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5sYWJlbHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnByb2ZpbGUtYm94IC50b3AgLm5hbWV7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIGNvbG9yOiNGRkY7XHJcbiAgIG1hcmdpbi10b3A6MTVweDtcclxufVxyXG5cclxuLnByb2ZpbGUtYm94IC50b3AgLmxvY2F0aW9ue1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICBjb2xvcjojRkZGO1xyXG4gIG9wYWNpdHk6MC43O1xyXG59XHJcblxyXG4ucHJvZmlsZS1ib3ggLmJvdHRvbXtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiMzMzMzMzM7XHJcbiAgcGFkZGluZy10b3A6MTBweDtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206MTBweDtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLWJveCAuYm90dG9tIC5yb3cgLmNvbC02OmZpcnN0LWNoaWxkOmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwcHg7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICB3aWR0aDogMXB4O1xyXG4gIGhlaWdodDogNjJweDtcclxuICByaWdodDogMHB4O1xyXG4gIG9wYWNpdHk6IDAuMTtcclxufVxyXG4ucHJvZmlsZS1ib3ggLmJvdHRvbSAubGFiZWx7XHJcbiAgbWFyZ2luLXRvcDowcHg7XHJcbiAgb3BhY2l0eTowLjc7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxuLnByb2ZpbGUtYm94IC5ib3R0b20gLnZhbHVle1xyXG4gIGNvbG9yOiNGRkY7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiBmb250LXdlaWdodDo3MDA7XHJcbn1cclxuXHJcbi5jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gIGJhY2tncm91bmQ6IzMzMzMzMztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6MzBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSBkaXY6bGFzdC1jaGlsZHtcclxuICBtYXJnaW4tYm90dG9tOjBweDtcclxufVxyXG5cclxuLmNhcmQgLmxhYmVse1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICBtYXJnaW4tdG9wOjBweDtcclxuICBtYXJnaW4tYm90dG9tOjBweDtcclxuICBjb2xvcjojRkZGO1xyXG4gIG9wYWNpdHk6MC43O1xyXG59XHJcblxyXG4uY2FyZCAudmFsdWV7XHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6NzAwO1xyXG4gIG1hcmdpbi10b3A6MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MTVweDtcclxuICBjb2xvcjojRUVFO1xyXG4gIG9wYWNpdHk6MTtcclxufVxyXG5cclxuLmltZy1ob2xkZXIge3Bvc2l0aW9uOiByZWxhdGl2ZTt9XHJcbi5pbWctaG9sZGVyIC5lZGl0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA2MHB4OyAvKnlvdXIgYnV0dG9uIHBvc2l0aW9uKi9cclxuICByaWdodDogMjkwcHg7IC8qeW91ciBidXR0b24gcG9zaXRpb24qL1xyXG4gIG9wYWNpdHk6IC44O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi5pbWctaG9sZGVyIC5lZGl0OmhvdmVyIHtcclxuICBvcGFjaXR5OiAxXHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_profile_profile_module_ts.js.map