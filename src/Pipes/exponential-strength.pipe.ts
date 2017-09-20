//自定义管道

import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
  	//console.log(value+":"+exponent)

  	/*
  			2 | exponentialStrength: 10

  			value : 2;
  			exponent : 10;
  	*/
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
/*
		在这个管道的定义中体现了几个关键点：

		a.管道是一个带有“管道元数据(pipe metadata)”装饰器的类。

		b.这个管道类实现了PipeTransform"接口"的transform方法，该方法接受一个"输入值"和一些"可选参数"，并返回"转换"后的值。

		c.当每个输入值被传给"transform"方法时，还会带上另一个参数，比如我们这个管道中的exponent(放大指数)。

		d.我们通过@Pipe装饰器告诉Angular：这是一个管道。该装饰器是从Angular的core库中引入的。

		e.这个@Pipe装饰器允许我们定义管道的名字，这个名字会被用在模板表达式中。它必须是一个有效的JavaScript标识符。
		  比如，我们这个管道的名字是exponentialStrength。

		 第一步:
		 		引入所用要的库
		 		import { Pipe, PipeTransform } from '@angular/core';
		 第二步:
		 		继承PipeTransform接口
		 		implements PipeTransform
		 		实现transform方法
		 		transform(value: number, exponent: string)
		 第三步:
		 		使用@Pipe装饰器
		 		@Pipe({name: 'exponentialStrength'})
*/