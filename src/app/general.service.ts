import { Injectable } from '@angular/core';

import {General} from '../bean/General';
import {Generals} from "../data/mock-general";
@Injectable()
export class GeneralService{
	getGenerals():Promise<General[]>{
		return Promise.resolve(Generals);
	}
	
	getGeneral(id: number): Promise<General> {

 	 return this.getGenerals()
             .then(generals => generals.find(general => general.id === id));
	}
}