import { Injectable } from '@angular/core';
import { Transaction, CryptoBuy } from '../models/transaction.model';
import { environment } from '../../environments/environment';
import { Wallet } from '../models/wallet.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  baseUrl = environment.baseUrl
  private transactions: Transaction[] = [];
  private wallets: Wallet[] = []
  private walletsUpd = new Subject<Wallet[]>()

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
      this.wallets.push(walletInfo)
    }, error => {
      console.log(error)
    })
    this.wallets.push(walletInfo);
    this.walletsUpd.next([...this.wallets]);
    this.route.navigate(['/wallets'])
  }


  depWallet: Wallet
  useWallet(wallet, type){
    this.depWallet = wallet
    this.route.navigate([type])
  }


  fetchWallets(){
    const email = localStorage.getItem('email')
    const url = this.baseUrl + '/wallets?email=' + email
    return this.http.get(url)
  }


}
