import { Injectable } from '@angular/core';
import { Transaction, CryptoBuy } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transactions: Transaction[] = [];

  constructor() { }

  getTransactions(){
    return [...this.transactions];
  }

  makeTransaction(data: Transaction){
    const transaction: Transaction = {
      type: data.type.toUpperCase(),
      date: data.date ,
      transactionId: data.transactionId,
      currency: data.currency,
      fromAdress: data.fromAdress,
      toAdress: data.toAdress,
      amount: data.amount

    };
    console.log(transaction);
    this.transactions.unshift(transaction);
  }

  buyCrypto( data: CryptoBuy){
    const cryptoPurchase: CryptoBuy = {
    type: data.type.toUpperCase(),
    date: data.date,
    transactionId: data.transactionId,
    amount: data.amount,
    currency: data.currency,
    paymentAdress: data.paymentAdress
    };
    console.log(cryptoPurchase);

  }

  getWallets(){
    //Get list of user's wallets from database
    return [
      {
        id: 'ID Number(from db)',
        name: 'Wallet 1', //User Generated Name
        currency: 'CUR1',
        icon: 'Icon of currency',
        provider: 'Provider(Mastercard, etc)',
        address: 'Adress/Account Number of card 1 (received from backend)'
      },
      {
        id: 'ID Number 2',
        name: 'Wallet 2', //User Generated Name
        currency: 'CUR2',
        icon: 'Icon of currency',
        provider: 'Provider',
        address: 'Adress/Account Number of card 2 (received from backend)'
      },
      {
        id: 'ID Number 3',
        name: 'Wallet 3', //User Generated Name
        currency: 'CUR3',
        icon: 'Icon of currency',
        provider: 'Provider',
        address: 'Adress/Account Number of card 3 (received from backend)'
      },
    ];
  }
}
