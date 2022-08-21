import { Component, OnInit } from '@angular/core';
import { peerOffer } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  constructor(private transSrv: TransactionsService) { }
  offer: peerOffer

  ngOnInit() {
    this.offer = this.transSrv.selectedPeerOffer
  }

}