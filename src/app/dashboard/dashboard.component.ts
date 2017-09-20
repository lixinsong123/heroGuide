import { Component,OnInit} from '@angular/core';

import {General}  from "../../bean/General";
import {GeneralService} from'../general.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 
	generals:General[];
	constructor(private generalService:GeneralService){}
	ngOnInit(){
		this.generalService.getGenerals().then(generals=>this.generals=generals.slice(1,5));
	}
}