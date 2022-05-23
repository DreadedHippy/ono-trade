import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  cardIndex = 1;
  wallets = [];
  adress: string;
  receivedAdress = 'Adress/Account Number of card 1 (received from backend)';


  constructor(
    private transactionsService: TransactionsService
  ) { }

  ngOnInit() {

    this.wallets = this.transactionsService.getWallets();
    this.updateCardAdress();
  }


  // Unimportant code to test button click
  buttonClickTest(){
    console.log('clicked');
  }

  copyCardAdress(){
    navigator.clipboard.writeText(this.receivedAdress);
    console.log(this.receivedAdress);
    alert('Copied');
  }

  updateCardAdress(){
    this.receivedAdress = this.wallets[this.cardIndex].address;
  }

  swapCardLeft(){
    if(this.cardIndex <= 0){
      this.cardIndex= this.wallets.length - 1;
      this.updateCardAdress();
    }else {
      this.cardIndex--;
      this.updateCardAdress();
    }

  }

  swapCardRight(){
    if(this.cardIndex >= this.wallets.length - 1){
      this.cardIndex = 0;
      this.updateCardAdress();
    }else {
      this.cardIndex++;
      this.updateCardAdress();
    }
  }

}
