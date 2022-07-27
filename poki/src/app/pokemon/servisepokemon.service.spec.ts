import { TestBed } from '@angular/core/testing';

import { ServisepokemonService } from './servisepokemon.service';

describe('ServisepokemonService', () => {
  let service: ServisepokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServisepokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
