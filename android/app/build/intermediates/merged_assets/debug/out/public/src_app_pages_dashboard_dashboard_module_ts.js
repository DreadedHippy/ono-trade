"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 9366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 6446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 1659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 9366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 6446);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage]
    })
], DashboardPageModule);



/***/ }),

/***/ 6446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./dashboard.page.html */ 8744);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 5045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 7932);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);







chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarController, chart_js__WEBPACK_IMPORTED_MODULE_2__.BubbleController, chart_js__WEBPACK_IMPORTED_MODULE_2__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_2__.PieController, chart_js__WEBPACK_IMPORTED_MODULE_2__.PolarAreaController, chart_js__WEBPACK_IMPORTED_MODULE_2__.RadarController, chart_js__WEBPACK_IMPORTED_MODULE_2__.ScatterController, chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LogarithmicScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeSeriesScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip);
let DashboardPage = class DashboardPage {
    constructor(router, authSrv) {
        this.router = router;
        this.authSrv = authSrv;
        this.name = localStorage.getItem('name');
    }
    menuopen() {
        alert('function changecolor');
        this.menustatus = 'open';
    }
    notificationsPage() {
        this.router.navigate(['notifications']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
    logOut() {
        this.authSrv.logout();
    }
    goChartPage() {
        this.router.navigate(['charttest']);
    }
    ngOnInit() {
        this.barChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.barCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: [' ', '1week', '2week', '3week', '4week', '5week', ' '],
                datasets: [
                    {
                        borderWidth: 2,
                        borderColor: '#28A745',
                        pointBorderWidth: 0,
                        pointHoverRadius: 0,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 0,
                        pointRadius: 0,
                        pointHitRadius: 0,
                        data: [65, 50, 80, 90, 56, 85, 50],
                        fill: false,
                    },
                    {
                        borderColor: 'rgba(255,255,255,0.5)',
                        borderWidth: 1,
                        borderDash: [3, 5],
                        pointBorderWidth: 0,
                        pointHoverRadius: 0,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 0,
                        pointRadius: 0,
                        pointHitRadius: 0,
                        data: [40, 60, 70, 64, 89, 50, 69],
                        fill: false,
                    },
                ],
            },
            options: {
                responsive: true,
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
                scales: {
                    x: {
                        grid: {
                            drawBorder: false,
                            display: false,
                        },
                    },
                    y: {
                        display: false,
                    },
                },
            },
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
DashboardPage.propDecorators = {
    barCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['barCanvas', { static: true },] }]
};
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-dashboard',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], DashboardPage);



/***/ }),

/***/ 8744:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n  <app-header></app-header>\r\n  <div class=\"body\">\r\n    <div class=\"blue-card\">\r\n      <div class=\"container\">\r\n        <div class=\"card bg-primary\">\r\n          <div class=\"card-body\">\r\n            <div class=\"accountbalance\">\r\n              {{3456.12 | currency:'₦'}}\r\n              <div class=\"float-right\">\r\n                <div class=\"visa-icon\">\r\n                  <img\r\n                    src=\"../../../assets/images/visa-card-icon.svg\"\r\n                    class=\"w-100\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"balanceinfo\">\r\n              <ion-button (click)=\"goChartPage()\">Chart test</ion-button>\r\n              <div class=\"name\">{{name}}</div>\r\n              <div class=\"cardno\">1*** **** **** 7678</div>\r\n              <div class=\"expiredate\">13/20</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"head-title\">\r\n      <div class=\"container\">Market Price</div>\r\n    </div>\r\n    <div class=\"chart-box\">\r\n      <div class=\"container\">\r\n        <canvas #barCanvas></canvas>\r\n      </div>\r\n    </div>\r\n    <div class=\"head-title\">\r\n      <div class=\"container\">Recent Transactions</div>\r\n    </div>\r\n    <div class=\"transactionlist\">\r\n      <div class=\"container\">\r\n        <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-danger\">\r\n              <img src=\"../../../assets/images/mobile.svg\" class=\"w-100\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Mobile recharge</div>\r\n            <div class=\"time\">2 min ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-danger\">-$20</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-success\">\r\n              <img\r\n                src=\"../../../assets/images/card.svg\"\r\n                class=\"w-100 card-icon\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Money back offer</div>\r\n            <div class=\"time\">50 min ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-success\">+$55</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-danger\">\r\n              <img src=\"../../../assets/images/mobile.svg\" class=\"w-100\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Mobile recharge</div>\r\n            <div class=\"time\">1 day ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-danger\">-$100</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 5045:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = ".call-box {\n  margin-top: 30px;\n}\n\n.country-box {\n  cursor: pointer;\n}\n\n.country-box:hover {\n  box-shadow: 0px 0px 3px 0px #CCC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxnQkFBQTtBQUFBOztBQUVBO0VBRUMsZUFBQTtBQUFEOztBQUVBO0VBRUEsZ0NBQUE7QUFBQSIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGwtYm94XHJcbntcclxubWFyZ2luLXRvcDozMHB4O1xyXG59XHJcbi5jb3VudHJ5LWJveFxyXG57XHJcbiBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4uY291bnRyeS1ib3g6aG92ZXJcclxue1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDNweCAwcHggI0NDQztcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map