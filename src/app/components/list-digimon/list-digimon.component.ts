import { Component, effect, Input } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
import { type Digimon, Image } from '../../digimon-model';
import { NgFor } from '@angular/common';
import { CardDigimonComponent } from '../card-digimon/card-digimon.component';


@Component({
  selector: 'app-list-digimon',
  imports: [NgFor, CardDigimonComponent],
  templateUrl: './list-digimon.component.html',
  styleUrl: './list-digimon.component.scss'
})
export class ListDigimonComponent {
digimons?:Digimon[] = [];
@Input() coverDigimon: string | null = null; 
@Input() digimon!: Digimon; 
@Input() name?: string;     
@Input() id?: number;      
  
 

 constructor( public digimonService:DigimonService){
    effect(() => {
      this.digimons = this.digimonService.digimons()
    });
 }


}
