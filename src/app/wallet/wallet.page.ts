import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  title = 'Wallet';

  constructor( private route: Router) { }

  ngOnInit() {
  }

  goToPage(page){
    switch(page){
      case 'history':
        this.route.navigate(['/wallet/' + page]);
        break;
      case 'trade':
        this.route.navigate(['/wallet/' + page]);
        break;
      case 'deposit':
        this.route.navigate(['/wallet/' + page]);
        break;
      case 'transfer':
        this.route.navigate(['/wallet/'+ page]);
        break;
      case 'withdraw':
        this.route.navigate(['/wallet/'+ page]);
        break;
    }
  }

}
