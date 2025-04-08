import { Component, Input } from '@angular/core';
import { Digimon } from '../../digimon-model';

@Component({
  selector: 'app-card-digimon',
  imports: [],
  templateUrl: './card-digimon.component.html',
  styleUrl: './card-digimon.component.scss'
})
export class CardDigimonComponent {
  @Input() digimon!: Digimon;
}
