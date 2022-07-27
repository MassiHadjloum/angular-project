import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPokemonComponent } from './pokemon/list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './pokemon/detail-pokemon/detail-pokemon.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { EditPokemonComponent } from './pokemon/edit-pokemon/edit-pokemon.component';
import { AddpokemonComponent } from './pokemon/addpokemon/addpokemon.component';

const routes: Routes = [
  { path: 'edit/pokemon/:id', component: EditPokemonComponent },
  {
    path: 'pokemons',
    component: ListPokemonComponent,
  },
  { path: 'pokemon/add', component: AddpokemonComponent },
  { path: 'pokemons/:id', component: DetailPokemonComponent },
  { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
