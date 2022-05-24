import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { Transaction } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {

  wallets = [];
  cardIndex = 0;
  ionicNamedColor = 'dark';
  today = new Date();


  constructor(
    private transactionsService: TransactionsService,
    public alertSrv: AlertService,
  ) { }

  ngOnInit() {
    this.wallets = this.transactionsService.getWallets();
  }



  swapCardLeft(){ //Swap between cards to use
    if(this.cardIndex <= 0){
      this.cardIndex= this.wallets.length - 1;
    }else {
      this.cardIndex--;
    }

  }

  swapCardRight(){  //Swap between cards to use
    if(this.cardIndex >= this.wallets.length - 1){
      this.cardIndex = 0;
    }else {
      this.cardIndex++;
    }
  }

  withdrawConfirmBtnChange(){
    if(this.ionicNamedColor === 'dark') {
      this.ionicNamedColor = 'success';
    }
  }

  makeWithdrawal(form: NgForm){ //The actual withdraw function
    this.withdrawConfirmBtnChange();
    if(form.invalid){
      this.error();
      return;
    }
    const data: Transaction = {
      type: 'withdraw',
      date: this.today.getFullYear()+'-'+
      (this.today.getMonth()+1)+'-'+ this.today.getDate() +
      ':' + this.today.getHours()+
      ':' + this.today.getMinutes()+
      ':'+ this.today.getSeconds(),
      transactionId: null,
      currency: this.wallets[this.cardIndex].currency,
      fromAdress: this.wallets[this.cardIndex].address,
      toAdress: form.value.addressTo,
      amount: form.value.amount
    };
    // console.log(data);
    this.transactionsService.makeTransaction(data);
    form.reset();

  }

  async error() {
    this.alertSrv.toast('Invalid Credentials', 3000);
  }



}
