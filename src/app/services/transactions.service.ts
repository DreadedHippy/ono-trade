import { Injectable } from '@angular/core';
import { Transaction, CryptoBuy } from '../models/transaction.model';
import { environment } from 'src/environments/environment';
import { Wallet } from '../models/wallet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transactions: Transaction[] = [];
  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
  ) { }

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

  createWallet(walletInfo: Wallet){
    const url = this.baseUrl + '/wallets/create'
    const email = {email: localStorage.getItem('email')}
    const walletData = Object.assign(walletInfo, email)

    this.http.post<{wallet: Wallet[]}>(url , walletData)
    .subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    }
  )
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
