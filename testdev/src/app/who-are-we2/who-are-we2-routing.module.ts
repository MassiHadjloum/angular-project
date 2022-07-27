import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Who2Section1Component } from './who2-section1/who2-section1.component';

const routes: Routes = [
  {path: '', component: Who2Section1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoAreWe2RoutingModule { }
