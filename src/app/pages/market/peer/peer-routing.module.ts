import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeerPage } from './peer.page';

const routes: Routes = [
  {
    path: '',
    component: PeerPage
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then( m => m.BuyPageModule)
  },
  {
    path: 'sell',
    loadChildren: () => import('./sell/sell.module').then( m => m.SellPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PeerPageRoutingModule {}
