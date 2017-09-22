import { Component,OnInit} from '@angular/core';
import {Crisis} from "./crisis"
import {CRISES} from './crisis.service';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  template: `
    <p>Welcome to the CrisisListComponent</p>
    <ul>
		<li *ngFor="let item of crisis " (click)="goDetail(item)" >
			<label>{{item.id}}</label>
			<span>{{item.name}}</span>
		</li>
    </ul>
  `
})

export class CrisisListComponent implements OnInit {
		crisis:Crisis[];
		ngOnInit(){
			this.crisis=CRISES;
		}
		constructor(private router:Router, private route: ActivatedRoute,){}

		goDetail(Crisis):void{
				//使用相对导航(父级+id)
			   this.router.navigate([Crisis.id], { relativeTo: this.route });
		}

 }