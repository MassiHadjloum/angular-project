import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './accueil/home/home.component';

const routes: Routes = [
  {
    path: 'accueil',
    loadChildren: () =>
      import('./accueil/accueil.module').then((modul) => modul.AccueilModule),
  },
  {
    path: 'who-are-we1',
    loadChildren: () =>
      import('./who-are-we1/who-are-we1.module').then(
        (modul) => modul.WhoAreWe1Module
      ),
  },
  {
    path: 'who-are-we2',
    loadChildren: () =>
      import('./who-are-we2/who-are-we2.module').then(
        (modul) => modul.WhoAreWe2Module
      ),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
