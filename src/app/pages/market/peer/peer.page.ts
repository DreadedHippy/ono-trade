import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { peerOffer } from 'src/app/models/transaction.model';
import {SubSink} from 'subsink';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.page.html',
  styleUrls: ['./peer.page.scss'],
})
export class PeerPage implements OnInit, OnDestroy {

  peerOffers: peerOffer[] = []
  offers: peerOffer[] = [
  ]
  subs = new SubSink()

  constructor(
    private router: Router,
    private transSrv: TransactionsService
  ) {}

  ngOnInit() {
    this.loadOffers()
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe
  }

  loadOffers(){
    this.subs.sink = this.transSrv.getPeerOffers().subscribe((response: {offers: peerOffer[]}) => {
      console.log(response.offers)
      this.peerOffers = response.offers
    })
  }

  ratingsStar(rating: number){
    if(rating >= 4.9){
      return ['star','star','star','star','star']
    }
    if(rating >= 4.5){
      return['star','star','star','star','star-half']
    }
    if(rating >= 4.0){
      return ['star','star','star','star','star-outline']
    }
    if(rating >= 3.5){
      return ['star','star','star','star-half','star-outline']
    }
    if(rating >= 3.0){
      return ['star','star','star','star-outline','star-outline']
    }
    if(rating >= 2.5){
      return ['star','star','star-half','star-outline','star-outline']
    }
    if(rating >= 2.0){
      return ['star','star','star-outline','star-outline','star-outline']
    }
    if(rating >= 1.5){
      return ['star','star-half','star-outline','star-outline','star-outline']
    }
    if(rating >= 1.0){
      return ['star','star-outline','star-outline','star-outline','star-outline']
    }
  }

  newPeerOffer(){
    this.router.navigate(['market/peer/new'])
  }

  buyPage(offer){
    this.transSrv.setPeerOffer(offer)
  }

  pendingOffers(){
    this.router.navigate(['pending'])
  }

  getPaymentMethodName(arg){
    return this.transSrv.getPaymentMethodName(arg)
  }

  getMethodColor(method){
    return this.transSrv.getMethodColor(method)
  }

  getCurrencyIcon(currency){
    return this.transSrv.getCurrencyIcon(currency)
  }

}
