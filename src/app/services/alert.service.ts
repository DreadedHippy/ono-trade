import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastCtrl: ToastController
  ) { }

  async toast(msg: string, dur: number = 4000) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: dur,
      position: 'top'
    });
    toast.present();
  }

}
