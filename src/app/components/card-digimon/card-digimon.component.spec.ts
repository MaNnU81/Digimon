import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDigimonComponent } from './card-digimon.component';

describe('CardDigimonComponent', () => {
  let component: CardDigimonComponent;
  let fixture: ComponentFixture<CardDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDigimonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
