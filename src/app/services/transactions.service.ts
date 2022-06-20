import { Injectable } from '@angular/core';
import { Transaction, CryptoBuy } from '../models/transaction.model';
import { environment } from 'src/environments/environment';
import { Wallet } from '../models/wallet.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private transactions: Transaction[] = [];
  baseUrl = environment.baseUrl

  constructor(
    private http: HttpClient,
    private route: Router
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
    this.http.post<{wallet: Wallet[], message: string}>(url , walletData)
    .subscribe(response => {
      window.alert(response.message);
      console.log(response)
    }, error => {
      console.log(error)
    })

    this.route.navigate(['/wallets'])
  }

  getWallets(){
    const url = this.baseUrl + '/wallets'
    const email = localStorage.getItem('email')
    this.http.get<{ message: string; wallets: any }>(url)
    .subscribe(response => {
      return response;
    })
  }
}
