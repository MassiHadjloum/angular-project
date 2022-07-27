export class Pokemon {

  constructor(
    name: string = 'pokmon name',
    hp: number = 100,
    cp: number = 10,
    picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png",
    types: string[] = ['Normal'],
    created: Date = new Date(),
  ){

  }

  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;




  toString = () : string => {
    return this.name + " " + this.id;
  }
}
