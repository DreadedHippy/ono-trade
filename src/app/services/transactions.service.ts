import { Injectable } from '@angular/core';
import { Transaction, CryptoBuy, peerOffer, newPeerOffer } from '../models/transaction.model';
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
    let result;
    const transaction: Transaction = {
      type: data.type.toUpperCase(),
      date: data.date ,
      fromId: data.fromId,
      currency: data.currency,
      fromAddress: data.fromAddress,
      fromName: data.fromName,
      toAddress: data.toAddress,
      remark: data.remark,
      amount: data.amount
    };
    const email = {email: localStorage.getItem('email')}
    const transactionData = Object.assign(data, email)
    this.transactions.unshift(transaction);
    const url = this.baseUrl + '/transactions/create'
    return new Promise (resolve => {
      this.http.post<{message: string, id: string}>(url, transactionData)
        .subscribe(response => {
          resolve(response);
          return response.message;
        }, error => {
          console.log(error)
          return error;
        })
    })
  }

  buyCrypto( data: CryptoBuy){
    const cryptoPurchase: CryptoBuy = {
    type: data.type.toUpperCase(),
    date: data.date,
    transactionId: data.transactionId,
    amount: data.amount,
    currency: data.currency,
    paymentAddress: data.paymentAddress
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


  depWallet: {
    _id: string
    name: string,
    address: string,
    currency: string,
    iconSrc: string,
    balance:number,
    transactions: []
  };

  selectedPeerOffer: any

  setpeerOffer(offer: peerOffer){
    console.log(offer.type)
    let type = offer.type
    this.selectedPeerOffer = offer
    this.route.navigate(['market/peer/' + type])
  }

  useWallet(wallet, type){
    this.depWallet = wallet
    this.route.navigate([type])
  }


  fetchTransactions(){
    const email = localStorage.getItem('email')
    const url = this.baseUrl + '/transactions?email=' + email
    return this.http.get(url)
  }

  fetchDeposits(){
    const email = localStorage.getItem('email')
    const url= this.baseUrl + '/transactions/deposits?email=' + email
    return this.http.get(url)
  }


  fetchWallets(){
    const email = localStorage.getItem('email')
    const url = this.baseUrl + '/wallets?email=' + email
    return this.http.get(url)
  }

  createPeerOffer(offer){
    let newOffer: newPeerOffer
    newOffer = {
      picSrc: localStorage.getItem('imageSrc'),
      name: localStorage.getItem('name'),
      timeLimit: offer.get('timeLimit').value,
      type: offer.get('offerType').value,
      fiatCurr: offer.get('fiatCurr').value,
      inStock: offer.get('inStock').value,
      upperLimit: offer.get('upperLimit').value,
      lowerLimit: offer.get('lowerLimit').value,
      price: offer.get('price').value,
      cryptoCurr: offer.get('cryptoCurr').value,
      paymentMethods: offer.get('paymentMethods').value
    }

    console.log(newOffer)
  }


}
