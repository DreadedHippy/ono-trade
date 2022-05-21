import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {

  cardIndex = 1;
  wallets= [];
  adress: string;
  receivedAdress = 'Adress/Account Number of card 1 (received from backend)';
  constructor() { }

  ngOnInit() {
    this.getWallets();
    this.updateCardAdress();
  }

  getWallets(){
    //Get list of user's wallets from database
    this.wallets = [
      {
        id: 'ID Number(from db)',
        name: 'Name 1', //User Generated Name
        currency: 'Currency',
        icon: 'Icon of currency',
        provider: 'Provider(Mastercard, etc)',
        adress: 'Adress/Account Number of card 1 (received from backend)'
      },
      {
        id: 'ID Number 2',
        name: 'Name 2', //User Generated Name
        currency: 'Currency',
        icon: 'Icon of currency',
        provider: 'Provider',
        adress: 'Adress/Account Number of card 2 (received from backend)'
      },
      {
        id: 'ID Number 3',
        name: 'Name 3', //User Generated Name
        currency: 'Currency',
        icon: 'Icon of currency',
        provider: 'Provider',
        adress: 'Adress/Account Number of card 3 (received from backend)'
      },
    ];
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
    this.receivedAdress = this.wallets[this.cardIndex].adress;
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
