import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { AlertService } from '../../services/alert.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title: string;
  userData: User[] = [];
  id: any;
  user: boolean;
  // firebaseConfig = environment.firebaseConfig;



  constructor(
    private navCtrl: NavController,
    public authservice: AuthService,
    public alertSrv: AlertService,
  ) { }




  ngOnInit() {
    this.title = 'LOGIN';
    this.user = false;
    // this.id = process.env.CLIENT_ID;
  }

  onLogin(form: NgForm){
    const data = {
      email: form.value.email,
      password: form.value.password
    };
    if (form.invalid){
      this.error();
      return;
    }
    this.authservice.login(data);
  }

  continue(){
    this.navCtrl.navigateRoot('/tabs/tab1');
  }

  signup(){
    this.navCtrl.navigateForward('/signup');
  }

  focus(){
    document.getElementById('myInput').style.background = 'yellow';
  }


  displayInfo(){
    console.log(this.authservice.client.email);
    console.log(this.authservice.client.displayName);
  }



  async error() {
    this.alertSrv.toast('Invalid Email/Password', 3000);
  }
}
