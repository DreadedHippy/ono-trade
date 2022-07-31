import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public url1 = '';
  profilePicSrc = environment.staticUrl + localStorage.getItem('imageSrc');
  name = localStorage.getItem("name")

  constructor(private router: Router, private authSrv: AuthService) {}
  dashboardPage() {
    this.router.navigate(['dashboard']);
  }

  getImgSrc(){
    return this.authSrv.imgSrc
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
