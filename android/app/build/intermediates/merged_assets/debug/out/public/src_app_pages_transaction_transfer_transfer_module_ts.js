"use strict";
(self["webpackChunklight"] = self["webpackChunklight"] || []).push([["src_app_pages_transaction_transfer_transfer_module_ts"],{

/***/ 8337:
/*!***********************************************************************!*\
  !*** ./src/app/pages/transaction/transfer/transfer-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPageRoutingModule": () => (/* binding */ TransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer.page */ 660);




const routes = [
    {
        path: '',
        component: _transfer_page__WEBPACK_IMPORTED_MODULE_0__.TransferPage
    }
];
let TransferPageRoutingModule = class TransferPageRoutingModule {
};
TransferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TransferPageRoutingModule);



/***/ }),

/***/ 7546:
/*!***************************************************************!*\
  !*** ./src/app/pages/transaction/transfer/transfer.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPageModule": () => (/* binding */ TransferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 1864);
/* harmony import */ var _transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfer-routing.module */ 8337);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../components/components.module */ 5642);
/* harmony import */ var _transfer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transfer.page */ 660);








let TransferPageModule = class TransferPageModule {
};
TransferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransferPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_transfer_page__WEBPACK_IMPORTED_MODULE_2__.TransferPage]
    })
], TransferPageModule);



/***/ }),

/***/ 660:
/*!*************************************************************!*\
  !*** ./src/app/pages/transaction/transfer/transfer.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferPage": () => (/* binding */ TransferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./transfer.page.html */ 7071);
/* harmony import */ var _transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfer.page.scss */ 9144);
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/alert.service */ 5970);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ 926);
/* harmony import */ var src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/transactions.service */ 5495);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! subsink */ 4408);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ 7932);











chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_6__.ArcElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_6__.BarController, chart_js__WEBPACK_IMPORTED_MODULE_6__.BubbleController, chart_js__WEBPACK_IMPORTED_MODULE_6__.DoughnutController, chart_js__WEBPACK_IMPORTED_MODULE_6__.LineController, chart_js__WEBPACK_IMPORTED_MODULE_6__.PieController, chart_js__WEBPACK_IMPORTED_MODULE_6__.PolarAreaController, chart_js__WEBPACK_IMPORTED_MODULE_6__.RadarController, chart_js__WEBPACK_IMPORTED_MODULE_6__.ScatterController, chart_js__WEBPACK_IMPORTED_MODULE_6__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.LogarithmicScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.TimeSeriesScale, chart_js__WEBPACK_IMPORTED_MODULE_6__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_6__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_6__.Title, chart_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip);
let TransferPage = class TransferPage {
    constructor(router, fb, barcodeScanner, transSrv, alertSrv) {
        this.router = router;
        this.fb = fb;
        this.barcodeScanner = barcodeScanner;
        this.transSrv = transSrv;
        this.alertSrv = alertSrv;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_5__.SubSink();
        this.data = {
            labels: this.getLabels(),
            datasets: [
                {
                    label: 'Transfers',
                    backgroundColor: 'rgb(72, 245, 66)',
                    pointBorderWidth: 0,
                    pointHoverRadius: 0,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 0,
                    pointRadius: 0,
                    pointHitRadius: 0,
                    borderColor: 'rgb(72, 245, 66)',
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
                    fill: false
                }
            ]
        };
        this.config = {
            type: 'bar',
            data: this.data,
            options: {
                animation: {
                    duration: 5000,
                },
                responsive: true,
                title: {
                    display: true,
                    position: 'top',
                    text: 'Line Chart',
                    fontSize: 12,
                    fontColor: 'rgb(14, 13, 13)'
                },
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        fontColor: 'rgb(14, 13, 13)',
                        fontSize: 14
                    }
                }
            }
        };
        this.marketPrices = {
            ngn: 0.002382246,
            usd: 1,
            eur: 1.048365,
            cad: 0.77365
        };
        this.walletBal = this.transSrv.depWallet.balance;
        this.enteredAmount = 0;
        this.transfers = [];
        this.timeFormat = {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        };
        this.isButtonDisabled = false;
        this.transactionInfo = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            senderAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: this.transSrv.depWallet.address, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            senderAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(0, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            testField: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            senderCurr: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.transSrv.depWallet.currency, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            receiverAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            receiverAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl({ value: 0, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            receiverCurr: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('ngn', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            remark: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required)
        });
        this.isLoading = false;
        this.sentCurr = 'usd';
        this.receivedCurr = 'usd';
    }
    ngOnInit() {
        this.transactionInfo.get('senderAmount').valueChanges.subscribe(amount => {
            this.enteredAmount = amount;
        });
        this.isButtonDisabled = false;
        const canvas = document.getElementById('myChart');
        const ctx = canvas.getContext('2d');
        const myChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart(canvas, this.config);
        this.loadTransactions().then((result) => {
            myChart.data.datasets[0].data = result;
            myChart.update();
        });
    }
    ionViewDidEnter() {
        this.loadTransactions();
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
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
    toDate(arg) {
        let rawDate = new Date(arg);
        return rawDate.toLocaleDateString('en-US', this.timeFormat);
    }
    onTransfer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.walletBal <= this.enteredAmount) {
                this.alertSrv.toast('Invalid Amount', 3000);
                return;
            }
            if (!(this.transactionInfo.valid)) {
                this.alertSrv.toast('Please fill required fields');
                return;
            }
            let date = new Date;
            let data = {
                type: 'transfer',
                date: date.toISOString(),
                fromId: this.transSrv.depWallet._id,
                fromAddress: this.transSrv.depWallet.address,
                toAddress: this.transactionInfo.get('receiverAddress').value,
                currency: this.transactionInfo.get('senderCurr').value,
                amount: this.enteredAmount,
                remark: this.transactionInfo.get('remark').value,
                fromName: this.transSrv.depWallet.name
            };
            console.log(this.transactionInfo.valid);
            this.isButtonDisabled = true;
            this.transSrv.makeTransaction(data).then((result) => {
                console.log('result', result);
                this.alertSrv.toast(result.message, 5000);
                this.router.navigate(['wallets']);
            });
        });
    }
    //Fetch transactions from backend as well as, create Transaction history array
    loadTransactions() {
        return new Promise((resolve, reject) => {
            this.subs.sink = this.transSrv.fetchTransactions().subscribe((data) => {
                let transactions = data.transactions;
                transactions.reverse();
                this.transfers = transactions.filter(transaction => transaction.type == 'transfer');
                let transferHistory = transactions.filter(transaction => transaction.type == 'transfer');
                let mappedArray = transferHistory.map(this.transferHistoryMapping);
                let chartedArray = this.transferHistoryCharting(mappedArray);
                let labels = this.getLabels();
                let final = this.getData(chartedArray, labels);
                resolve(final);
            });
        });
    }
    transferHistoryMapping(record) {
        let day = new Date(record.date);
        const date = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate())).getDate();
        const month = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate()));
        return ({ date: date + '-' + month.toLocaleDateString('en-US', { month: 'short' }), amount: record.amount });
    }
    transferHistoryCharting(array) {
        let newArr = [];
        let dates = array.map(elem => elem.date);
        for (let i = 0; i < array.length; i++) {
            if (!newArr.some((element) => element.date == dates[i])) {
                newArr.push(array[i]);
            }
            else if (newArr.some((element) => element.date == dates[i])) {
                let foundIndex = newArr.findIndex(element => element.date == dates[i]);
                let newArrAmount = Number(newArr[foundIndex].amount);
                let oldArrAmount = Number(array[i].amount);
                let totalAmount = newArrAmount + oldArrAmount;
                newArr[foundIndex].amount = totalAmount;
            }
        }
        return newArr;
    }
    getLabels() {
        let newArray = [];
        let today = new Date();
        for (let daysAgo = 0; daysAgo <= 30; daysAgo++) {
            const date = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() - daysAgo)).getDate();
            const month = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() - daysAgo));
            newArray.unshift(date + '-' + month.toLocaleDateString('en-US', { month: 'short' }));
        }
        return newArray;
    }
    getData(transactionData, datesData) {
        let finalArr = [];
        for (let i = 0; i <= datesData.length - 1; i++) {
            if (transactionData.some((element) => element.date == datesData[i])) {
                let foundIndex = transactionData.findIndex(element => element.date == datesData[i]);
                let foundAmount = transactionData[foundIndex].amount;
                finalArr.push(foundAmount);
            }
            else if (!transactionData.some((element) => element.date == datesData[i])) {
                finalArr.push(0);
            }
        }
        return finalArr;
    }
    getCurrencyIcon(currName) {
        switch (currName) {
            case 'ngn':
                return '₦';
                break;
        }
    }
    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            // success. barcodeData is the data returned by scanner
        }).catch(err => {
            // error
        });
    }
    toCurrency(num) {
        return num.toFixed(2);
        // [value]="(receiverAmountInput.value * marketPrices[receiverCurrency.value] * 1/marketPrices[senderCurrency.value]).toFixed(2)
    }
};
TransferPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder },
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner },
    { type: src_app_services_transactions_service__WEBPACK_IMPORTED_MODULE_4__.TransactionsService },
    { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService }
];
TransferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-transfer',
        template: _home_aizee_Desktop_Projects_kird_ionic_theme_node_modules_ngtools_webpack_src_loaders_direct_resource_js_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransferPage);



