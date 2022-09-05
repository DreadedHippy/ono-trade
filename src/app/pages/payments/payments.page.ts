import { paymentMethod } from './../../models/transaction.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { TransactionsService } from 'src/app/services/transactions.service';
import {SubSink} from 'subsink';
import { CheckboxCustomEvent } from '@ionic/angular';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit, OnDestroy {

  subs = new SubSink();
  methods: paymentMethod[];
  canDismiss = true;
  presentingElement = null;
  selectedMethod: paymentMethod

  constructor(
    private barcodeScanner: BarcodeScanner,
    private router: Router,
    private transSrv: TransactionsService
  ) { }

  dashboardPage(){
   this.router.navigate(['dashboard']);
  }

   notificationsPage(){
  this.router.navigate(['notifications']);
  }

  profilePage(){
	  this.router.navigate(['profile']);
  }

  addNewMethod(){
    this.router.navigate(['payments/new'])
  }

  ngOnInit() {
    this.getPaymentMethods()
  }

  getPaymentMethods(){
    this.subs.sink =  this.transSrv.getPaymentMethods().subscribe( (data: {message: string, methods: paymentMethod[]}) => {
      this.methods = data.methods
      console.log(data);
    })
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      // success. barcodeData is the data returned by scanner
    }).catch(err => {
    // error
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe()
  }


  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

  setSelectedMethod(method){
    this.selectedMethod = method
    document.getElementById('open-modal').click()
  }

  getPaymentMethodName(method){
    return this.transSrv.getPaymentMethodName(method)
  }

  deletePaymentMethod(){
    this.transSrv.deletePaymentMethod(this.selectedMethod)
    .subscribe(response => {
      console.log(response)
    }, err => {
      console.log(err)
    })
  }


}
