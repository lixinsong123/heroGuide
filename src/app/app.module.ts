
import { NgModule } from '@angular/core';

//核心模块
import { BrowserModule } from '@angular/platform-browser';
//双向数据绑定模块
import { FormsModule }   from '@angular/forms';
//动画相关模块
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {GeneralService} from'./general.service';





//路由所需要的核心模块
import { RouterModule }   from '@angular/router';
//路由模块
import {AppRoutingModule} from './app-routing.module'

//注册指令--->用法类似于组件
import {HighlightDirective} from '../directive/drag.directive';

//测试管道所用的组件
import {HeroBirthdayComponent} from "../Pipes/hero-birthday1.component";
import {ExponentialStrengthPipe} from "../Pipes/exponential-strength.pipe"

import {GeneralsComponent} from './general/generals.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import {GeneralDetailComponent} from './general/general-detail.component';

import {HeroListBasicComponent} from '../Animations/general-list-basic.component';
//组件用法的一些模块测试
import {CountdownLocalVarParentComponent} from '../componentLink/countdown-parent.component';
import {CountdownTimerComponent}          from '../componentLink/countdown-timer.component'


@NgModule({
  //列出程序中的组件
  declarations: [
    AppComponent,
    GeneralDetailComponent,
      GeneralsComponent,
      DashboardComponent,

     HighlightDirective,
     CountdownLocalVarParentComponent,
     CountdownTimerComponent,
     HeroListBasicComponent
    // HeroBirthdayComponent,
    // ExponentialStrengthPipe
  ],
  //导入模块
  imports: [
  /*BrowserModule，每个运行在浏览器中的应用都必须导入它。
       BrowserModule注册了一些关键的应用“服务”提供商。 它还包括了一些通用的指令，
       例如NgIf和NgFor，所以这些指令在该模块的任何组件模板中都是可用的。 
   */
    BrowserModule,
  //双向数据绑定依赖的模块
    FormsModule,
   //路由模块
    AppRoutingModule,
    //动画模块
    BrowserAnimationsModule
  ],
  providers: [GeneralService],
  /*@NgModule.bootstrap属性把这个AppComponent标记为引导 (bootstrap) 组件。 
    当 Angular 引导应用时，它会在 DOM 中渲染AppComponent，并把结果放进index.html的<app-root>元素标记内部。  
  */
  bootstrap: [AppComponent]
})
export class AppModule { }
