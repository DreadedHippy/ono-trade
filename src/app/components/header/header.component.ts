import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  title: string;
  random = new Observable(subscriber => {
    subscriber.next(Math.ceil(Math.random()*10000))
  })
  profilePicSrc = environment.staticUrl + localStorage.getItem('imageSrc')

  constructor(private router: Router, private authSrv: AuthService) { }

  ngOnInit() {
    this.checkTitle();
  }

  dashboardPage(){
    this.router.navigate(['dashboard']);
  }

  notificationsPage(){
    this.router.navigate(['notifications']);
  }

  profilePage(){
    this.router.navigate(['profile']);
  }

  getImgSrc(){
    return this.authSrv.imgSrc
  }

  checkTitle(){
    const currentUrl = this.router.url
    switch(currentUrl){
      case '/wallets/new':
        this.title = 'New Wallet'
        break;
      case '/wallets':
        this.title = 'Wallet'
        break;
      case '/dashboard':
        this.title = 'Dashboard'
        break;
      case '/profile':
        this.title = 'Profile'
        break;
      case '/history':
        this.title = 'History'
        break;
      case '/dashboard':
        this.title = 'Dashboard'
        break;
      case '/payments':
        this.title = 'Payments'
        break;
      case '/transfer':
        this.title = 'Transfer'
        break;
      case '/deposit':
        this.title = 'Deposit'
        break;
      case '/faqs':
        this.title = 'FAQs'
        break;
      case '/settings':
        this.title = 'Settings'
        break;
      case '/changepassword':
        this.title = 'Change Password'
        break;
      case '/market':
        this.title = 'Market';
        break;
      case '/market/peer':
        this.title = 'Peer to Peer trading';
        break;
      case '/market/global':
        this.title = 'Global Marketplace';
        break;
      case '/market/peer/new':
        this.title = 'New Peer Offer';
        break;
      case '/market/peer/buy':
        this.title = 'P2P Buy';
        break;
        case '/payments/new':
          this.title = 'Add Payment Method';
          break;
      default:
        this.title = 'Page';
    }
   }

}
