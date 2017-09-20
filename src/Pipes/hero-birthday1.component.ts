import { Component } from '@angular/core';

@Component({
  selector: 'hero-birthday',
  template: `
 	 <p>The hero's birthday is {{ birthday | date:format }}</p>
	 <button (click)="toggleFormat()">Toggle Format</button>
	     <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  `
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
   toggle = true; // start with true == shortDate

  get format(){
   return this.toggle ? 'shortDate' : 'fullDate';
  }
  toggleFormat() { 
  	this.toggle = !this.toggle; 
  }
}


/*
		在这个插值表达式中，我们让组件的birthday值通过"管道操作符( | )"流动到 右侧的Date管道函数中。所有管道都会用这种方式工作。
	{{ birthday | date }}	
*/

/*
											管道进行参数化
	管道可能接受任何数量的"可选参数"来对它的输出进行微调。 我们可以在管道名后面添加一个冒号( : )再跟一个参数值，
	来为管道添加参数(比如currency:'EUR')。 如果我们的管道可以接受多个参数，那么就用冒号来分隔这些参数值(比如slice:1:5)。

	重要:
		参数值可以是任何有效的模板表达式（参见模板语法中的模板表达式部分），比如字符串字面量或组件的属性
		。 换句话说，借助属性绑定，我们也可以像用绑定来控制生日的值一样，控制生日的显示格式。
*/

/*
											链式管道
		我们可以把管道链在一起，以组合出一些潜在的有用功能
					{{ birthday | date | uppercase}}
*/