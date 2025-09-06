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
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const pokemon_entity_1 = require("../pokemon/entities/pokemon.entity");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const axios_adapter_1 = require("../common/adapters/axios.adapter");
let SeedService = class SeedService {
    pokemonModel;
    http;
    constructor(pokemonModel, http) {
        this.pokemonModel = pokemonModel;
        this.http = http;
    }
    async execute() {
        await this.pokemonModel.deleteMany({});
        const data = await this.http.get(' https://pokeapi.co/api/v2/pokemon?offset=650&limit=200');
        const pokemonToInsert = [];
        data.results.forEach(({ name, url }) => {
            const segments = url.split('/');
            const no = +segments[segments.length - 2];
            pokemonToInsert.push({ name, no });
        });
        this.pokemonModel.insertMany(pokemonToInsert);
        return 'Seed executed';
    }
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(pokemon_entity_1.Pokemon.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        axios_adapter_1.AxiosAdapter])
], SeedService);
//# sourceMappingURL=seed.service.js.map