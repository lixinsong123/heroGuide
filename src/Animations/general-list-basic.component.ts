import {Component,Input,OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import {General}  from "../bean/General";
import {GeneralService} from'../app/general.service';

@Component({

 selector: 'hero-list-basic',
 template: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="toggleState(hero)">
        {{hero.name}}
      </li>
    </ul>`,
    animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ],
  styles:[`
  	ul{
  		padding-top:100px;
  	}
	li{
		width:150px;
		height:150px;
		margin:0 auto;
	}
  `]
})
export class HeroListBasicComponent {
	heroes=[{
		state:'inactive',
		name:"Animate",
	}];

	toggleState(hero){
	
		this.heroes[0].state=hero.state=="inactive"?"active":"inactive";
	}
}