"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const pokemon_entity_1 = require("./entities/pokemon.entity");
const exceptions_1 = require("@nestjs/common/exceptions");
const config_1 = require("@nestjs/config");
let PokemonService = class PokemonService {
    pokemonModel;
    configService;
    defaultLimit;
    constructor(pokemonModel, configService) {
        this.pokemonModel = pokemonModel;
        this.configService = configService;
        this.defaultLimit = this.configService.get('defaultLimit');
    }
    async create(createPokemonDto) {
        createPokemonDto.name = createPokemonDto.name.toLowerCase();
        try {
            const pokemon = await this.pokemonModel.create(createPokemonDto);
            return pokemon;
        }
        catch (error) {
            this.handleExceptions(error);
        }
    }
    async findAll(paginationDto) {
        const { limit = Number(this.defaultLimit), offset = 0 } = paginationDto;
        const pokemons = await this.pokemonModel
            .find()
            .limit(limit)
            .skip(offset)
            .sort({
            no: 1,
        })
            .exec();
        return {
            info: {
                limit,
                offset,
            },
            results: pokemons,
        };
    }
    async findOne(id) {
        let pokemon = null;
        if (!isNaN(+id)) {
            pokemon = await this.pokemonModel.findOne({
                no: id,
            });
        }
        if (!pokemon && (0, mongoose_2.isValidObjectId)(id)) {
            pokemon = await this.pokemonModel.findById(id);
        }
        if (!pokemon) {
            pokemon = await this.pokemonModel.findOne({ name: id.toLowerCase() });
        }
        if (!pokemon) {
            throw new common_1.NotFoundException(`Pokemon ${id} not found`);
        }
        return pokemon;
    }
    async update(id, updatePokemonDto) {
        const pokemon = await this.findOne(id);
        if (updatePokemonDto.name)
            updatePokemonDto.name = updatePokemonDto.name.toLowerCase();
        try {
            await pokemon?.updateOne(updatePokemonDto, {
                new: true,
            });
            return {
                ...pokemon?.toJSON(),
                ...updatePokemonDto,
            };
        }
        catch (error) {
            this.handleExceptions(error);
        }
    }
    async remove(id) {
        const { acknowledged, deletedCount } = await this.pokemonModel.deleteOne({
            _id: id,
        });
        if (deletedCount === 0) {
            throw new common_1.NotFoundException(`Pokemon ${id} not found`);
        }
        return;
    }
    handleExceptions(error) {
        if (error.code === 11000) {
            throw new common_1.BadRequestException(`Pokemon exists in db ${JSON.stringify(error.keyValue)}`);
        }
        console.log(error);
        throw new exceptions_1.InternalServerErrorException(error);
    }
};
exports.PokemonService = PokemonService;
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        config_1.ConfigService])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map