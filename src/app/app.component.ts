import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListDigimonComponent } from "./components/list-digimon/list-digimon.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListDigimonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'digimon-app';
}
