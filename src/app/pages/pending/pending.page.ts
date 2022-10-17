import { AlertService } from 'src/app/services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { dbPlacedOrders } from 'src/app/models/transaction.model';
import { placedOrders } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import {SubSink} from 'subsink';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit, OnDestroy {

  constructor(
    private transSrv: TransactionsService,
    private alertSrv: AlertService
  ) { }

  allPending: dbPlacedOrders[]
  pendingAdverts: placedOrders[]
  pendingOrders: placedOrders[]
  email = localStorage.getItem('email')
  timeFormat: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  subs = new SubSink()
  ngOnInit(){
    this.loadPendingOrders()
  }

  loadPendingOrders(){
    this.subs.sink = this.transSrv.getPendingOffers().subscribe( (response: {result: dbPlacedOrders[]}) => {
      console.log(response)
      this.allPending = response.result
      this.allPending.reverse()
      this.pendingAdverts = response.result.filter( order => {
        order.advertiser == this.email
      })
      this.pendingOrders = response.result.filter( order => {
        order.customer == this.email
      })
      this.updateExpiredOrders(this.allPending)
    })
  }

  updateExpiredOrders(allPendingOrders){
    let orders = [...allPendingOrders]
    let expiredOrders = orders.filter(isExpired)

    function isExpired(order){
      let now = new Date()
      let dateCreated = new Date(order.createdAt)
      let timeLimit = order.timeLimit * 60 * 1000 //Time Limit in MilliSeconds
      let validTime = dateCreated.getTime() + timeLimit

      if(now.getTime() - validTime > 0 ){
        return true
      }
      else false
    }

    //TODO: Add order expiry
    console.log('Expired', expiredOrders)
  }

  getCurrency(currency){
    return this.transSrv.getCurrencyIcon(currency)
  }

  toDate(arg){
    let rawDate = new Date(arg);
    return rawDate.toLocaleDateString('en-US', this.timeFormat)
  }

  confirmTrade(tradeID){
    this.subs.sink = this.transSrv.advertiserConfirmOrder(tradeID)
    .subscribe((response: {message: string}) => {
      console.log(response)
      this.alertSrv.toast(response.message, 1000)
      this.loadPendingOrders()
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }



}
