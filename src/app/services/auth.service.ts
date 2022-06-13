import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs/operators';
import { User, UserDataRes } from '../models/user.model';
import { NavController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { MailService } from './mail.service';
import { AlertService } from './alert.service';
import { map } from 'rxjs/operators';
import { toastController } from '@ionic/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
// If you enabled Analytics in your project, add the Firebase SDK for Analytics

/* eslint no-underscore-dangle: 0 */


const baseUrl = environment.baseUrl;
const user = null;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: string;
  baseUrl = environment.baseUrl;
  errorCode: any;
  client = null;
  firebaseConfig = environment.firebaseConfig;
  users: any;
  private token: string;
  private authStatusListener = new Subject<boolean>();
  private isAuthenticated = false;
  private tokenTimer: any;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    public mailSrv: MailService,
    private alertSrv: AlertService,
    private route: Router
  ) {}

  getToken(){
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getIsAuth(){
    return this.isAuthenticated;
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
      this.errorCode = error.error.message;
      this.returnError();
      return;
    });
  }

  returnError(){
    const duplicateEmailError = this.errorCode.includes(
      'expected `email` to be unique.'
    );
    if(duplicateEmailError){
      this.alertSrv.toast('Email already in use');
    }
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
    this.http.post<{
      token: string;
      status: string;
      message: string;
      expiresIn: number;
      user: any;}>( baseUrl + '/users/login', userData)
    .subscribe(response => {
      const token = response.token;
      this.data = response.user;
      this.token = token;
      if(token){
        if (response.status === 'verified'){
        this.userLogmsg();
        const expiresInDuration = response.expiresIn;
        this.setAuthTimer(expiresInDuration);
        this.isAuthenticated = true;
        this.authStatusListener.next(true);
        const now = new Date();
        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        this.saveAuthData(token, expirationDate);
        console.log(expirationDate);
        this.navCtrl.navigateRoot('/dashboard');
        }
      }
    }, error => {
      this.alertSrv.toast(error.error.message);

    });
  }

  userLogmsg(){
    const url = this.baseUrl + '/users/login';
    this.http.get<UserDataRes>(url)
    .subscribe(response => {
      console.log(response);
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

  getUsers() {
    this.http
      .get<{ message: string; users: any }>('http://localhost:3000/api/users/list')
      .subscribe(response => {
        console.log(response);
      });
  }

  getCurrentUser(){
    return this.data;
  }

  autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
      this.navCtrl.navigateForward('/wallet/history');
    }
  }

  logout(){
    this.http.get<{message: string}>(this.baseUrl + '/users/logout')
    .subscribe(response => {
      console.log(response.message);
    });
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.route.navigate(['/login']);
  }

  private saveAuthData(token: string, expirationDate: Date){
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
  }

  private clearAuthData(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if (!token || !expirationDate){
      return;
    }
    return {
      token,
      expirationDate: new Date(expirationDate)
    };
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }



}



