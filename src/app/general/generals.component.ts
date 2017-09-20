import { Component,OnInit} from '@angular/core';

import { Router } from '@angular/router';

import {General}  from "../../bean/General";
import {GeneralService} from'../general.service';

@Component({
  selector: 'my-generals',
  templateUrl: './generals.component.html',
  styleUrls: ['./generals.component.scss']
})
export class GeneralsComponent implements OnInit {
  title = 'MY General';
 	// generals:General[]=Generals;
   color="pink";
   constructor(private generalService:GeneralService,private router: Router){

   }
 selectGeneral:General;
  generals:General[];

  getGenerals():void{
    this.generalService.getGenerals()
    .then(generals=>this.generals=generals);
  }

  ngOnInit(){
      this.getGenerals();
  }

  oSelect(item:General):void{
  	this.selectGeneral=item;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectGeneral.id]);
  }
  		
}
