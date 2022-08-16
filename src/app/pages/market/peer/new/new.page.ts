import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TransactionsService } from 'src/app/services/transactions.service';
import { peerOffer } from 'src/app/models/transaction.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor(private toastCtrl: ToastController, private transSrv: TransactionsService) { }
  newPeerOffer = new FormGroup({
    fiatCurr: new FormControl('ngn', Validators.required),
    offerType: new FormControl('sell', Validators.required),
    inStock: new FormControl('', Validators.required),
    cryptoCurr: new FormControl('btc', Validators.required),
    upperLimit: new FormControl('', Validators.required),
    lowerLimit: new FormControl('', Validators.required),
    paymentMethods: new FormControl('', Validators.required),
    timeLimit: new FormControl('30', Validators.required),
    price: new FormControl('', Validators.required)
  })
  selectColor = 'sell'
  isPM1Valid: boolean;
  isPM2Valid: boolean;

  ngOnInit() {
  }

  pmChange(e){
    // setTimeout(() => {
    //   this.newPeerOffer.patchValue({
    //     paymentMethod1: ''
    //   })
    // }, 3000);
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Please Fill all required fields',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
  }

  onSubmit(){
    if(!this.newPeerOffer.valid){
      this.presentToast();
      return;
    }
    this.transSrv.createPeerOffer(this.newPeerOffer)
  }

  offerTypeSelect(e){
    console.log(e.detail.value)
    this.selectColor = e.detail.value
  }

}
