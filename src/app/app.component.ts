import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private network: Network) {
    // watch network for a disconnection

   

  }

  openModal() {
    // let modal = this.modalCtrl.create(ModalPage);
    // modal.present();
  }
}
