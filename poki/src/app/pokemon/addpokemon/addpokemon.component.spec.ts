import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpokemonComponent } from './addpokemon.component';

describe('AddpokemonComponent', () => {
  let component: AddpokemonComponent;
  let fixture: ComponentFixture<AddpokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
