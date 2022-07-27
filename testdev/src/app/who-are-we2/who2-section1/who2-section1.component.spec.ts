import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Who2Section1Component } from './who2-section1.component';

describe('Who2Section1Component', () => {
  let component: Who2Section1Component;
  let fixture: ComponentFixture<Who2Section1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Who2Section1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Who2Section1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
