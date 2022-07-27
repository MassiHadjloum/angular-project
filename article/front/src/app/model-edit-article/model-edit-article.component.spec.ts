import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelEditArticleComponent } from './model-edit-article.component';

describe('ModelEditArticleComponent', () => {
  let component: ModelEditArticleComponent;
  let fixture: ComponentFixture<ModelEditArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelEditArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelEditArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
