
// Keep the Input import for now, you'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {GeneralService} from'../general.service';

import {General}  from "../../bean/General";
@Component({
  selector: 'general-detail',
  template:`
		<div class="hero_view" *ngIf="general">
			<div class="row" >
				<label class="col-lg-5">id: </label>{{general.id}} {{general.name}} {{general.source}}
			</div>
			<div class="row" >
				<label class="col-lg-5">name: </label>
				<input class="col-lg-2"  [(ngModel)]='general.name' placeholder="name">
			</div>
			<div class="row" >
				<label class="col-lg-5">source: </label>
				<input class="col-lg-2" [(ngModel)]='general.source' placeholder="source">
			</div>
			<button (click)="goBack()">Back</button>
		</div>

		
<!-- 测试拖拽指令 -->
		
  `,
  styleUrls:["./generals.component.scss"]
})
export class GeneralDetailComponent implements OnInit {
 	general:General;
  	constructor( 
  		private generalService: GeneralService,
  		private route: ActivatedRoute,
 		 private location: Location){}
  color="blue";
  ngOnInit(){
  	 this.route.paramMap
    .switchMap((params: ParamMap) => this.generalService.getGeneral(+params.get('id')))
    .subscribe(general => this.general = general);
  } goBack(): void {
 	 this.location.back();
  }
 
}