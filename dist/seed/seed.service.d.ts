import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';
export declare class SeedService {
    private readonly pokemonModel;
    private readonly http;
    constructor(pokemonModel: Model<Pokemon>, http: AxiosAdapter);
    execute(): Promise<string>;
}
