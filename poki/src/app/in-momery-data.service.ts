import { POKEMONS } from './pokemon/mock-pokemon-list';
import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMomeryDataService implements InMemoryDbService{

  createDb(){
      const pokemon = POKEMONS;
      return { pokemon };
  }

  constructor() { }
}
