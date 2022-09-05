import { Component, OnInit } from '@angular/core';
import { dbPlacedOrders } from 'src/app/models/transaction.model';
import { placedOrders } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';
import {SubSink} from 'subsink';


@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {

  constructor(
    private transSrv: TransactionsService
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
    this.subs.sink = this.transSrv.getPendingOffers().subscribe( (response: {result: dbPlacedOrders[]}) => {
      console.log(response)
      this.allPending = response.result
      this.pendingAdverts = response.result.filter( order => {
        order.advertiser == this.email
      })
      this.pendingOrders = response.result.filter( order => {
        order.customer == this.email
      })
    })
  }

  getCurrency(currency){
    return this.transSrv.getCurrencyIcon(currency)
  }

  toDate(arg){
    let rawDate = new Date(arg);
    return rawDate.toLocaleDateString('en-US', this.timeFormat)
  }



}
