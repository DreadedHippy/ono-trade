import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { peerOffer, placedOrders } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  constructor(private transSrv: TransactionsService, private alertSrv: AlertService) { }
  offer
  cryptoAmt: number

  buyOrder = new FormGroup({
    orderAmount: new FormControl('', Validators.required),
    paymentMethod: new FormControl('', Validators.required)
  })

  ngOnInit() {
    this.offer = this.transSrv.selectedPeerOffer
  }

  getCurrIcon(currName){
    return this.transSrv.getCurrencyIcon(currName)
  }

  getPaymentMethodName(method){
    return this.transSrv.getPaymentMathodName(method)
  }

  onBuyOrderPlaced(){
    if(!this.buyOrder.valid){
      this.alertSrv.toast('Please fill all required fields', 1000);
      return;
    }
    console.log(this.buyOrder.value)
    let fiatCost = this.cryptoAmt * this.offer.price
    const data: placedOrders = {
      fromUser: localStorage.getItem('email'),
      toUser: this.offer.email,
      cryptoAmt: this.cryptoAmt,
      fiatAmt: fiatCost,
      paymentMethod: this.buyOrder.get('paymentMethod').value,
      status: 'pending'
    }


  }


}
