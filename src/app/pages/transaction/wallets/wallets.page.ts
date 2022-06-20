import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.page.html',
  styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit {

  wallets = [
    {
      name: 'user-generated name',
      address: 'wallet address',
      currency: 'usd',
      iconSrc: 'url of the  currency icon',
      balance: 350000000000.00,

      transactions: [
        {
          type: 'from', //could be from or to
          adress: 'from-or-toAddress',
          amount: '40.00',
          date: '20-11-2021', //Date to string
          time: '03:30 pm', //time in 12 hr format
          remark: '' //Empty string if Null
        },
        {
          type: 'to', //could be from or to
          adress: 'from-or-toAddress',
          amount: '67.19',
          date: '25-03-2021', //Date to string
          time: '03:14 am', //time in 12 hr format
          remark: 'Shoprite Purchase' //Empty string if Null
        },
        {
          type: 'from', //could be from or to
          adress: 'from-or-toAddress',
          amount: '25.00',
          date: '20-01-2022', //Date to string (dd-mm-yyyy)
          time: '04:12 pm', //time in 12 hr format
          remark: '' //Empty string if Null
        },
      ]
    },
    {
      name: 'user-generated name 2',
      address: 'wallet address222',
      currency: 'btc',
      iconSrc: 'url of the  currency icon',
      balance: 13.00,
      transactions: [
        {
          type: 'from', //could be from or to
          adress: 'from-or-toAddress',
          amount: '40.00',
          date: '20-11-2021', //Date to string
          time: '03:30 pm', //time in 12 hr format
          remark: '' //Empty string if Null
        },
        {
          type: 'to', //could be from or to
          adress: 'from-or-toAddress',
          amount: '67.19',
          date: '25-03-2021', //Date to string
          time: '03:14 am', //time in 12 hr format
          remark: 'Shoprite Purchase' //Empty string if Null
        },
        {
          type: 'from', //could be from or to
          adress: 'from-or-toAddress',
          amount: '25.00',
          date: '20-01-2022', //Date to string (dd-mm-yyyy)
          time: '04:12 pm', //time in 12 hr format
          remark: '' //Empty string if Null
        },
      ]
    },
    {
      name: 'user-generated name 3',
      address: 'wallet address 333',
      currency: 'ngn',
      iconSrc: 'url of the  currency icon',
      balance: 4.39,

      transactions: [
        {
          type: 'from', //could be from or to
          adress: 'from-or-toAddress',
          amount: '40.00',
          date: '20-11-2021', //Date to string
          time: '03:30 pm', //time in 12 hr format
          remark: '' //Empty string if Null
        },
        {
          type: 'to', //could be from or to
          adress: 'from-or-toAddress',
          amount: '67.19',
          date: '25-03-2021', //Date to string
          time: '03:14 am', //time in 12 hr format
          remark: 'Shoprite Purchase' //Empty string if Null
        },
        {
          type: 'from', //could be from or to
          adress: 'from-or-toAddress',
          amount: '25.00',
          date: '20-01-2022', //Date to string (dd-mm-yyyy)
          time: '04:12 pm', //time in 12 hr format
          remark: '' //Empty string if Null
        },
      ]
    }
  ];

  constructor(
    private router: Router, private barcodeScanner: BarcodeScanner,
  ) { }

  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');


  ngOnInit() {
   document.body.classList.toggle('dark', true);
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

}
