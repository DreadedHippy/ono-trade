import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';
import { peerOffer } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.page.html',
  styleUrls: ['./peer.page.scss'],
})
export class PeerPage implements OnInit {

  offers = [
    {
      picSrc: 'www.google.com',
      name: 'User 1',
      ratings: 4.0, //0.0 - 5.0, 5-star scale
      tradesCount: 900,
      timeLimit: 15, //Time limit in minutes
      percentageCompleted: 90, //Percentage of trades completed
      type: 'sell', //What type of offer is made by the trader
      price: 1, //Asking price of the trader in bank currency
      acceptedCurr: 'usd', //Bank Currency accepted by the Peer offering the crypto
      inStock: 14000, //Amount of crypto left in stock
      cryptoCurr: 'usdc', //The Cryptocurrency being offered
      upperLimit: 10000, //Maximum amount of crypto that can be bought at a time
      lowerLimit: 5000, //Minimum amount of crypto that can be bought a time.
      paymentMethods: [
        'zel', 'ppl', 'pst'
      ]
    },
    {
      picSrc: 'www.google.com/newman',
      name: 'Ezreal',
      ratings: 4.9, //0.0 - 5.0, 5-star scale
      tradesCount: 728,
      timeLimit: 15, //Time limit in minutes
      price: 1, //Asking price of the trader in bank currency
      percentageCompleted: 95, //Percentage of trades completed
      type: 'buy', //what type of offer is made by the trader
      acceptedCurr: 'ngn', //Bank Currency accepted by the Peer offering the crypto
      inStock: 300000, //Amount of crypto left in stock
      cryptoCurr: 'eth', //The Cryptocurrency being offered
      upperLimit: 100000, //Maximum amount of crypto that can be bought at a time
      lowerLimit: 80000, //Minimum amount of crypto that can be bought a time.
      paymentMethods:[
        'zel', 'ppl'
      ]
    },

    {
      picSrc: 'www.google.com',
      name: 'User 1',
      ratings: 2.7, //0.0 - 5.0, 5-star scale
      tradesCount: 900, //Number of trades,
      timeLimit: 15, //Time limit in minutes
      percentageCompleted: 90, //Percentage of trades completed
      type: 'sell', //what type of offer is made by the trader
      price: 1, //Asking price of the trader in bank currency per unit of crypto
      acceptedCurr: 'usd', //Bank Currency accepted by the Peer offering the crypto
      inStock: 14000, //Amount of crypto left in stock
      cryptoCurr: 'btc', //The Cryptocurrency being offered
      upperLimit: 10000, //Maximum amount of crypto that can be bought at a time
      lowerLimit: 5000, //Minimum amount of crypto that can be bought a time.
      paymentMethods: [
        'ppl', 'pst'
      ]
    }
  ]

  constructor(
    private router: Router,
    private transSrv: TransactionsService
  ) {}

  ngOnInit() {
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
    console.log(offer)
    this.transSrv.setpeerOffer(offer)
  }

}
