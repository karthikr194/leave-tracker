import { Injectable } from '@angular/core';
// import { Observable, fromEvent, merge, of} from 'rxjs';
// import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ConnectivityService {
  // public appIsOnline$: Observable<boolean>;

  constructor() {
    // // watch network for a disconnection
    // let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
    //   console.log('network was disconnected :-(');
    // });
    // // this.initConnectivityMonitoring();
    // let connectSubscription = this.network.onConnect().subscribe(() => {
    //   console.log('network connected!');
    //   // We just got a connection but we need to wait briefly
    //   // before we determine the connection type. Might need to wait.
    //   // prior to doing any api requests as well.
    //   setTimeout(() => {
    //     if (this.network.type === 'wifi') {
    //       console.log('we got a wifi connection, woohoo!');
    //     }
    //   }, 3000);
    // });
  }

  // private initConnectivityMonitoring() {

  //   if (!window || !navigator || !('onLine' in navigator)) return;

  //   this.appIsOnline$ = merge(
  //     of(null),
  //     fromEvent(window, 'online'),
  //     fromEvent(window, 'offline')
  //   ).pipe(map(() => navigator.onLine))

  // }
}
