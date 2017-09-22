import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Crisis} from "./crisis"
import {CRISES} from './crisis.service';
@Component({
  template: `
    <p>Welcome to the CrisisDetailComponent</p>
    <button (click)="goBack()">Back</button>
  `
})
export class CrisisDetailComponent {
	  	constructor( 
	  		private route: ActivatedRoute,
	 		 private location: Location){}
	  color="blue";
	  ngOnInit(){
	  	 // this.route.paramMap
	    // .switchMap((params: ParamMap) => CRISES.getGeneral(+params.get('id')))
	    // .subscribe(general => this.general = general);
	  } goBack(): void {
	 	 this.location.back();
	  }
 }