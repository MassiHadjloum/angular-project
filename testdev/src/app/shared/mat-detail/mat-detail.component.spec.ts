import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDetailComponent } from './mat-detail.component';

describe('MatDetailComponent', () => {
  let component: MatDetailComponent;
  let fixture: ComponentFixture<MatDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
