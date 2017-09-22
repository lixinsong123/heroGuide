import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent }       from './crisis-list.component';
import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisDetailComponent }     from './crisis-detail.component';

import {AuthGuard} from "../../routeGuard/auth-guard.service";

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    //路由守卫属性
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: CrisisListComponent,
        // children: [
        //   {
        //     path: ':id',
        //     component: CrisisDetailComponent
        //   },
        //   {
        //     path: '',
        //     component: CrisisCenterHomeComponent
        //   }
        // ]
      },
      {
        path: ':id',
        component: CrisisDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }