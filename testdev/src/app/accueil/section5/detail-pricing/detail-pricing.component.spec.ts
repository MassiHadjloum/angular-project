import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPricingComponent } from './detail-pricing.component';

describe('DetailPricingComponent', () => {
  let component: DetailPricingComponent;
  let fixture: ComponentFixture<DetailPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
