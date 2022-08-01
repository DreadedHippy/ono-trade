import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeerPageRoutingModule } from './peer-routing.module';

import { PeerPage } from './peer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PeerPageRoutingModule
  ],
  declarations: [PeerPage]
})
export class PeerPageModule {}
