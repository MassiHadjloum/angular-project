import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokitypecolorPipe } from './pokitypecolor.pipe';
import { ServisepokemonService } from './servisepokemon.service';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { FormsModule } from '@angular/forms';
import { AddpokemonComponent } from './addpokemon/addpokemon.component';



@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokitypecolorPipe,
    EditPokemonComponent,
    PokemonFormComponent,
    AddpokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ListPokemonComponent,
    DetailPokemonComponent
  ],
  providers: [ServisepokemonService]
})
export class PokemonModule { }
