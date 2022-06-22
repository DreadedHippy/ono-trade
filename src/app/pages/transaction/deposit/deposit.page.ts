import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Wallet } from 'src/app/models/wallet.model';
import { TransactionsService } from 'src/app/services/transactions.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  wallet: Wallet

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
    private transSrv: TransactionsService
    ) {}

  ngOnInit() {
    this.wallet = this.transSrv.depWallet
    console.log(this.wallet)
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
    // success. barcodeData is the data returned by scanner
    }).catch(err => {
    // error
    });
  }

  copyText(){
    navigator.clipboard.writeText(this.wallet.address)
  }

}
