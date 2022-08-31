import { Component, OnInit } from '@angular/core';
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

  subs = new SubSink()
  ngOnInit() {
    this.subs.sink = this.transSrv.getPendingOffers().subscribe( response => {
      console.log(response)
    })
  }

}
