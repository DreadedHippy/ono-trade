import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [FooterComponent, SidebarComponent],
   exports: [ FooterComponent, SidebarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]

})
export class ComponentsModule { }
