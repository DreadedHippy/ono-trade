import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [FooterComponent, SidebarComponent, HeaderComponent],
   exports: [ FooterComponent, SidebarComponent, HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]

})
export class ComponentsModule { }
