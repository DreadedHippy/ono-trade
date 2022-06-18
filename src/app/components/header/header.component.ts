import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkTitle()
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

   checkTitle(){
    console.log(this.router.url)
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
      default:
        this.title = 'Page';
    }
   }

}
