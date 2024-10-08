import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { SharedModule } from '../shared/shared.module';
import { ModalComponentComponent } from './modal-component/modal-component.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    ModsHomeComponent,
    ModalComponentComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule
  ]
})
export class ModsModule { }
