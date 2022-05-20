import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletPage } from './wallet.page';

const routes: Routes = [
  {
    path: '',
    component: WalletPage,
    children: [
      {
        path: 'history',
        loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
      },
      {
        path: 'trade',
        loadChildren: () => import('./trade/trade.module').then( m => m.TradePageModule)
      },
      {
        path: 'deposit',
        loadChildren: () => import('./deposit/deposit.module').then( m => m.DepositPageModule)
      },
      {
        path: 'transfer',
        loadChildren: () => import('./transfer/transfer.module').then( m => m.TransferPageModule)
      },
      {
        path: 'withdraw',
        loadChildren: () => import('./withdraw/withdraw.module').then( m => m.WithdrawPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPageRoutingModule {}
