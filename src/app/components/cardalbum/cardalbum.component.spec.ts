import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardalbumComponent } from './cardalbum.component';

describe('CardalbumComponent', () => {
  let component: CardalbumComponent;
  let fixture: ComponentFixture<CardalbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardalbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
