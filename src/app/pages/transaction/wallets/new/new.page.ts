import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { TransactionsService } from 'src/app/services/transactions.service';
import { Wallet } from 'src/app/models/wallet.model';



@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {


  walletInfo = new FormGroup({
    walletName: new FormControl('', Validators.required),
    walletAddress: new FormControl('', Validators.required),
    walletCurr: new FormControl('', Validators.required)
  });

  constructor(
    private alertSrv: AlertService,
    private transactionsSrv: TransactionsService
  ) {}

  ngOnInit() {
  }

  onCreate(){
    console.log(this.walletInfo.valid)
    if(!this.walletInfo.valid){
      this.alertSrv.toast('Please fill in all details', 3000)
      return;
    }
    const walletInfo: Wallet = {
      name: this.walletInfo.get('walletName').value,
      address: this.walletInfo.get('walletAddress').value,
      currency: this.walletInfo.get('walletCurr').value,
      iconSrc: '',
      balance: 0.00,
      transactions: []
    }
    this.transactionsSrv.createWallet(walletInfo)
  }

}
