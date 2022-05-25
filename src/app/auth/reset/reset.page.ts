import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

  constructor(
    public authService: AuthService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.resettoken();
  }

  onRequest(form: NgForm){
    const email = {
      email: form.value.email
    };
    if (form.invalid){
      this.error();
      return;
    }
    this.authService.resetPasswordRequest(email);
  }

  async error() {
    const toast = await this.toastCtrl.create({
      message: 'Wrong Email Or Password',
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }



}
