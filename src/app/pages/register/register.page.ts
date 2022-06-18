import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userData: User[] = [];

  constructor(private router: Router, private authSrv: AuthService) { }
   loginPage()
  {
  this.router.navigate(['login']);
  }
  ngOnInit() {
  }

  onSignup(form: NgForm){
    const data: User = {
      id: null,
      username: form.value.Username,
      email: form.value.Email,
      password: form.value.Password,
      verifyToken: '',
      passwordToken: '',
      wallets: []
    };
    if (form.invalid){
      return;
    }
    this.userData.push(data);
    this.authSrv.createUser(data);
  }

}
