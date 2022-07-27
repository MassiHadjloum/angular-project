import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpokemon',
  templateUrl: './addpokemon.component.html',
  styleUrls: ['./addpokemon.component.css']
})
export class AddpokemonComponent implements OnInit {
  pokemon: Pokemon;
  constructor() { }

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }

}
