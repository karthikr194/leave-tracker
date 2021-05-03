import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkConnectivityPage } from './network-connectivity.page';

const routes: Routes = [
  {
    path: '',
    component: NetworkConnectivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkConnectivityPageRoutingModule {}
