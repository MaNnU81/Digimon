import { Component, Input, inject, input} from '@angular/core';
import { Digimon } from '../../digimon-model';
import { DigimonService } from '../../services/digimon.service';

@Component({
  selector: 'app-card-digimon',
  imports: [],
  templateUrl: './card-digimon.component.html',
  styleUrl: './card-digimon.component.scss'
})
export class CardDigimonComponent {
  @Input() coverDigimon!: string;
  @Input() name!: string;
  @Input() id!: number;
  @Input() digimon!: Digimon;




}
