import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ConfigService } from '@nestjs/config';
export declare class PokemonService {
    private readonly pokemonModel;
    private readonly configService;
    defaultLimit: number | undefined;
    constructor(pokemonModel: Model<Pokemon>, configService: ConfigService);
    create(createPokemonDto: CreatePokemonDto): Promise<(import("mongoose").Document<unknown, {}, Pokemon, {}, {}> & Pokemon & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | undefined>;
    findAll(paginationDto: PaginationDto): Promise<{
        info: {
            limit: number;
            offset: number;
        };
        results: (import("mongoose").Document<unknown, {}, Pokemon, {}, {}> & Pokemon & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<Pokemon>;
    update(id: string, updatePokemonDto: UpdatePokemonDto): Promise<{
        name?: string | undefined;
        no?: number | undefined;
    } | undefined>;
    remove(id: string): Promise<void>;
    private handleExceptions;
}
