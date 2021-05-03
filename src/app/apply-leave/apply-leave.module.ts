import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MentionModule } from 'angular-mentions';
import { ApplyLeavePageRoutingModule } from './apply-leave-routing.module';

import { ApplyLeavePage } from './apply-leave.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MentionModule,
    ApplyLeavePageRoutingModule
  ],
  declarations: [ApplyLeavePage]
})
export class ApplyLeavePageModule {}
