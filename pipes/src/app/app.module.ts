import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MlKmPipe } from './ml-km.pipe';
import { CelFrhPipe } from './cel-frh.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MlKmPipe,
    CelFrhPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
