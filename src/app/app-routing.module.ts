import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import {GeneralsComponent} from './general/generals.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {GeneralDetailComponent} from './general/general-detail.component';

import {HeroListBasicComponent} from '../Animations/general-list-basic.component';
//组件用法的一些模块测试
import {CountdownLocalVarParentComponent} from '../componentLink/countdown-parent.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: GeneralDetailComponent },
  { path: 'generals',     component: GeneralsComponent },
  { path: 'test/component',     component: CountdownLocalVarParentComponent },
  { path: 'test/animaion',     component: HeroListBasicComponent }

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}