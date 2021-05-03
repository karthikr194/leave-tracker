import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NetworkConnectivityPageRoutingModule } from './network-connectivity-routing.module';

import { NetworkConnectivityPage } from './network-connectivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NetworkConnectivityPageRoutingModule
  ],
  declarations: [NetworkConnectivityPage]
})
export class NetworkConnectivityPageModule {}
