import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTComponent } from './card-t.component';

describe('CardTComponent', () => {
  let component: CardTComponent;
  let fixture: ComponentFixture<CardTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
