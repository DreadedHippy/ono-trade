import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Platform } from '@ionic/angular';
import { CryptoBuy } from 'src/app/models/transaction.model';
import { AlertService } from 'src/app/services/alert.service';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  coin: string;
  wallets = this.transactionsService.getWallets();
  today = new Date();
  ios = this.platform.is('ios');
  android = this.platform.is('android');

  customCurrencyOptions: any = { //Custom options for the dropdown
    message: 'Select a currency',
    translucent: true
  };

  customCoinOptions: any = {
    message: 'Select a currency',
    translucent: true
  };

  constructor(
    private transactionsService: TransactionsService,
    public alertSrv: AlertService,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.coin = 'Bitcoin'; //Dynamic text based on the selected coin to be bought: DONE
  }

  buyCrypto(form: NgForm){
    if(form.invalid){
      this.error();
      return;
    }
    const data: CryptoBuy = {
      type: form.value.coin,
      date: this.today.getFullYear()+'-'+
        (this.today.getMonth()+1)+'-'+ this.today.getDate() +
        ':' + this.today.getHours()+
        ':' + this.today.getMinutes()+
        ':'+ this.today.getSeconds(),
      transactionId:  null,//Auto-generated
      amount: form.value.paymentAmount,
      currency: form.value.paymentCurrency,
      paymentAdress: form.value.wallet
    };

    this.transactionsService.buyCrypto(data);
  }

  async error() {
    this.alertSrv.toast('Invalid Credentials', 3000);
  }

}
