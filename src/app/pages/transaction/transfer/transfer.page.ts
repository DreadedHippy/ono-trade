import { AlertService } from './../../../services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/app/models/transaction.model';
import { SubSink } from 'subsink';
import {
  Chart,
  ChartType,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit, OnDestroy {

  subs = new SubSink()
  chartedArray: any;
  label: any
  historyData: []
  data = {
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
      data: [0, 0,0,0,0,0,0,0,0],
      fill: false
    }]
  };
  config = {
    type: 'bar' as ChartType,
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
  marketPrices = {
    ngn: 0.002382246,
    usd: 1,
    eur: 1.048365,
    cad: 0.77365
  };
  walletBal: number = this.transSrv.depWallet.balance;
  enteredAmount: number = 0;
  transfers: Transaction [] = []

  timeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };
  isButtonDisabled=false
  transactionInfo = new FormGroup({
    senderAddress: new FormControl({value: this.transSrv.depWallet.address, disabled: true}, [Validators.required]), //Wallet adress from server
    senderAmount: new FormControl(0, Validators.required),
    testField: new FormControl({value: '', disabled: true}, [Validators.required]),
    senderCurr: new FormControl(this.transSrv.depWallet.currency, Validators.required), //Wallet currency from server
    receiverAddress: new FormControl('', Validators.required),
    receiverAmount: new FormControl({value: 0, disabled: true}, Validators.required),
    receiverCurr: new FormControl('ngn', Validators.required),
    remark: new FormControl('', Validators.required)
  });

  form: FormGroup;

  isLoading = false;
  sentCurr = 'usd';
  receivedCurr = 'usd';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private barcodeScanner: BarcodeScanner,
    private transSrv: TransactionsService,
    private alertSrv: AlertService
  ) { }

  ngOnInit() {
    this.transactionInfo.get('senderAmount').valueChanges.subscribe(amount => {
      this.enteredAmount = amount;
    })
    this.isButtonDisabled = false;
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(canvas,this.config);
    this.loadTransactions().then((result: [])=> {
      myChart.data.datasets[0].data = result
      myChart.update()
    })
  }


  ionViewDidEnter(){
    this.loadTransactions()
  }

  ngOnDestroy(){
    this.subs.unsubscribe()
  }

  dashboardPage(){
    this.router.navigate(['dashboard']);
  }

  notificationsPage(){
    this.router.navigate(['notifications']);
  }

  profilePage(){
    this.router.navigate(['profile']);
  }

  toDate(arg){ //CONVERT RAW DATE TO REGULAR, UNDERSTANDABLE DATE
    let rawDate = new Date(arg)
    return rawDate.toLocaleDateString('en-US', this.timeFormat)
  }

  async onTransfer(){ //Submits the entered information to the backend
    if(this.walletBal <= this.enteredAmount){
      this.alertSrv.toast('Invalid Amount', 3000)
      return
    }
    if(!(this.transactionInfo.valid)){
      this.alertSrv.toast('Please fill required fields');
      return;
    }
    let date = new Date
    let data: Transaction= {
      type: 'transfer',
      date: date.toISOString(),
      fromId: this.transSrv.depWallet._id,
      fromAddress: this.transSrv.depWallet.address,
      toAddress: this.transactionInfo.get('receiverAddress').value,
      currency: this.transactionInfo.get('senderCurr').value,
      amount: this.enteredAmount,
      remark: this.transactionInfo.get('remark').value,
      fromName: this.transSrv.depWallet.name
    }
    console.log(this.transactionInfo.valid);
    this.isButtonDisabled = true;
    this.transSrv.makeTransaction(data).then( (result: {message: string}) => {
      console.log('result', result)
      this.alertSrv.toast(result.message, 5000)
      this.router.navigate(['wallets'])
    });
  }


  //Fetch transactions from backend as well as, create Transaction history array
  loadTransactions(){
    return new Promise((resolve, reject) => {
      this.subs.sink = this.transSrv.fetchTransactions().subscribe( (data: {transactions}) => {
        let transactions = data.transactions;
        transactions.reverse();
        this.transfers = transactions.filter(transaction => transaction.type == 'transfer')
        let transferHistory = transactions.filter(transaction => transaction.type == 'transfer')
        let mappedArray = transferHistory.map(this.transferHistoryMapping)
        let chartedArray = this.transferHistoryCharting(mappedArray);
        let labels = this.getLabels();
        let final = this.getData(chartedArray, labels)
        resolve(final)
      })
    })
  }

  transferHistoryMapping(record){ //Maps backend array to new array passed round in the frontend
    let day = new Date(record.date)
    const date = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate())).getDate();
    const month = new Date(Date.UTC(day.getFullYear(), day.getMonth(), day.getDate()))
    return ({date: date + '-' + month.toLocaleDateString('en-US', {month: 'short'}), amount: record.amount})
  }

  transferHistoryCharting(array){ //Converts mapped backend array to array usable by the chart constructor
    let newArr = []
    let dates = array.map( elem => elem.date)
    for(let i = 0; i < array.length; i++){
      if(!newArr.some((element) => element.date == dates[i])){
        newArr.push(array[i])
      } else if(newArr.some((element) => element.date == dates[i])){
        let foundArray = newArr.find(element => element.date == dates[i])
        let newArrAmount = Number(newArr[newArr.indexOf(foundArray)].amount)
        let oldArrAmount = Number(array[i].amount);
        let totalAmount = newArrAmount + oldArrAmount;
        newArr[newArr.indexOf(foundArray)].amount = totalAmount;
      }
    }
    return newArr;
  }

  getLabels(){ //Get previous 30 days and use as labels in bar chart
    let newArray = []
    let today = new Date();
    for(let daysAgo = 0; daysAgo <=30; daysAgo++){
      const date = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() - daysAgo)).getDate();
      const month = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate() - daysAgo))
      newArray.unshift(date + '-' + month.toLocaleDateString('en-US', {month: 'short'}))
    }
    return newArray;
  }

  getData(transactionData, datesData){ //Finalizes the formation of data array to be used with in chart
    let finalArr = [];
    for(let i= 0; i <= datesData.length - 1; i++){
      if(transactionData.some((element) => element.date == datesData[i])){
        let foundArray = transactionData.find(element => element.date == datesData[i])
        let foundIndex = transactionData.indexOf(foundArray)
        let foundAmount = transactionData[foundIndex].amount
        finalArr.push(foundAmount)
      } else if(!transactionData.some((element) => element.date == datesData[i])){
        finalArr.push(0)
      }
    }
    return finalArr
  }


  getCurrencyIcon(currName) { //Get's currency in UTF-8 encoding
  switch(currName){
    case 'ngn':
      return '₦'
      break;
    }
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      // success. barcodeData is the data returned by scanner
    }).catch(err => {
      // error
    });
  }

  toCurrency(num){ //SETS TO TWO DECIMAL PLACE
    return num.toFixed(2);
    // [value]="(receiverAmountInput.value * marketPrices[receiverCurrency.value] * 1/marketPrices[senderCurrency.value]).toFixed(2)
  }
}
