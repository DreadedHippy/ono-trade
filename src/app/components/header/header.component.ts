import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit, OnDestroy {
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
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
    });
  }

  onLogin(){
    this.route.navigate(['/login']);
  }

  onLogout(){
    this.authService.logout();
  }


  ngOnDestroy(){
    this.authListenerSubs.unsubscribe();
  }

}

