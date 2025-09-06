import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name) private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  // async execute() {
  //   await this.pokemonModel.deleteMany({});
  //
  //   const { data } = await this.axios.get<PokeResponse>(
  //     ' https://pokeapi.co/api/v2/pokemon?offset=650&limit=100',
  //   );
  //
  //   const insertPromisesArray: Promise<Pokemon>[] = [];
  //
  //   data.results.forEach(({ name, url }) => {
  //     const segments = url.split('/');
  //     const no = +segments[segments.length - 2];
  //     insertPromisesArray.push(this.pokemonModel.create({ name, no }));
  //   });
  //
  //   await Promise.all(insertPromisesArray);
  //
  //   return 'Seed executed';
  // }

  async execute() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      ' https://pokeapi.co/api/v2/pokemon?offset=650&limit=200',
    );

    const pokemonToInsert: { name: string; no: number }[] = [];

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      pokemonToInsert.push({ name, no });
    });

    this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed executed';
  }
}
