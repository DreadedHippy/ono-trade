import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Wallet } from 'src/app/models/wallet.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.page.html',
  styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit {

  wallets: Wallet[] = [];
  fetchedWallets: any;
  private walletsSub: Subscription;
  isLoading = true

  constructor(
    private router: Router, private barcodeScanner: BarcodeScanner,
    public transSrv: TransactionsService
  ) { }

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');


  ngOnInit() {
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
    this.transSrv.fetchWallets().subscribe( data => {
      console.log(data);
      this.isLoading = false
      this.fetchedWallets = data;
      this.wallets = this.fetchedWallets.wallets
    })
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