/***/ }),

/***/ 7071:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/transaction/transfer/transfer.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-sidebar></app-sidebar>\n<ion-content class=\"mainbackground\">\n  <app-header></app-header>\n  <div class=\"body\">\n    <div class=\"container\" style=\"padding-bottom: 50px;\">\n\n      <div [ngClass]=\"(walletBal > enteredAmount)? 'balbox' : 'balboxErr'\">\n        <h4 style=\"text-align: center;\">Balance: {{(walletBal - enteredAmount).toFixed(2)}}</h4>\n      </div>\n      <div class=\"form-box\">\n        <form (ngSubmit)=\"onTransfer()\" *ngIf=\"!isLoading\" [formGroup]=\"transactionInfo\">\n          <div class=\"form-group flexContainer\">\n\n            <div class=\"ion-padding\">Your Address:</div><input type=\"text\" class=\"form-control inputField\" id=\"senderAddress\" formControlName=\"senderAddress\" required=\"true\" ionFocus=\"focus()\">\n\n            <input type=\"number\" formControlName=\"senderAmount\" placeholder=\"Amount\"\n            class=\"form-control inputFieldTwo\" ionFocus=\"focus()\">\n\n            <ion-select interface=\"popover\" value=\"usd\"\n            formControlName=\"senderCurr\" style=\"color: white;\"\n            >\n              <ion-select-option value=\"usd\" selected=\"true\">USD</ion-select-option>\n              <ion-select-option value=\"ngn\">NGN</ion-select-option>\n              <ion-select-option value=\"cad\">CAD</ion-select-option>\n              <ion-select-option value=\"eur\">EUR</ion-select-option>\n            </ion-select>\n          </div>\n\n          <!-- Receiver Info -->\n          <div class=\"form-group flexContainer\">\n            <div class=\"ion-padding\">Receiver:</div>\n            <input type=\"text\" formControlName=\"receiverAddress\"\n            class=\"form-control inputField\" required=\"true\" ionFocus=\"focus()\">\n\n            <input type=\"number\" formControlName=\"receiverAmount\"\n            class=\"form-control inputFieldTwo disabled\" placeholder=\"Amount\"\n            ionFocus=\"focus()\" >\n\n            <ion-select interface=\"popover\"value=\"ngn\"\n            formControlName=\"receiverCurr\" style=\"color: white;\">\n              <ion-select-option value=\"usd\">USD</ion-select-option>\n              <ion-select-option value=\"ngn\">NGN</ion-select-option>\n              <ion-select-option value=\"cad\">CAD</ion-select-option>\n              <ion-select-option value=\"eur\">EUR</ion-select-option>\n            </ion-select>\n\n          </div>\n          <ion-textarea formControlName=\"remark\" cols=\"5\" rows=\"3\" placeholder=\"Remark\" class=\"remark\"></ion-textarea>\n          <button type=\"submit\" class=\"theme btn btn-primary\" [disabled]=\"isButtonDisabled\">Transfer</button>\n        </form>\n      </div>\n    </div>\n    <!-- Transfer History Chart -->\n    <div class=\"container\">\n      <div class=\"chart-box\" style=\"padding-top: 120px;\">\n        <canvas id=\"myChart\" aria-label=\"Loading Data...\" role=\"chart\">\n          <p>No content.</p>\n        </canvas>\n      </div>\n    </div>\n    <div class=\"head-title\">\n      <div class=\"container\">Recent Transfers</div>\n    </div>\n    <div class=\"transactionlist\">\n      <div class=\"container\">\n        <div class=\"transactions-box\" *ngFor=\"let transfer of transfers\"><div slot=\"header\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"2\">\n                <div class=\"left\">\n                  <div class=\"icon bg-success\">\n                    <img src=\"../../../assets/images/card.svg\" class=\"w-100 card-icon\" />\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col size=\"6\">\n                <div class=\"middle\">\n                  <div class=\"title\">{{transfer.toAddress}}</div>\n                  <div class=\"time ion-padding-top\">{{transfer.fromName}} - {{transfer.fromAddress}}</div>\n                </div>\n              </ion-col>\n              <ion-col size=\"4\">\n                <div class=\"ion-text-end\">\n                  <div class=\"price text-success\">{{transfer.amount | currency: getCurrencyIcon(transfer.currency)}}</div>\n                  <div class =\"time ion-padding-top\">{{toDate(transfer.date)}}</div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<app-footer></app-footer>\n");

