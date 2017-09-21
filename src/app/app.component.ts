import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  template: `
		  	<div class="title">{{title}}</div>
		  	<div class="parent">
		  		 <a routerLink="/generals">Generals</a>
		   		 <a routerLink="/dashboard">Dashboard</a>
		   		 <a routerLink="/test/component">test</a>
		  	</div>  
		   <router-outlet></router-outlet>
  `,
  styles:[`
		.title{
			text-align:center;
			font-size:40px;
			color:black;
		}
		.parent{
			
			width:500px;
			padding-top:50px;
			margin:0 auto;
		}
		a{
			display:inline-block;
			width:100px;
			height:30px;
			background:#eee;
			margin-right:30px;
			text-align:center;
			line-height:30px;
		}
  `]
})
export class AppComponent {
	title="Tour of Generals"
}