import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transactions: Transaction[];

  constructor() { }

  getTransactions(){
    return [...this.transactions];
  }

  makeTransaction(type){
    const transaction: Transaction = {
      type,
      date: Date.now(),
      id: null
    };
    this.transactions.unshift(transaction);
  }
}
