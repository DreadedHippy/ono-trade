import { AlertService } from './../../../services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Transaction } from 'src/app/models/transaction.model';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit, OnDestroy {

  subs = new SubSink()
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
    this.loadTransactions()
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

  async onTransfer(){
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


  //Fetch transactions from backend
  loadTransactions(){
    this.subs.sink = this.transSrv.fetchTransactions().subscribe( (data: {transactions}) => {
      console.log(data.transactions)
      let transactions = data.transactions;
      transactions.reverse();
      this.transfers = transactions.filter(transaction => transaction.type == 'transfer')
    })
  }

  getCurrencyIcon(currName) {
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
