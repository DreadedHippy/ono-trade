import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketPage } from './market.page';

const routes: Routes = [
  {
    path: '',
    component: MarketPage
  },
  {
    path: 'global',
    loadChildren: () => import('./global/global.module').then( m => m.GlobalPageModule)
  },
  {
    path: 'peer',
    loadChildren: () => import('./peer/peer.module').then( m => m.PeerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketPageRoutingModule {}
