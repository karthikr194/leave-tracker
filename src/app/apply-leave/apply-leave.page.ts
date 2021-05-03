import { Component, OnInit } from '@angular/core';
export interface AutoCompleteModel {
  value: any;
  display: string;
}

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.page.html',
  styleUrls: ['./apply-leave.page.scss'],
})
export class ApplyLeavePage implements OnInit {
  public items: string[] = ["Noah", "Liam", "Mason", "Jacob"];
  constructor() {
    
   }

  ngOnInit() {
  }

  

}
