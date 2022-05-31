import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  title = 'Wallet';
  ios: boolean;
  android: boolean;
  userData: any;
  private authListenerSubs: Subscription;

  constructor(
    private route: Router,
    public platform: Platform,
    private authService: AuthService) {}

  ngOnInit() {
    this.ios = this.platform.is('ios');
    this.android = this.platform.is('android');
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    this.displayUserInfo();
  }

  goToPage(page){
    switch(page){
      case 'history':
        this.route.navigate(['/wallet/' + page]);
        break;
      case 'trade':
        this.route.navigate(['/wallet/' + page]);
        break;
      case 'deposit':
        this.route.navigate(['/wallet/' + page]);
        break;
      case 'transfer':
        this.route.navigate(['/wallet/'+ page]);
        break;
      case 'withdraw':
        this.route.navigate(['/wallet/'+ page]);
        break;
    }
  }

  onLogin(){
    this.route.navigate(['/login']);
  }

  onLogout(){
    this.authService.logout();
  }

  displayUserInfo(){
    this.userData = this.authService.getCurrentUser();
  }

  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}
