import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

public url1 = '';
  constructor(private router: Router) { }
  dashboardPage(){
  this.router.navigate(['dashboard']);
  }

  paymentsPage(){
  this.router.navigate(['payments']);
  }

  historyPage(){
  this.router.navigate(['history']);
  }

  settingsPage(){
  this.router.navigate(['settings']);
  }

  walletsPage(){
    this.router.navigate(['wallets']);
  }
  ngOnInit() {
	  this.url1 = this.router.url;
  }

}
