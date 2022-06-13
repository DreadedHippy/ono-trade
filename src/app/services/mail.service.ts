import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  email: string;
  token: string;


  constructor() { }

  getinfo(mail, verifytoken){
    this.email = mail;
    this.token = verifytoken;

  }
}
