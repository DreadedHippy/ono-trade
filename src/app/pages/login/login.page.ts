import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  title = '';
  user: boolean;
  isLoading = false;
  constructor(
    private router: Router,
    public alertSrv: AlertService,
    private authService: AuthService ) {}

  ngOnInit() {
    this.title = 'LOGIN';
    this.user = false;
    // this.id = process.env.CLIENT_ID;
  }

  onLogin(form: NgForm){
    const data = {
      email: form.value.email,
      password: form.value.password
    };
    if (form.invalid){
      this.error();
      return;
    }
    form.reset();
    this.authService.login(data);
  }

  registerPage() {
    this.router.navigate(['register']);
  }

  forgotpasswordPage() {
    this.router.navigate(['forgotpassword']);
  }

  dashboardPage() {
    this.router.navigate(['dashboard']);
  }

  async error() {
    this.alertSrv.toast('Invalid Email/Password', 3000);
  }
}
