import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs/operators';
import { User, UserDataRes } from '../models/user.model';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { MailService } from './mail.service';
import { AlertService } from './alert.service';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics

/* eslint no-underscore-dangle: 0 */


const baseUrl = environment.baseUrl;
const user = null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  data: string;
  baseUrl = environment.baseUrl;
  errorCode: any;
  client = null;
  firebaseConfig = environment.firebaseConfig;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    public mailSrv: MailService,
    private alertSrv: AlertService,
  ) {}

  getToken(){
    return this.token;
  }

  // Signup
  createUser(userdata: User){
    const url = this.baseUrl + '/users/signup';
    this.http.post<{user: User[]}>(url , userdata)
    .subscribe(response => {
      console.log(response);
      this.userRegmsg();
      this.navCtrl.navigateForward('/login');
    },
    error => {
      console.log(error);
      this.errorCode = error;
      this.returnError();
      return;
    });
  }

  returnError(){
    return this.errorCode;
  }

  // SignupMsg
  userRegmsg(){
    const url = this.baseUrl + '/users/signup';
    this.http.get<UserDataRes>(url)
    .subscribe(response => {
      if (response.status === 'verified') {
        window.alert(response.message);
      } else {
        window.alert('Verify with your email link');
      }
    });
  }


  // User Login
  login(userData){
    this.http.post<{token: string; status: string; message: string}>( baseUrl + '/users/login', userData)
      .subscribe(response => {
        window.alert(response.message);
        console.log(response);
        const token = response.token;
        this.token = token;
        if (status === 'verified'){
        this.userLogmsg();
        }
        this.navCtrl.navigateRoot('/wallet/history');
      }, error => {
        this.alertSrv.toast(error.error.message);
        // this.errorCode = error;
        this.returnError();
      });
    this.data = userData;
  }

  userLogmsg(){
    const url = this.baseUrl + '/users/login';
    this.http.get<UserDataRes>(url)
    .subscribe(response => {
      console.log(response);
      window.alert(response.message);
    });
  }


  // Username Modification
  modifyUsername(data){
    this.http.post( baseUrl + '/users/usermod', data)
    .subscribe(response => {
      console.log(response);
    });
  }


  // Friend Request
  reqFriend(friend){
    this.http.post( baseUrl + '/users/friendadd', friend)
    .subscribe(response => {
      console.log(response);
    });
  }

  goHome(){
    this.navCtrl.navigateRoot('/login');
  }

  checkAccess(){
    this.http.get<{username: string; email: string; _id: string}>(baseUrl + '/currentuser')
    .subscribe(response => {
      const username = response.username;
      const email = response.email;
      const id = response._id;
      if (!id || !username ||  !email) {this.goHome(); }
    });
  }

  // VERIFY USER
  userverify(key){
    this.http.get<{message: string; status: string}>(this.baseUrl + '/users/verify?key=' + key)
    .subscribe(response =>  {
      window.alert(response.message);
      if (response.status === 'verified'){
        this.goHome();
      }
      }, error => {
        this.alertSrv.toast(error.error.message);
        console.log(error);
      }
    );
  }

  resetPasswordRequest(email){
    this.http.post<{message: string}>( baseUrl + '/users/passresetrequest', email)
    .subscribe(response => {
      console.log(response);
      window.alert(response.message);
    }, error => {
      console.log(error);
    }
    );
  }

  passwordReset(passData){
    this.http.post<{message: string; passkey: string}>(baseUrl + '/users/passreset', passData)
    .subscribe(response =>  {
      console.log(response.message);
      if (response.passkey === 'changed'){
        window.alert('Password changed');
        this.goHome();
      }
    }, error => {
      console.log(error);
      this.alertSrv.toast(error.error.message);
    });
  }




}



