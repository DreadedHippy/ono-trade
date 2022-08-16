(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/services/auth/auth.guard */ 6525);




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_register_register_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/register/register.module */ 207)).then(m => m.RegisterPageModule)
    },
    {
        path: 'forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/forgotpassword/forgotpassword.module */ 5862)).then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'walkthrough',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_walkthrough_walkthrough_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/walkthrough/walkthrough.module */ 2520)).then(m => m.WalkthroughPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/settings/settings.module */ 7850)).then(m => m.SettingsPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/profile/profile.module */ 8558)).then(m => m.ProfilePageModule)
    },
    {
        path: 'payments',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_payments_payments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payments/payments.module */ 5795)).then(m => m.PaymentsPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/notifications/notifications.module */ 4558)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'history',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("src_app_pages_history_history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/history/history.module */ 608)).then(m => m.HistoryPageModule)
    },
    {
        path: 'feedback',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_feedback_feedback_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/feedback/feedback.module */ 7792)).then(m => m.FeedbackPageModule)
    },
    {
        path: 'faqs',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_faqs_faqs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/faqs/faqs.module */ 6392)).then(m => m.FaqsPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("src_app_pages_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 1659)).then(m => m.DashboardPageModule),
        canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'changepassword',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_changepassword_changepassword_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/changepassword/changepassword.module */ 8142)).then(m => m.ChangepasswordPageModule)
    },
    {
        path: 'charttest',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("src_app_pages_charttest_charttest_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/charttest/charttest.module */ 1047)).then(m => m.CharttestPageModule)
    },
    {
        path: 'verification',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_verification_verification_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/verification/verification.module */ 8692)).then(m => m.VerificationPageModule)
    },
    {
        path: 'deposit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("src_app_pages_transaction_deposit_deposit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction/deposit/deposit.module */ 505)).then(m => m.DepositPageModule),
        canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'transfer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("default-node_modules_chart_js_dist_chart_esm_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_transaction_transfer_transfer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction/transfer/transfer.module */ 7546)).then(m => m.TransferPageModule),
        canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'wallets',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_components_components_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_transaction_wallets_wallets_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/transaction/wallets/wallets.module */ 1602)).then(m => m.WalletsPageModule),
        canActivate: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
        providers: [_app_services_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ 7556);
/* harmony import */ var _services_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/transactions.service */ 5495);






let AppComponent = class AppComponent {
    constructor(authSrv, transSrv) {
        this.authSrv = authSrv;
        this.transSrv = transSrv;
    }
    ngOnInit() {
        this.authSrv.autoAuthUser();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _services_transactions_service__WEBPACK_IMPORTED_MODULE_3__.TransactionsService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ 1111);
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 926);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4483);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth-interceptor */ 7863);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__.OwlModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule],
        providers: [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__.Camera, _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner,
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HTTP_INTERCEPTORS, useClass: _services_auth_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptor, multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5970:
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 1864);



let AlertService = class AlertService {
    constructor(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    toast(msg, dur = 4000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: dur,
                position: 'top'
            });
            toast.present();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 7863:
/*!**********************************************!*\
  !*** ./src/app/services/auth-interceptor.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 7556);



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService }
];
AuthInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], AuthInterceptor);

;


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.service */ 5585);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ 5970);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);









