import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.page.html',
  styleUrls: ['./newpass.page.scss'],
})
export class NewpassPage implements OnInit {
  pass1: string;
  pass2: string;
  passkey: string;
  passmail: string;

  constructor(
    public authservice: AuthService,
    public toastCtrl: ToastController,
    private route: ActivatedRoute,
    public navCtrl: NavController ) { }

  ngOnInit() {
    const token = this.route.snapshot.queryParamMap.get('token');
    const email = this.route.snapshot.queryParamMap.get('mail');
    if (!email || !token){
      this.navCtrl.navigateRoot('/wallet');
    }
    this.passkey = token;
    this.passmail = email;
  }

  onReset(form: NgForm){
    const data = {
      password1: form.value.password1,
      password2: form.value.password2
    };
    if (form.invalid){
      this.error('Invalid password');
      return;
    }else if(!form.invalid){
      if (data.password1 !== data.password2 ) {
        this.error('Make sure your passwords match');
        return;
      }
    }
    const passData = {
      passkey: this.passkey,
      passmail: this.passmail,
      pass: data.password1
    };
    this.authservice.passwordReset(passData);
  }

  async error(errorMessage) {
    const toast = await this.toastCtrl.create({
      message: errorMessage,
      duration: 4000,
      position: 'middle'
    });
    toast.present();
  }

}
