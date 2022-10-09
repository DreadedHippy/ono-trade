import { UtilityService } from './../../../services/utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Wallet, Funding } from 'src/app/models/wallet.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Subscription } from 'rxjs';
import {SubSink} from 'subsink';
import { type } from 'jquery';
@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.page.html',
  styleUrls: ['./wallets.page.scss'],
})

export class WalletsPage implements OnInit, OnDestroy {
  wallets: Wallet[] = [];
  allWallets = []
  isLoading = true;
  slowNetwork = false;
  subs = new SubSink()
  fundingWallets = []
  spotWallets = []

  constructor(
    private router: Router, private barcodeScanner: BarcodeScanner,
    private transSrv: TransactionsService,
    private utilSrv: UtilityService
  ) { }




  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  cash = [
    'ngn',
    'eur',
    'cad',
    'usd'
  ]


  ngOnInit() {
    this.slowConnect()
    this.loadWallets()
  }

  ionViewDidEnter(){
    this.slowConnect()
    this.loadWallets()
  }

  depositPage(wallet){
    this.transSrv.useWallet(wallet, 'deposit')
  }

  transferPage(wallet){
    this.transSrv.useWallet(wallet, 'transfer')
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

  loadWallets() {
    function isFundingWallet(wallet){
      if(wallet.type == 'funding'){
        return true
      }
      return false
    }

    function isSpotWallet(wallet){
      if(!wallet.type){
        return true
      }
      return false
    }

    this.subs.sink = this.transSrv.fetchWallets().subscribe( (data: {wallets: Wallet []}) => {
      this.allWallets = data.wallets;
      this.wallets = this.allWallets
      this.fundingWallets = data.wallets.filter(isFundingWallet)
      this.spotWallets = data.wallets.filter(isSpotWallet)
      console.log(this.fundingWallets)
      this.slowNetwork = false
      this.isLoading = false
    })
  }


  getCurrencyIcon(currName) { //Get's currency in UTF-8 encoding
    switch(currName){
      case 'ngn':
        return '₦'
        break;
      case 'usd':
        return '$'
        break;
      case 'cad':
        return 'C$'
        break;
      case 'eur':
        return '€'
        break;
      default:
        return currName
      }
    }

  slowConnect(){
    setTimeout(() => {
      this.slowNetwork = true
    }, 5000);
  }


  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
    // success. barcodeData is the data returned by scanner
    }).catch(err => {
    // error
    });
  }

  newWallet(){
    this.router.navigate(['wallets/new'])
  }


  showWallets(type){
    switch(type){
      case 'all':
        this.wallets = this.allWallets;
        break
      case 'funding':
        this.wallets = this.fundingWallets;
        break
      case 'spot':
        this.wallets = this.spotWallets;
        break
    }
  }

  toDate(arg){
    let rawDate = arg.date
    return this.utilSrv.toDate(rawDate)
  }

  getAmount(transaction){
    return transaction.currency.toUpperCase() + ' ' + transaction.amount
  }

  getFromID(transaction){
    return transaction.fromId
  }

}
