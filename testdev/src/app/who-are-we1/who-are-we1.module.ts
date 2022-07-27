import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoAreWe1RoutingModule } from './who-are-we1-routing.module';
import { Section1Component } from './who1-section1/who1-section1.component';


@NgModule({
  declarations: [
    Section1Component
  ],
  imports: [
    CommonModule,
    WhoAreWe1RoutingModule
  ],
  exports: [

  ]
})
export class WhoAreWe1Module { }
