import { POKEMONS } from './mock-pokemon-list';
import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable(/* {
  providedIn: 'root',
} */)
export class ServisepokemonService {
  constructor(private http: HttpClient) {}

  /* getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('/api/pokemon').pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, []))
    );
  } */
  getPokemonList(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

  /* getPokemonById(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(`/api/pokemon${id}`).pipe(
      tap((res) => this.log(res)),
      catchError((err) => this.handleError(err, []))
    );
  } */
  getPokemonById(id: number): Observable<Pokemon | undefined> {
    const pokemon = POKEMONS.find(p => p.id == id);
    return of(pokemon);
  }

  removePokemon(id: number): Observable<null> {
    const idx = POKEMONS.findIndex(p => p.id == id);
    POKEMONS.splice(idx, 1);
    return of(null);
  }

  private log(response: Pokemon| Pokemon[]| undefined) {
    console.table(response);
  }

  private handleError(err: Error, erroValue: any) {
    console.error(err);
    return of(erroValue);
  };


  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combar',
      'Psy',
    ];
  }
}
