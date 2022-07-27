import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { CardComponent } from './section2/card/card.component';
import { ChooseUsComponent } from './section2/choose-us/choose-us.component';
import { OurSolutionsComponent } from './section2/our-solutions/our-solutions.component';
import { Section3Component } from './section3/section3.component';
import { StatComponent } from './section3/stat/stat.component';
import { CardsComponent } from './section3/cards/cards.component';
import { Section4Component } from './section4/section4.component';
import { WhoAreWeComponent } from './section4/who-are-we/who-are-we.component';
import { OurTeamComponent } from './section4/our-team/our-team.component';
import { CardTComponent } from './section4/our-team/card-t/card-t.component';
import { Section5Component } from './section5/section5.component';
import { StarsComponent } from './section5/stars/stars.component';
import { OurPricingComponent } from './section5/our-pricing/our-pricing.component';
import { DetailPricingComponent } from './section5/detail-pricing/detail-pricing.component';
import { FooterComponent } from './footer/footer.component';
import { SwitchComponent } from './section5/our-pricing/switch/switch.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [

    Section1Component,
    Section2Component,
    CardComponent,
    ChooseUsComponent,
    OurSolutionsComponent,
    Section3Component,
    StatComponent,
    CardsComponent,
    Section4Component,
    WhoAreWeComponent,
    OurTeamComponent,
    CardTComponent,
    Section5Component,
    StarsComponent,
    OurPricingComponent,
    DetailPricingComponent,
    FooterComponent,
    SwitchComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AccueilRoutingModule,
    SharedModule
  ],
  exports: [

  ]
})
export class AccueilModule { }
