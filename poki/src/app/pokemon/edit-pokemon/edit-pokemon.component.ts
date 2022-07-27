import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { ServisepokemonService } from '../servisepokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.css'],
})
export class EditPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private route: ActivatedRoute,
    private service: ServisepokemonService
  ) {}

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.service
        .getPokemonById(+id)
        .subscribe((poke) => (this.pokemon = poke));
    }
  }
}
