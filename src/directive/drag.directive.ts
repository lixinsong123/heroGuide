/*
		1.Directive提供@Directive装饰器功能。

		2.ElementRef注入到指令构造函数中。这样代码就可以访问 DOM 元素了。

		3.Input将数据从绑定表达式传达到指令中。
*/
import { Directive, ElementRef, Input,OnInit,Renderer,HostListener} from '@angular/core';

/*
	@Directive装饰器函数以配置对象参数的形式，包含了指令的元数据。

	@Directive装饰器需要一个 CSS 选择器，以便从模板中识别出关联到这个指令的 HTML。
*/
@Directive({ selector: '[myDrag]' })

//封装一个拖拽指令
export class HighlightDirective  implements OnInit {
	/*	

		 ElementRef是一个服务，它赋予我们通过它的nativeElement属性直接访问 "DOM 元素"的能力

		 。 Renderer服务允许通过代码设置"元素的样式"。
	*/
    constructor(private el: ElementRef,private rr:Renderer) {

    }

    //控制是否按下
    //设置为private，放置外部改变内部数据
    private isDown=false;
    private disX ;
    private disY ;
     
    ngOnInit(){	
    	this.setColor(this.dragColor);
    }

    /*
							@HostListener装饰器引用属性型指令的宿主元素
		当然，你可以通过标准的JavaScript方式手动给宿主 DOM 元素附加一个事件监听器。 但这种方法至少有三个问题：

			1.必须正确的书写事件监听器。
			2.当指令被销毁的时候，必须拆卸事件监听器，否则会导致内存泄露。
			3.必须直接和 DOM API 打交道，应该避免"这样做"。
			@HostListener的this的指向很重要
    */
	    //点击事件
		@HostListener('mousedown',['$event']) onMousedown(event) {
			console.log(event);
			 this.isDown=true;
			 this.disX=event.clientX-this.el.nativeElement.offsetLeft;
			 this.disY=event.clientY-this.el.nativeElement.offsetTop;
		 	
		}
		//监听document移动事件事件
		@HostListener('document:mousemove', ['$event']) onMousemove(event){
			//判断该元素是否被点击了。
			if(this.isDown){
	   			console.log("移动中");
	   			let newdisX=event.clientX;
	   			let newdisY=event.clientY;
	   			this.el.nativeElement.style.left=newdisX-this.disX+"px";
	   			this.el.nativeElement.style.top=newdisY-this.disY+"px";
	   		}
	  		
		}
		//监听document离开事件
		@HostListener('document:mouseup',['$event']) onMouseup() {
			//只用当元素移动过了，离开函数体才会触发。
			if(this.isDown){
				console.log("fail");
				this.isDown=false;
			}
			
		}

		private setColor(color){
			this.el.nativeElement.style.background=color;
		}
		/*
						使用数据绑定向指令传递值
				注意看@Input装饰器。它往类上添加了一些元数据，从而让该指令的highlightColor能用于绑定。

					它之所以称为输入属性，是因为数据流是从绑定表达式流向指令内部的。 如果没有这个元数据，Angular就会拒绝绑定，
		*/
		//	绑定到@Input属性
		//绑定到@Input别名
		//在指令内部，该属性叫dragColor，在外部，当我们绑定到它时，它叫myDrag。
    	@Input('myDrag') dragColor: string;
}