// If you enabled Analytics in your project, add the Firebase SDK for Analytics
/* eslint no-underscore-dangle: 0 */
const baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
const user = null;
let AuthService = class AuthService {
    constructor(http, navCtrl, mailSrv, alertSrv, route) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.mailSrv = mailSrv;
        this.alertSrv = alertSrv;
        this.route = route;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.client = null;
        this.firebaseConfig = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.isAuthenticated = false;
    }
    getToken() {
        return this.token;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    // Signup
    createUser(userdata) {
        const url = this.baseUrl + '/users/signup';
        this.http.post(url, userdata)
            .subscribe(response => {
            console.log(response);
            this.userRegmsg();
            this.navCtrl.navigateForward('/login');
        }, error => {
            console.log(error);
            this.errorCode = error.error.message;
            this.returnError();
            return;
        });
    }
    returnError() {
        const duplicateEmailError = this.errorCode.includes('expected `email` to be unique.');
        if (duplicateEmailError) {
            this.alertSrv.toast('Email already in use');
        }
    }
    // SignupMsg
    userRegmsg() {
        const url = this.baseUrl + '/users/signup';
        this.http.get(url)
            .subscribe(response => {
            if (response.status === 'verified') {
                window.alert(response.message);
            }
            else {
                window.alert('Verify with your email link');
            }
        });
    }
    // User Login
    login(userData) {
        this.http.post(baseUrl + '/users/login', userData)
            .subscribe(response => {
            const token = response.token;
            this.data = response.user;
            this.token = token;
            if (token) {
                if (response.status === 'verified') {
                    this.userLogmsg();
                    const expiresInDuration = response.expiresIn;
                    this.setAuthTimer(expiresInDuration);
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    this.saveAuthData(token, expirationDate, response.user.email, response.user.username, response.user.imageSrc);
                    console.log(expirationDate);
                    this.navCtrl.navigateRoot('/dashboard');
                }
            }
        }, error => {
            this.alertSrv.toast(error.error.message);
        });
    }
    userLogmsg() {
        const url = this.baseUrl + '/users/login';
        this.http.get(url)
            .subscribe(response => {
            console.log(response);
        });
    }
    uploadImg(file, cookieString) {
        console.log(file);
        localStorage.setItem('imageSrc', cookieString);
        return this.http.post(baseUrl + '/upload', file);
    }
    // Username Modification
    modifyUsername(data) {
        this.http.post(baseUrl + '/users/usermod', data)
            .subscribe(response => {
            console.log(response);
        });
    }
    // Friend Request
    reqFriend(friend) {
        this.http.post(baseUrl + '/users/friendadd', friend)
            .subscribe(response => {
            console.log(response);
        });
    }
    goHome() {
        this.navCtrl.navigateRoot('/login');
    }
    checkAccess() {
        this.http.get(baseUrl + '/currentuser')
            .subscribe(response => {
            const username = response.username;
            const email = response.email;
            const id = response._id;
            if (!id || !username || !email) {
                this.goHome();
            }
        });
    }
    // VERIFY USER
    userverify(key) {
        return this.http.get(this.baseUrl + '/users/verify?key=' + key);
    }
    resetPasswordRequest(email) {
        this.http.post(baseUrl + '/users/passresetrequest', email)
            .subscribe(response => {
            console.log(response);
            window.alert(response.message);
        }, error => {
            console.log(error);
        });
    }
    passwordReset(passData) {
        this.http.post(baseUrl + '/users/passreset', passData)
            .subscribe(response => {
            console.log(response.message);
            if (response.passkey === 'changed') {
                window.alert('Password changed');
                this.goHome();
            }
        }, error => {
            console.log(error);
            this.alertSrv.toast(error.error.message);
        });
    }
    getUsers() {
        this.http
            .get('http://localhost:3000/api/users/list')
            .subscribe(response => {
            console.log(response);
        });
    }
    getCurrentUser() {
        return this.data;
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
            this.navCtrl.navigateForward('/dashboard');
        }
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.route.navigate(['/login']);
    }
    saveAuthData(token, expirationDate, email, userName, imageSrc) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('email', email);
        localStorage.setItem('name', userName);
        localStorage.setItem('imageSrc', imageSrc);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('email');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token,
            expirationDate: new Date(expirationDate)
        };
    }
    setAuthTimer(duration) {
        console.log('Setting timer: ' + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _mail_service__WEBPACK_IMPORTED_MODULE_1__.MailService },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
AuthService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ 6525:
/*!*********************************************!*\
  !*** ./src/app/services/auth/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 7556);




let AuthGuard = class AuthGuard {
    constructor(authSrv, router) {
        this.authSrv = authSrv;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authSrv.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 5585:
/*!******************************************!*\
  !*** ./src/app/services/mail.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MailService": () => (/* binding */ MailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


let MailService = class MailService {
    constructor() { }
    getinfo(mail, verifytoken) {
        this.email = mail;
        this.token = verifytoken;
    }
};
MailService.ctorParameters = () => [];
MailService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], MailService);



