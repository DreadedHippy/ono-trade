import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction.model';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  title = 'History';
  transactions: Transaction[] = this.transactionsService.getTransactions();

  constructor(
    private transactionsService: TransactionsService
  ) { }

  ngOnInit() {
  }

  //TO BE IMPLEMENTED LATER

  // copyCardAdress(){
  //   navigator.clipboard.writeText(this.receivedAdress);
  // }

}
