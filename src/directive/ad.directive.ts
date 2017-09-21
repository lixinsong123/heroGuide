//定义一个锚点来告诉Angular要把组件插入到什么地方。

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
	//在@Directive装饰器中，要注意选择器的名称：ad-host，它就是我们将应用到元素上的指令。
  selector: '[ad-host]',
})
export class AdDirective {


	//AdDirective注入了ViewContainerRef来获取对“容器视图”的访问权，这个容器就是那些动态加入的组件的宿主。
  constructor(public viewContainerRef: ViewContainerRef) { }
}