/***/ }),

/***/ 5495:
/*!**************************************************!*\
  !*** ./src/app/services/transactions.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransactionsService": () => (/* binding */ TransactionsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9441);






let TransactionsService = class TransactionsService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.transactions = [];
        this.wallets = [];
        this.walletsUpd = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    getTransactions() {
        return [...this.transactions];
    }
    makeTransaction(data) {
        let result;
        const transaction = {
            type: data.type.toUpperCase(),
            date: data.date,
            fromId: data.fromId,
            currency: data.currency,
            fromAddress: data.fromAddress,
            fromName: data.fromName,
            toAddress: data.toAddress,
            remark: data.remark,
            amount: data.amount
        };
        const email = { email: localStorage.getItem('email') };
        const transactionData = Object.assign(data, email);
        this.transactions.unshift(transaction);
        const url = this.baseUrl + '/transactions/create';
        return new Promise(resolve => {
            this.http.post(url, transactionData)
                .subscribe(response => {
                resolve(response);
                return response.message;
            }, error => {
                console.log(error);
                return error;
            });
        });
    }
    buyCrypto(data) {
        const cryptoPurchase = {
            type: data.type.toUpperCase(),
            date: data.date,
            transactionId: data.transactionId,
            amount: data.amount,
            currency: data.currency,
            paymentAddress: data.paymentAddress
        };
        console.log(cryptoPurchase);
    }
    createWallet(walletInfo) {
        const url = this.baseUrl + '/wallets/create';
        const email = { email: localStorage.getItem('email') };
        const walletData = Object.assign(walletInfo, email);
        this.http.post(url, walletData)
            .subscribe(response => {
            window.alert(response.message);
            console.log(response);
            this.wallets.push(walletInfo);
        }, error => {
            console.log(error);
        });
        this.wallets.push(walletInfo);
        this.walletsUpd.next([...this.wallets]);
        this.route.navigate(['/wallets']);
    }
    useWallet(wallet, type) {
        this.depWallet = wallet;
        this.route.navigate([type]);
    }
    fetchTransactions() {
        const email = localStorage.getItem('email');
        const url = this.baseUrl + '/transactions?email=' + email;
        return this.http.get(url);
    }
    fetchWallets() {
        const email = localStorage.getItem('email');
        const url = this.baseUrl + '/wallets?email=' + email;
        return this.http.get(url);
    }
};
TransactionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TransactionsService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], TransactionsService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    staticUrl: 'http://localhost:3000/',
    baseUrl: 'https://onotrade.herokuapp.com/api',
    firebaseConfig: {
        apiKey: 'AIzaSyBo99pSXx33_J2EHblO5AtNTY1lKaU3n9Y',
        authDomain: 'newlotter-5d30c.firebaseapp.com',
        projectId: 'newlotter-5d30c',
        storageBucket: 'newlotter-5d30c.appspot.com',
        messagingSenderId: '360820972481',
        appId: '1:360820972481:web:b8fbb6106d929ccaf62d40',
        measurementId: 'G-NK2PKFB9WE'
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		3750,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		733,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		985,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		3899,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		5121,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		2960,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		5473,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		7951,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		9787,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		7464,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		9569,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		5119,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		799,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8918,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4028,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		8107,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		2178,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		123,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8706,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		2099,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		4868,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		4377,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		5678,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		6735,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		2322,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		7754,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		7686,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8555,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		568,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		6231,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		5772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		4977,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		2886,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		4990,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		3810,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		2446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		7619,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		8393,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		6281,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5932,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		7970,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		298,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		1006,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4783,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		2749,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5404,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		9043,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 3040:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map