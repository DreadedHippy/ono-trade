import { AlertService } from './../../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  marketPrices = {
    ngn: 0.002382246,
    usd: 1,
    eur: 1.048365,
    cad: 0.77365
  };

  walletBal: number = this.transSrv.depWallet.balance;
  enteredAmount: number = 0;

  transfers = [
    {
      to: 'Address1',
      date: '13-09-2021',
      amount: 20,
    },
    {
      to: 'Address2',
      date: '15-10-2021',
      amount: 200
    },
    {
      to: 'Address3',
      date: '12-11-2021',
      amount: 4600
    }
  ];


  transactionInfo = new FormGroup({
    senderAddress: new FormControl({value: this.transSrv.depWallet.address, disabled: true}, [Validators.required]), //Wallet adress from server
    senderAmount: new FormControl(0, Validators.required),
    testField: new FormControl({value: '', disabled: true}, [Validators.required]),
    senderCurr: new FormControl(this.transSrv.depWallet.currency, Validators.required), //Wallet currency from server
    receiverAddress: new FormControl('', Validators.required),
    receiverAmount: new FormControl({value: 0, disabled: true}, Validators.required),
    receiverCurr: new FormControl('ngn', Validators.required)
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

  onTransfer(){
    if(this.walletBal <= this.enteredAmount){
      this.alertSrv.toast('Invalid Amount', 3000)
      return
    }
    if(!(this.transactionInfo.valid)){
      this.alertSrv.toast('Please fill required fields');
      return;
    }
    console.log(this.transactionInfo.valid);
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
    // success. barcodeData is the data returned by scanner
    }).catch(err => {
    // error
    });
  }

  toCurrency(num){
    return num.toFixed(2);
    // [value]="(receiverAmountInput.value * marketPrices[receiverCurrency.value] * 1/marketPrices[senderCurrency.value]).toFixed(2)
  }


}