/***/ }),

/***/ 9144:
/*!***************************************************************!*\
  !*** ./src/app/pages/transaction/transfer/transfer.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".scan-btn {\n  position: relative;\n  height: 130px;\n}\n\n.scan-btn .icon {\n  width: 50px;\n  margin: auto;\n}\n\n.scan-btn .icon img {\n  position: absolute;\n  width: 50px !important;\n  height: 50px;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n}\n\n.scan-btn .icon:after {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-bottom: 5px solid #007bff;\n  border-bottom-left-radius: 15px;\n  border-bottom-right-radius: 15px;\n  bottom: 0px;\n}\n\n.scan-btn .icon:before {\n  content: \"\";\n  position: absolute;\n  width: 200px;\n  height: 50px;\n  left: 0px;\n  right: 0px;\n  margin: auto;\n  border-left: 5px solid #007bff;\n  border-right: 5px solid #007bff;\n  border-top: 5px solid #007bff;\n  border-top-left-radius: 15px;\n  border-top-right-radius: 15px;\n  top: 0px;\n}\n\n.or-text {\n  font-size: 12px;\n  color: #FFF;\n  font-weight: 700;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.paymentoptions ul {\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n  width: 320px;\n  margin: auto;\n}\n\n.paymentoptions ul li {\n  display: inline-block;\n}\n\n.paymentoptions ul li a {\n  display: block;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n  margin-right: 15px;\n}\n\n.paymentoptions ul li:first-child a {\n  background: rgba(40, 167, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:nth-child(2) a {\n  background: rgba(220, 53, 69, 0.2) !important;\n}\n\n.paymentoptions ul li:last-child a {\n  margin-right: 0px;\n  background: rgba(255, 193, 7, 0.2) !important;\n}\n\n.paymentoptions ul li a:hover img {\n  transform: rotate(180deg);\n}\n\n.paymentoptions ul li a img {\n  width: 20px !important;\n  transition: all 0.3s ease-out 0s;\n}\n\n.flexContainer {\n  display: flex;\n}\n\n.inputField {\n  flex: 3;\n  border-top-right-radius: 0px;\n  border-bottom-right-radius: 0px;\n}\n\n.inputFieldTwo {\n  flex: 1;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 0px;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.ion-btn {\n  --background: #f79e1b ;\n}\n\n.form-box {\n  width: 80%;\n  margin: auto;\n  height: 200px;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.form-box .logo {\n  width: 60px;\n  margin: auto;\n}\n\n.social {\n  margin: 0px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding: 0px;\n  list-style: none;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\nul.social li {\n  display: inline-block;\n  margin-right: 10px;\n}\n\nul.social li a {\n  display: block;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  border: 1px solid #CCC;\n  line-height: 40px;\n  border-radius: 5px;\n  font-size: 14px;\n  cursor: pointer;\n}\n\nul.social li:first-child a {\n  background: #4267B2;\n  border: 0px;\n  color: #FFF;\n}\n\nul.social li:nth-child(2) a {\n  background: #00ACAA;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li:last-child a {\n  background: #0E76A8;\n  border: 0px;\n  color: #FFF;\n}\n\n.form-box ul.social li a:hover {\n  opacity: 0.8;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #EEE;\n}\n\n.form-box .forgot a {\n  text-align: center;\n  font-size: 14px;\n  color: #FFF;\n  opacity: 0.8;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #FFF;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n\n#senderAddress, .disabled {\n  color: black;\n}\n\n.balbox {\n  border: #ffc336 solid 3px;\n  margin: 40px auto;\n  width: 40%;\n}\n\n.balboxErr {\n  border: red solid 3px;\n  margin: 40px auto;\n  width: 40%;\n  color: red;\n}\n\n.remark {\n  text-align: left !important;\n  border: whitesmoke solid 1px;\n  border-radius: 8px;\n}\n\n#myChart {\n  background-color: rgba(85, 83, 52, 0.192) !important;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUFIOztBQUdBO0VBRUUsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQURGOztBQUdBO0VBRUcsY0FBQTtBQURIOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxvREFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoidHJhbnNmZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYW4tYnRuXG57XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5oZWlnaHQ6IDEzMHB4O1xufVxuLnNjYW4tYnRuIC5pY29uXG57XG4gICB3aWR0aDo1MHB4O1xuICAgbWFyZ2luOmF1dG87XG59XG4uc2Nhbi1idG4gLmljb24gaW1nXG57XG5cblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHRvcDogMHB4O1xuXHRib3R0b206IDBweDtcblx0bGVmdDogMHB4O1xuXHRyaWdodDogMHB4O1xuXHRtYXJnaW46IGF1dG87XG5cbn1cbi5zY2FuLWJ0biAuaWNvbjphZnRlclxue1xuICBjb250ZW50OlwiXCI7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB3aWR0aDoyMDBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIGxlZnQ6MHB4O1xuICByaWdodDowcHg7XG4gIG1hcmdpbjphdXRvO1xuICBib3JkZXItbGVmdDo1cHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLXJpZ2h0OjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItYm90dG9tOjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjE1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjE1cHg7XG4gIGJvdHRvbTowcHg7XG59XG4uc2Nhbi1idG4gLmljb246YmVmb3JlXG57XG4gIGNvbnRlbnQ6XCJcIjtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHdpZHRoOjIwMHB4O1xuICBoZWlnaHQ6NTBweDtcbiAgbGVmdDowcHg7XG4gIHJpZ2h0OjBweDtcbiAgbWFyZ2luOmF1dG87XG4gIGJvcmRlci1sZWZ0OjVweCBzb2xpZCAjMDA3YmZmO1xuICBib3JkZXItcmlnaHQ6NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci10b3A6NXB4IHNvbGlkICMwMDdiZmY7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MTVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MTVweDtcbiAgdG9wOjBweDtcbn1cbi5vci10ZXh0XG57XG4gIGZvbnQtc2l6ZToxMnB4O1xuICBjb2xvcjojRkZGO1xuICBmb250LXdlaWdodDo3MDA7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBtYXJnaW4tdG9wOjE1cHg7XG4gIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLnBheW1lbnRvcHRpb25zIHVsXG57XG4gIG1hcmdpbjowcHg7XG4gIHBhZGRpbmc6MHB4O1xuICBsaXN0LXN0eWxlOm5vbmU7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOmF1dG87XG59XG4ucGF5bWVudG9wdGlvbnMgdWwgbGlcbntcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG4ucGF5bWVudG9wdGlvbnMgdWwgbGkgYVxue1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OjUwcHg7XG4gIGxpbmUtaGVpZ2h0OjUwcHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgYm9yZGVyLXJhZGl1czo1cHg7XG4gIG1hcmdpbi1yaWdodDoxNXB4O1xuICB9XG4gIC5wYXltZW50b3B0aW9ucyB1bCBsaTpmaXJzdC1jaGlsZCBhXG4gIHtcbiAgYmFja2dyb3VuZDogcmdiYSg0MCwgMTY3LCA2OSwwLjIpICFpbXBvcnRhbnQ7XG5cbiAgfVxuICAgLnBheW1lbnRvcHRpb25zIHVsIGxpOm50aC1jaGlsZCgyKSBhXG4gIHtcbiAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCA1MywgNjksMC4yKSAhaW1wb3J0YW50O1xuICB9XG4gIC5wYXltZW50b3B0aW9ucyB1bCBsaTpsYXN0LWNoaWxkIGFcbiAge1xuICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xuXG5cdCAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE5MywgNywwLjIpICFpbXBvcnRhbnQ7XG4gIH1cbiAgIC5wYXltZW50b3B0aW9ucyB1bCBsaSBhOmhvdmVyIGltZ1xuICAge1xuICAgICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7XG4gICB9XG4ucGF5bWVudG9wdGlvbnMgdWwgbGkgYSBpbWdcbntcbiAgIHdpZHRoOjIwcHggIWltcG9ydGFudDtcbiAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0IDBzO1xufVxuXG4uZmxleENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dEZpZWxkIHtcbiAgZmxleDogMztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbn1cblxuLmlucHV0RmllbGRUd28ge1xuICBmbGV4OiAxO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi5pb24tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjc5ZTFiXG59XG5cblxuLmZvcm0tYm94XG57XG4gIHdpZHRoOjgwJTtcbiAgbWFyZ2luOmF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIC8vIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MHB4O1xuICBib3R0b206MHB4O1xuICBsZWZ0OjBweDtcbiAgcmlnaHQ6MHB4O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5mb3JtLWJveCAubG9nb1xue1xuICB3aWR0aDo2MHB4O1xuICBtYXJnaW46YXV0bztcbn1cblxuLnNvY2lhbFxue1xubWFyZ2luOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbnBhZGRpbmc6IDBweDtcbmxpc3Qtc3R5bGU6IG5vbmU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5tYXJnaW4tdG9wOiAxNXB4O1xubWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbnVsLnNvY2lhbCBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbnVsLnNvY2lhbCBsaSBhIHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Ym9yZGVyOiAxcHggc29saWQgI0NDQztcblx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG51bC5zb2NpYWwgbGk6Zmlyc3QtY2hpbGQgYSB7XG4gICAgYmFja2dyb3VuZDogIzQyNjdCMjtcbiAgICBib3JkZXI6IDBweDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cbnVsLnNvY2lhbCBsaTpudGgtY2hpbGQoMikgYSB7XG4gICAgYmFja2dyb3VuZDogIzAwQUNBQTtcbiAgICBib3JkZXI6IDBweDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cbi5mb3JtLWJveCB1bC5zb2NpYWwgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMEU3NkE4O1xuICAgIGJvcmRlcjogMHB4O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuLmZvcm0tYm94IHVsLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjg7XG59XG4uZm9ybS1ib3ggLm9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNFRUU7XG59XG4uZm9ybS1ib3ggLmZvcmdvdCBhIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuXHR0ZXh0LWRlY29yYXRpb246bm9uZTtcbn1cbi5mb3JtLWJveCAuZm9yZ290IGE6aG92ZXIge1xuICAgIGNvbG9yOiAjRUIwMDFCO1xufVxuLmZvb3Rlci1saW5rXG57XG4gICBmb250LXNpemU6MTRweDtcbiAgIGZvbnQtd2VpZ2h0OjQwMDtcbiAgIGNvbG9yOiNGRkY7XG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgIHBvc2l0aW9uOmZpeGVkO1xuICAgYm90dG9tOjIwcHg7XG4gICBsZWZ0OjBweDtcbiAgIHJpZ2h0OjBweDtcbn1cblxuLmZvb3Rlci1saW5rIGFcbntcbiAgY29sb3I6I2JlMjYyMztcbiAgY3Vyc29yOnBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xufVxuLmZvb3Rlci1saW5rIGE6aG92ZXJcbntcbiAgIGNvbG9yOiNmNzllMWI7XG59XG5cbiNzZW5kZXJBZGRyZXNzLCAuZGlzYWJsZWQge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5iYWxib3gge1xuICBib3JkZXI6ICNmZmMzMzYgc29saWQgM3B4O1xuICBtYXJnaW46IDQwcHggYXV0bztcbiAgd2lkdGg6IDQwJTtcbn1cblxuLmJhbGJveEVyciB7XG4gIGJvcmRlcjogcmVkIHNvbGlkIDNweDtcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIHdpZHRoOiA0MCU7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5yZW1hcmsge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogd2hpdGVzbW9rZSBzb2xpZCAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuI215Q2hhcnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg1LCA4MywgNTIsIDAuMTkyKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transaction_transfer_transfer_module_ts.js.map