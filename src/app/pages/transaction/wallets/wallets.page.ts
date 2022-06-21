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
export class WalletsPage implements OnInit, OnDestroy {

  wallets: Wallet[] = [];
  private walletsSub: Subscription;

  constructor(
    private router: Router, private barcodeScanner: BarcodeScanner,
    public transSrv: TransactionsService
  ) { }

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');


  ngOnInit() {
    this.wallets = this.transSrv.getWallets()
    this.walletsSub = this.transSrv.getWalletsUpdateListener()
    .subscribe((wallet: Wallet[]) => {
      this.wallets = wallet
    });
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

  ngOnDestroy(){
    this.walletsSub.unsubscribe();
  }

}
