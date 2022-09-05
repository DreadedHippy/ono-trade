import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { paymentMethod } from 'src/app/models/transaction.model';
import { AlertService } from 'src/app/services/alert.service';
import { TransactionsService } from 'src/app/services/transactions.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  constructor(
    private alertSrv: AlertService,
    private transSrv: TransactionsService,
    private router: Router) { }
  paymentInfo = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    bank: new FormControl(''),
    type: new FormControl('', Validators.required)
  });


  ngOnInit() {
  }

  onCreate(){
    console.log(this.paymentInfo.valid)
    if(!this.paymentInfo.valid){
      this.alertSrv.toast('Please fill all required fields', 2000)
    }
    let data: paymentMethod = {
      name: this.paymentInfo.get('name').value,
      address: this.paymentInfo.get('address').value,
      bank: this.paymentInfo.get('bank').value,
      type: this.paymentInfo.get('type').value
    }
    console.log(data)
    this.transSrv.addPaymentMethod(data).subscribe((response: {message: string}) => {
      console.log(response)
      this.alertSrv.toast(response.message, 1000)
      this.router.navigate(['dashboard'])
    }, err => {console.log('error', err)})
  }

}
