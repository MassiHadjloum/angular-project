import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServisepokemonService } from '../servisepokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css'],
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];
  selectedPokemon: Pokemon | undefined;

  selectPokemon(id: number) {
    this.selectedPokemon = this.pokemonList.find((p) => p.id == id);
    console.log(id, this.selectedPokemon);
    this.router.navigate([`/pokemons`, id]);
  }

  constructor(private router: Router, private service: ServisepokemonService) {}

  ngOnInit(): void {
    this.service
      .getPokemonList()
      .subscribe((list) => (this.pokemonList = list));
  }
}
