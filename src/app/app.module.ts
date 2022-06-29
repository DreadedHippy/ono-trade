import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { OwlModule} from 'ngx-owl-carousel';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth-interceptor';

@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule,
    OwlModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule],
  providers: [Camera, BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}

