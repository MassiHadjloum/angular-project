import { Pokemon } from './../pokemon';
import { Component, OnInit, Input } from '@angular/core';
import { ServisepokemonService } from '../servisepokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css'],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];
  isAddForm: boolean;

  constructor(private service: ServisepokemonService, private router: Router) {}

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
    this.types = this.service.getPokemonTypeList();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked = ($event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const idx = this.pokemon.types.indexOf(type);
      this.pokemon.types.slice(idx, 1);
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length > 2 && this.hasType(type)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.router.navigate(['/pokemons', this.pokemon.id]);
  }
}
