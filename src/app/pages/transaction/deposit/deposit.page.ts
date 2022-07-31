import { AlertService } from './../../../services/alert.service';
import { SubSink } from 'subsink';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Transaction } from 'src/app/models/transaction.model';
import { Wallet } from 'src/app/models/wallet.model';
import { TransactionsService } from 'src/app/services/transactions.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit, OnDestroy {
  wallet: Wallet
  deps: Transaction[];
  subs = new SubSink();
  timeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  deposits = [
    {
      from: 'Adress1',
      date: '13-09-2021',
      amount: 20,
    },
    {
      from: 'Adress2',
      date: '15-10-2021',
      amount: 200
    },
    {
      from: 'Adress3',
      date: '12-11-2021',
      amount: 4600
    }
  ];

  constructor( public router: Router, private barcodeScanner: BarcodeScanner,
    private transSrv: TransactionsService,
    private alertSrv: AlertService
    ) {}

  ngOnInit() {
    this.wallet = this.transSrv.depWallet
    console.log(this.wallet);
    this.loadDeposits()
  }

  ionViewDidEnter(){
    this.loadDeposits()
  }


  loadDeposits(){
    return new Promise((resolve, reject)=>{
      this.subs.sink = this.transSrv.fetchDeposits().subscribe((data: {deposits}) => {
        console.log(data)
        let deposits = data.deposits
        deposits.reverse();
        this.deps = deposits;
      })
    })
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
    // success. barcodeData is the data returned by scanner
    }).catch(err => {
    // error
    });
  }

  copyText(){
    navigator.clipboard.writeText(this.wallet.address);
    this.alertSrv.toast('Copied', 500);
  }


  toDate(arg){ //CONVERT RAW DATE TO REGULAR, UNDERSTANDABLE DATE
    let rawDate = new Date(arg)
    return rawDate.toLocaleDateString('en-US', this.timeFormat)
  }

  getCurrencyIcon(currName) { //Get's currency in UTF-8 encoding
    switch(currName){
      case 'ngn':
        return '₦'
        break;
      }
    }

}
