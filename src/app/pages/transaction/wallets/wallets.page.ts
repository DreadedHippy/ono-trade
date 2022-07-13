import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Wallet } from 'src/app/models/wallet.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Subscription } from 'rxjs';
import {SubSink} from 'subsink';
@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.page.html',
  styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit, OnDestroy {

  wallets: Wallet[] = [];
  isLoading = true;
  slowNetwork = false;
  subs = new SubSink()

  constructor(
    private router: Router, private barcodeScanner: BarcodeScanner,
    public transSrv: TransactionsService
  ) { }




  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');


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
    this.subs.sink = this.transSrv.fetchWallets().subscribe( (data: {wallets: Wallet []}) => {
      this.wallets = data.wallets
      console.log(data);
      this.slowNetwork = false
      this.isLoading = false
    })
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

}
