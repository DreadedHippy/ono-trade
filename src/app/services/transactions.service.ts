import { Injectable } from '@angular/core';
import { Transaction, CryptoBuy, peerOffer, newPeerOffer, paymentMethod } from '../models/transaction.model';
import { environment } from '../../environments/environment';
import { Wallet, Funding } from '../models/wallet.model';
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

  setPeerOffer(offer: peerOffer){
    console.log(offer.type)
    let type
    if(offer.type == 'sell'){
      type = 'buy'
    }
    if(offer.type == 'buy'){
      type = 'sell'
    }
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
    const url = this.baseUrl + '/peer/create'
    let email = {email: localStorage.getItem('email')};
    let newOffer = {
      name: localStorage.getItem('name'),
      picSrc: localStorage.getItem(''),
      timeLimit: parseInt(offer.get('timeLimit').value),
      type: offer.get('offerType').value,
      fiatCurr: offer.get('fiatCurr').value,
      inStock: offer.get('inStock').value,
      upperLimit: offer.get('upperLimit').value,
      lowerLimit: offer.get('lowerLimit').value,
      price: offer.get('price').value,
      cryptoCurr: offer.get('cryptoCurr').value,
      paymentMethods: offer.get('paymentMethods').value
    }
    let offerData = Object.assign(newOffer, email)

    this.http.post(url, offerData).subscribe(response => {
      console.log('res', response)
    }, error => {
      console.log('err', error)
    })
  }

  getPeerOffers(){
    let email = localStorage.getItem('email');
    const url = this.baseUrl + '/peer/offers?email=' + email
    return this.http.get(url)
  }

  getCurrencyIcon(currName) { //Get's currency in UTF-8 encoding
    switch(currName){
      case 'ngn':
        return '₦'
        break;
      case 'usd':
        return '$'
        break;
      case 'cad':
        return 'C$'
        break;
      case 'eur':
        return '€'
        break;
      default:
        return currName;
    }
  }

  getPaymentMethodName(method){
    switch(method){
      case 'zel':
        return 'Zelle';
      case 'ppl':
        return 'Paypal';
      case 'pst' :
        return 'Paystack';
    }
  }

  addPaymentMethod(data: paymentMethod){
    const url = this.baseUrl + '/paymentMethods/new'
    let email = {email: localStorage.getItem('email')};
    let newMethod: paymentMethod = Object.assign(data, email)
    return this.http.post(url, newMethod)
  }

  getPaymentMethods(){ //Retrieve Users' payment method
    let email = localStorage.getItem('email')
    const url = this.baseUrl + '/paymentMethods?email=' + email
    return this.http.get(url);
  }

  deletePaymentMethod(method){ //When A User deletes a payment method
    let email = {email: localStorage.getItem('email')}
    const data = Object.assign(email, method);
    const url = this.baseUrl + '/paymentMethods/delete';
    console.log(url)
    return this.http.post(url, data)
  }

  makeTrade(data){ //Make a p2p trade on an advertised offer
    const url = this.baseUrl + '/peer/trade'
    return this.http.post(url, data)
  }

  customerConfirmOrder(id, offer){ //When customer confirms order
    let patch =  { status: 'pending-advertiser'}
    const data = Object.assign(patch, offer)
    const url = this.baseUrl + '/peer/customerConfirm/' + id
    return this.http.patch(url, data);
  }

  advertiserConfirmOrder(orderID){ //When advertiser confirms/validates order
    const url = this.baseUrl + '/peer/advertiserConfirm/'+ orderID;
    let patch = { status: 'completed'}
    return this.http.patch(url, patch)
  }

  customerCancelOrder(id, offer){ //When a customer cancels an order
    let patch =  { status: 'cancelled'}
    console.log('Cancelling Trade')
    const data = Object.assign(patch, offer)
    const url = this.baseUrl + '/peer/cancel/' + id
    return this.http.patch(url, data);
  }

  checkFundingBal(fiatCurrency, amount){ //Check Balance of user's funding wallet
    const url = this.baseUrl + '/peer/checkFundingBal';
    const email = localStorage.getItem('email');
    const data = {
      email: email,
      currency: fiatCurrency,
      amount: amount
    }
    return this.http.post(url, data);
  }

  getPendingOffers(){ //Retrieve all pending offers
    const email = localStorage.getItem('email')
    const url = this.baseUrl + '/peer/pending?user=' + email
    console.log(email)
    return this.http.get(url)
  }

  transferToFunding(data){  //Transfer To funding wallet
    const email = localStorage.getItem('email');
    const url = this.baseUrl + '/transactions/funding';
    const fundingData = {
      email: email,
      amount: data.amount,
      currency: data.currency,
      transaction: data.transaction
    };
    return this.http.post(url, fundingData)

  }


}
