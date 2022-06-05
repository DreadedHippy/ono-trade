import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { NavController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  userData: User[] = [];
  errorMsg: string;

  constructor(public authservice: AuthService,
              private navCtrl: NavController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController ) { }


  onSignup(form: NgForm){
    const data: User = {
      id: null,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      verifyToken: '',
      passwordToken: ''
    };
    if (form.invalid){
      return;
    }
    this.userData.push(data);
    this.authservice.createUser(data);
  }

  login() {
    this.navCtrl.navigateForward('/login');
  }

  ngOnInit() {
  }

}
