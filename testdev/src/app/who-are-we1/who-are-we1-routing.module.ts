import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1Component } from './who1-section1/who1-section1.component';

const routes: Routes = [
  {path: '', component: Section1Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhoAreWe1RoutingModule { }
