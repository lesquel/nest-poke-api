import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): Promise<(import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, {}> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | undefined>;
    findAll(paguinationDto: PaginationDto): Promise<{
        info: {
            limit: number;
            offset: number;
        };
        results: (import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, {}> & import("./entities/pokemon.entity").Pokemon & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string): Promise<import("./entities/pokemon.entity").Pokemon>;
    update(id: string, updatePokemonDto: UpdatePokemonDto): Promise<{
        name?: string | undefined;
        no?: number | undefined;
    } | undefined>;
    remove(id: string): Promise<void>;
}
