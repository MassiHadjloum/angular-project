import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhoAreWe2RoutingModule } from './who-are-we2-routing.module';
import { Who2Section1Component } from './who2-section1/who2-section1.component';


@NgModule({
  declarations: [
    Who2Section1Component
  ],
  imports: [
    CommonModule,
    WhoAreWe2RoutingModule
  ]
})
export class WhoAreWe2Module { }
