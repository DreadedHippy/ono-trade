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

    if(this.cryptoAmt < this.offer.lowerLimit){
      this.alertSrv.toast('Amount too low', 1000);
      return;
    }
    if(this.cryptoAmt > this.offer.upperLimit){
      this.alertSrv.toast('Amount exceeds limit', 1000);
      return;
    }
    let fiatCost = this.cryptoAmt * this.offer.price
    const data: placedOrders = {
      advertiser: this.offer.email,
      advertType: this.offer.type,
      customer: localStorage.getItem('email'),
      cryptoCurr: this.offer.cryptoCurr,
      cryptoAmt: this.cryptoAmt,
      fiatCurr: this.offer.fiatCurr,
      fiatAmt: fiatCost,
      paymentMethod: this.buyOrder.get('paymentMethod').value,
      status: 'pending'
    }

    this.transSrv.placeOrder(data).subscribe(response => {
      console.log(response)
    })


  }


}
