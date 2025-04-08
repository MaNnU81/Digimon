import { Component, effect } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
import { type Digimon } from '../../digimon-model';
import { NgFor } from '@angular/common';
import { CardDigimonComponent } from '../card-digimon/card-digimon.component';


@Component({
  selector: 'app-list-digimon',
  imports: [NgFor, CardDigimonComponent],
  templateUrl: './list-digimon.component.html',
  styleUrl: './list-digimon.component.scss'
})
export class ListDigimonComponent {
digimons:Digimon[] = [];
  
 

 constructor( public digimonService:DigimonService){
    effect(() => {
      this.digimons = this.digimonService.digimons()
    })
 }
}
