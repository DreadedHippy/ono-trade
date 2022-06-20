import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

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

  transfers = [
    {
      to: 'Adress1',
      date: '13-09-2021',
      amount: 20,
    },
    {
      to: 'Adress2',
      date: '15-10-2021',
      amount: 200
    },
    {
      to: 'Adress3',
      date: '12-11-2021',
      amount: 4600
    }
  ];

  transactionInfo = new FormGroup({
    senderAddress: new FormControl('', Validators.required),
    senderAmount: new FormControl('', Validators.required),
    senderCurr: new FormControl('ngn', Validators.required),
    receiverAddress: new FormControl('', Validators.required),
    receiverAmount: new FormControl('', Validators.required),
    receiverCurr: new FormControl('ngn', Validators.required)
  });

  form: FormGroup;

  isLoading = false;
  sentCurr = 'usd';
  receivedCurr = 'usd';


  constructor( private router: Router, private fb: FormBuilder,
    private barcodeScanner: BarcodeScanner,
  ) { }

  ngOnInit() {
  }

  dashboardPage()
  {
   this.router.navigate(['dashboard']);
  }
   notificationsPage()
  {
  this.router.navigate(['notifications']);
  }
  profilePage()
  {
	  this.router.navigate(['profile']);
  }

  onTransfer(){
    console.log(this.transactionInfo.valid);
    console.warn(this.transactionInfo.value);
    console.log(this.transactionInfo.get('senderAddress').value);
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
