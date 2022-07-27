import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColTitleComponent } from './col-title.component';

describe('ColTitleComponent', () => {
  let component: ColTitleComponent;
  let fixture: ComponentFixture<ColTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
