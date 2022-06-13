import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public url1 = '';

  constructor(private router: Router, private authSrv: AuthService) {}
  dashboardPage() {
    this.router.navigate(['dashboard']);
  }

  paymentsPage() {
    this.router.navigate(['payments']);
  }

  historyPage() {
    this.router.navigate(['history']);
  }

  settingsPage() {
    this.router.navigate(['settings']);
  }

  profilePage() {
    this.router.navigate(['profile']);
  }

  logOut() {
    this.authSrv.logout();
  }

  ngOnInit() {
    this.url1 = this.router.url;
  }

}
