import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewsHomeComponent } from './views-home/views-home.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemListComponentComponent } from './item-list-component/item-list-component.component';


@NgModule({
  declarations: [
    ViewsHomeComponent,
    StatisticsComponent,
    ItemListComponentComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    SharedModule,

  ]
})
export class ViewsModule { }
