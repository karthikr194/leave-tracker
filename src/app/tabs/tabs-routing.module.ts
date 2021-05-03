import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'team-list',
        loadChildren: () => import('../team-list/team-list.module').then( m => m.TeamListPageModule)
      },
      {
        path: 'request-list',
        loadChildren: () => import('../request-list/request-list.module').then( m => m.RequestListPageModule)
      },
      {
        path: 'view-news',
        loadChildren: () => import('../view-news/view-news.module').then( m => m.ViewNewsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },  {
        path: 'employee-details',
        loadChildren: () => import('../employee-details/employee-details.module').then( m => m.EmployeeDetailsPageModule)
      },
      {
        path: 'apply-leave',
        loadChildren: () => import('../apply-leave/apply-leave.module').then( m => m.ApplyLeavePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/team-list',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/team-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
