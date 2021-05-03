import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmdModule } from './amd.module';
import { Network } from '@ionic-native/network/ngx';
import { TagInputModule } from 'ngx-chips';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,TagInputModule, HttpClientModule,IonicModule.forRoot(), AppRoutingModule,NgbModule,BrowserAnimationsModule,AmdModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Network],
  bootstrap: [AppComponent],
})
export class AppModule {}
