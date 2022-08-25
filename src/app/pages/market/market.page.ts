import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  globalTrade(){
    this.router.navigate(['market/global'])
  }

  peerTrade(){
    this.router.navigate(['market/peer'])
  }

}
