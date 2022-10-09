import { AlertService } from './../../../services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/app/models/transaction.model';
import { SubSink } from 'subsink';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit, OnDestroy {


  mongoSDK = new ChartsEmbedSDK({
    baseUrl: environment.chartUrl,
    getUserToken: () => localStorage.getItem('token')
  });
  chart = this.mongoSDK.createChart({chartId: environment.chartId ,});
  subs = new SubSink()
  email = localStorage.getItem("email");
  walletId = this.transSrv.depWallet._id;
  chartedArray: any;
  label: any
  historyData: []
  walletBal: number = this.transSrv.depWallet.balance;
  enteredAmount: number = 0;
  transfers: Transaction [] = [];
  currency = this.transSrv.depWallet.currency

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
    senderAmount: new FormControl('', Validators.required),
    testField: new FormControl({value: '', disabled: true}, [Validators.required]),
    senderCurr: new FormControl(this.transSrv.depWallet.currency, Validators.required), //Wallet currency from server
    receiverAddress: new FormControl('', Validators.required),
    receiverAmount: new FormControl({value: 0, disabled: true}, Validators.required),
    receiverCurr: new FormControl('ngn', Validators.required),
    remark: new FormControl('')
  });

  transactionInfoFunding = new FormGroup({
    senderAmount: new FormControl('', Validators.required),
  })

  form: FormGroup;

  isLoading = false;
  sentCurr = 'usd';
  receivedCurr = 'usd';

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private barcodeScanner: BarcodeScanner,
    private transSrv: TransactionsService,
    private alertSrv: AlertService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    document.getElementById('fundingForm').style.display = "none" //Hide funding wallet form

    // hide mongoDB chart until finish Loading
    document.getElementById('mongoChart').style.display = "none"
    this.chart.render(document.getElementById('mongoChart'))
      .then(() => {this.chart.setFilter( {fromId: this.walletId} ).then(() => {
        document.getElementById('mongoChart').style.display = "block"})
      })
      .catch(() => window.alert('Chart failed to initialize'))

    //Change entered amount according to amount on either form input
    this.transactionInfo.get('senderAmount').valueChanges.subscribe(amount => {
      this.enteredAmount = amount;
    })
    this.transactionInfoFunding.get('senderAmount').valueChanges.subscribe(amount => {
      this.enteredAmount = amount;
    })
    this.isButtonDisabled = false;
    this.loadTransactions()
  }


  ionViewDidEnter() {this.loadTransactions()}

  ngOnDestroy() {this.subs.unsubscribe()}

  dashboardPage(){this.router.navigate(['dashboard'])}

  notificationsPage(){this.router.navigate(['notifications'])}

  profilePage(){this.router.navigate(['profile'])}

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
    this.isButtonDisabled = true;
    this.transSrv.makeTransaction(data).then((result: {message: string}) => {
      console.log('result', result)
      this.alertSrv.toast(result.message, 1000)
      this.router.navigate(['wallets'])
    }).catch(err => {
      console.log('Error', err.message)
    })
  }


  //Fetch transactions from backend as well as, create Transaction history array
  loadTransactions(){
    return new Promise((resolve, reject) => {
      this.subs.sink = this.transSrv.fetchTransactions().subscribe( (data: {transactions}) => {
        let transactions = data.transactions;
        transactions.reverse();
        this.transfers = transactions.filter(transaction => transaction.type == 'transfer')
        resolve('Loaded')
      })
    })
  }
  getCurrencyIcon(currName) { //Get's currency icon in UTF-8 encoding
    return this.transSrv.getCurrencyIcon(currName)
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
  }

  toFunding(){ //Displays form for transferring to funding wallet
    document.getElementById('externalForm').style.display = 'none';
    document.getElementById('fundingForm').style.display = 'block';
    this.transactionInfo.patchValue({senderAmount: ''});
    this.transactionInfoFunding.patchValue({senderAmount: ''});
  }

  toExternal(){ //Displays form for transferring to third party
    document.getElementById('externalForm').style.display = 'block';
    document.getElementById('fundingForm').style.display = 'none'
    this.enteredAmount = 0
    this.transactionInfo.patchValue({senderAmount: ''});
    this.transactionInfoFunding.patchValue({senderAmount: ''});
  }

  onTransferFunding(){ //Sends information to backend about funding wallet transfer
    let date = new Date;
    let transaction: Transaction = {
      type: 'transfer',
      date: date.toISOString(),
      fromId: this.transSrv.depWallet._id,
      fromAddress: this.transSrv.depWallet.address,
      toAddress: 'fundingWallet',
      currency: this.transSrv.depWallet.currency,
      amount: this.transactionInfoFunding.get('senderAmount').value,
      remark: '',
      fromName: this.transSrv.depWallet.name
    }
    console.log('Not Implemented');
    let data = {
      amount: this.transactionInfoFunding.get('senderAmount').value,
      currency: this.transSrv.depWallet.currency,
      transaction: transaction
    }
    this.transSrv.transferToFunding(data).subscribe(
      (response: {message: string}) => {
        console.log( response )
        this.router.navigate(['wallets'])
        this.alertSrv.toast(response.message, 1000)
      }, err => {
        console.log(err)
      }
    )
  }
}
