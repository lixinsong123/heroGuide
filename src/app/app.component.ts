import { Component } from '@angular/core';
 

@Component({
  selector: 'app-root',
  template: `
		  	<div class="title">{{title}}</div>
		  	<div class="parent">
		  		 <a routerLink="/generals">Generals</a>
		   		 <a routerLink="/dashboard">Dashboard</a>
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
			margin:0 auto;
			width:300px;
			margin-top:50px;
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