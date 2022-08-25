"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_history_history_module_ts"],{

/***/ 4207:
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageRoutingModule": () => (/* binding */ HistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.page */ 2722);




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_0__.HistoryPage
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ 608:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPageModule": () => (/* binding */ HistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history-routing.module */ 4207);
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page */ 2722);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/components.module */ 5642);








let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _history_routing_module__WEBPACK_IMPORTED_MODULE_0__.HistoryPageRoutingModule
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_1__.HistoryPage]
    })
], HistoryPageModule);



/***/ }),

/***/ 2722:
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryPage": () => (/* binding */ HistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./history.page.html */ 744);
/* harmony import */ var _history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./history.page.scss */ 7550);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ 7932);






chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_2__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_2__.BarController, chart_js__WEBPACK_IMPORTED_MODULE_2__.BubbleController, chart_js__WEBPACK_IMPORTED_MODULE_2__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_2__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_2__.PieController, chart_js__WEBPACK_IMPORTED_MODULE_2__.PolarAreaController, chart_js__WEBPACK_IMPORTED_MODULE_2__.RadarController, chart_js__WEBPACK_IMPORTED_MODULE_2__.ScatterController, chart_js__WEBPACK_IMPORTED_MODULE_2__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.LogarithmicScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.TimeSeriesScale, chart_js__WEBPACK_IMPORTED_MODULE_2__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_2__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_2__.Title, chart_js__WEBPACK_IMPORTED_MODULE_2__.Tooltip);
let HistoryPage = class HistoryPage {
    constructor(router) {
        this.router = router;
        this.csstest = 'danger';
        this.transactions = [
            {
                type: 'buy',
                title: 'Mobile Recharge',
                id: '001',
                date: '08-06-2022',
                amount: -22
            },
            {
                type: 'buy',
                title: 'Stocks Investment',
                id: '002',
                date: '09-06-2022',
                amount: -22
            },
            {
                type: 'sell',
                title: 'Stocks Sales',
                id: '003',
                date: '10-06-2022',
                amount: 335
            }
        ];
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
        this.lineChart = new chart_js__WEBPACK_IMPORTED_MODULE_2__.Chart(this.lineCanvas.nativeElement, {
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
HistoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
HistoryPage.propDecorators = {
    lineCanvas: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewChild, args: ['lineCanvas', { static: true },] }]
};
HistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-history',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_history_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HistoryPage);



/***/ }),

/***/ 744:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/history/history.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n  <app-header></app-header>\r\n  <div class=\"search-box\">\r\n    <div class=\"container position-relative\">\r\n      <form>\r\n        <input type=\"search\" placeholder=\"Search here\" id=\"search\" />\r\n        <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"head-title\">\r\n    <div class=\"container\">\r\n      Monthly Expenses\r\n      <div class=\"float-right\">\r\n        <div class=\"round-box bg-success text-white\">$23,345.12</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"chart-box ion-margin\">\r\n      <canvas #lineCanvas></canvas>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"body\">\r\n    <div class=\"head-title\"><div class=\"container\">Today</div></div>\r\n    <div class=\"transactionlist\">\r\n      <div class=\"container\">\r\n\r\n        <div class=\"transactions-box\" *ngFor=\"let transaction of transactions\">\r\n          <div class=\"left\">\r\n            <div [ngClass]=\"transaction.amount > 0 ? 'icon bg-success' : 'icon bg-danger'\">\r\n              <img [src]=\"transaction.amount > 0 ? '../../../assets/images/exchange-green.svg' : '../../../assets/images/exchange-red.svg'\"\r\n              class = 'w-100 card-icon'/>\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">{{transaction.title}}</div>\r\n            <div class=\"time\">{{transaction.date}}</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div [ngClass]=\"transaction.amount > 0 ? 'price text-success' : 'price text-danger'\"\r\n            >{{transaction.amount}}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-success\">\r\n              <img\r\n                src=\"../../../assets/images/card.svg\"\r\n                class=\"w-100 card-icon\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Money back offer</div>\r\n            <div class=\"time\">50 min ago</div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Money back offer</div>\r\n            <div class=\"time\">50 min ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-success\">+$55</div>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"head-title\"><div class=\"container\">23 March 2020</div></div>\r\n    <!-- <div class=\"transactionlist\">\r\n      <div class=\"container\">\r\n        <div class=\"transactions-box\">\r\n          <div class=\"left\">\r\n            <div class=\"icon bg-danger\">\r\n              <img src=\"../../../assets/images/mobile.svg\" class=\"w-100\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"middle\">\r\n            <div class=\"title\">Mobile recharge</div>\r\n            <div class=\"time\">1 day ago</div>\r\n          </div>\r\n          <div class=\"right\">\r\n            <div class=\"price text-danger\">-$100</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 7550:
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = ".chart-box {\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUMsZ0JBQUE7QUFBRCIsImZpbGUiOiJoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydC1ib3hcclxue1xyXG4gbWFyZ2luLXRvcDo0MHB4O1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_history_history_module_ts.js.map