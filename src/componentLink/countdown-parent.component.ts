//组件之间的互动


import { Component }                from '@angular/core';
import { CountdownTimerComponent }  from './countdown-timer.component';
 import { AfterViewInit, ViewChild } from '@angular/core';
@Component({
  selector: 'countdown-parent-lv',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
 <!-- 
		父组件与子组件通过本地变量互动
 <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <countdown-timer #timer></countdown-timer>
-->
	<!-- 父组件调用@ViewChild()-->
  <button (click)="start()">Start1</button>
  <button (click)="stop()">Stop2</button>
  <countdown-timer></countdown-timer>
  `,
})
export class CountdownLocalVarParentComponent {

	  @ViewChild(CountdownTimerComponent)
  private timerComponent: CountdownTimerComponent;
 
  seconds() { return 0; }
 
  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }
 
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
 }
 /*
		把子组件的视图插入到父组件类需要做一点额外的工作。

		首先，你要使用ViewChild装饰器导入这个引用，并挂上AfterViewInit生命周期钩子。

		接着，通过@ViewChild属性装饰器，将子组件CountdownTimerComponent注入到私有属性timerComponent里面。

		组件元数据里就不再需要#timer本地变量了。而是把按钮绑定到父组件自己的start和stop方法，使用父组件的seconds方法的插值表达式来展示秒数变化。

		这些方法可以直接访问被注入的计时器组件。

		ngAfterViewInit()生命周期钩子是非常重要的一步。被注入的计时器组件只有在Angular显示了父组件视图之后才能访问，所以我们先把秒数显示为0.

		然后Angular会调用ngAfterViewInit生命周期钩子，但这时候再更新父组件视图的倒计时就已经太晚了。Angular的单向数据流规则会阻止在同一个周期内更新父组件视图。我们在显示秒数之前会被迫再等一轮。

		使用setTimeout()来等下一轮，然后改写seconds()方法，这样它接下来就会从注入的这个计时器组件里获取秒数的值。
 */