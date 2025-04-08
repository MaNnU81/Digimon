import { Injectable, signal } from '@angular/core';
import { Digimon } from '../digimon-model';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  private readonly baseUrl = "https://digi-api.com/api/v1/digimon";
  digimons = signal<Digimon[]>([]);
  page = signal(1);

  constructor() {
    this.loadDigimons();
  }

  async loadDigimons() {
    const response = await fetch(`${this.baseUrl}?page=${this.page()}`);
    const data = await response.json();
    this.digimons.set(data.content);
  }

  nextPage() {
    this.page.update(p => p + 1);
    this.loadDigimons();
  }

  prevPage() {
    this.page.update(p => Math.max(p - 1, 1));
    this.loadDigimons();
  }
}