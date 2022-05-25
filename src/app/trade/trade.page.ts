import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-trade',
  templateUrl: './trade.page.html',
  styleUrls: ['./trade.page.scss'],
})
export class TradePage implements OnInit {

  ios: boolean;
  android: boolean;
  title = 'Trade';

  constructor(
    public platform: Platform,
    private router: Router
  ) { }

  ngOnInit() {
    this.ios = this.platform.is('ios');
    this.android = this.platform.is('android');
  }

  goToPage(page){

    switch(page){
      case 'buy':
        this.router.navigate(['/trade/'+page]);
        break;
      case 'sell':
        this.router.navigate(['/trade/' + page]);
        break;
    }
  }

}
