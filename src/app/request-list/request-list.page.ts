import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.page.html',
  styleUrls: ['./request-list.page.scss'],
})
export class RequestListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
