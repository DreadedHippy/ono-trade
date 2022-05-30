import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  title = 'Wallet';
  ios: boolean;
  android: boolean;
  userData: any;

  constructor(
    private route: Router,
    public platform: Platform,
    private authService: AuthService) {}

  ngOnInit() {
    this.ios = this.platform.is('ios');
    this.android = this.platform.is('android');
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

  displayUserInfo(){
    this.userData = this.authService.getCurrentUser();
  }

}
