import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit } from '@angular/core';
import { paymentMethod, peerOffer, placedOrders } from 'src/app/models/transaction.model';
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
  paymentInfo: paymentMethod
  peerTradeID= '000'

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
      offerID: this.offer._id,
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
    this.transSrv.makeTrade(data).subscribe(
      (response: {paymentInfo: paymentMethod, peerTradeID: string}) => {
        console.log(response)
        this.paymentInfo = response.paymentInfo
        document.getElementById("orderBtn").style.display = 'none'
        this.toggleCard()
        this.buyOrder.disable()
        console.log(response.peerTradeID) //ID of the created trade instance
        this.peerTradeID = response.peerTradeID
        const display = document.querySelector('#time');
        this.startTimer( this.offer.timeLimit * 60, display);
      }
    )
  }

  toggleCard(){ //Toggle the payment confirmation display card
    let card = document.getElementById("hiddenCard");
    card.classList.toggle('is-show')
  }

  startTimer(duration, display) {
    var start = Date.now(),
    diff,
    minutes,
    seconds;
    function timer() {
      // get the number of seconds that have elapsed since
      // startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (diff <= 0) {
        // add one second so that the count down starts at the full duration
        // example 05:00 not 04:59
        start = Date.now() + 1000;
      }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
  }


  customerConfirm(){
    this.transSrv.customerConfirmOrder(this.peerTradeID, this.offer)
    .subscribe((response: {message: string}) => {
      this.alertSrv.toast(response.message, 1000)
      console.log(response)
    }, err => {
      console.log('An Error Occurred', err)
    })
    this.toggleAdvertPendingCard();
  }

  toggleAdvertPendingCard(){
    let hiddenCard = document.getElementById("hiddenCard");
    hiddenCard.remove()
    let advertCard = document.getElementById("advertPendingCard");
    advertCard.classList.toggle('is-show');
  }

  cancelOrder(){
    this.transSrv.customerCancelOrder(this.peerTradeID, this.offer)
    .subscribe((response: {message: string}) => {
      this.alertSrv.toast(response.message, 1000)
      console.log(response)
    }, err =>{
      console.log('An Error Occurred', err)
    })
  }


}
