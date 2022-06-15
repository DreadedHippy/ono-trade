import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositPageRoutingModule } from './deposit-routing.module';
import { ComponentsModule } from './../../../components/components.module';


import { DepositPage } from './deposit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DepositPageRoutingModule
  ],
  declarations: [DepositPage]
})
export class DepositPageModule {}
