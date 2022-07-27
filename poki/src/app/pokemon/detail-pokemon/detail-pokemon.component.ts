import { ServisepokemonService } from './../servisepokemon.service';
import { POKEMONS } from './../mock-pokemon-list';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
})
export class DetailPokemonComponent implements OnInit {
  pokemon: Pokemon | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ServisepokemonService
  ) {}

  ngOnInit(): void {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service
        .getPokemonById(+id)
        .subscribe((poke) => (this.pokemon = poke));
    }
  }

  goBack() {
    this.router.navigate(['/pokemons']);
  }

  goEdit() {
    this.router.navigate(['edit/pokemon', this.pokemon?.id]);
  }

  deletePokemon(pokemon: Pokemon) {
    this.service.removePokemon(pokemon.id).subscribe(() => this.goBack());
  }
}
