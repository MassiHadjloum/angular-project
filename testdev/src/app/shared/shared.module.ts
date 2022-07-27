import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColTitleComponent } from './col-title/col-title.component';
import { MatDetailComponent } from './mat-detail/mat-detail.component';



@NgModule({
  declarations: [
    ColTitleComponent,
    MatDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ColTitleComponent,
    MatDetailComponent
  ]
})
export class SharedModule { }
