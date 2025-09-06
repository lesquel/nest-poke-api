"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const path_1 = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const pokemon_module_1 = require("./pokemon/pokemon.module");
const common_module_1 = require("./common/common.module");
const seed_module_1 = require("./seed/seed.module");
const config_1 = require("@nestjs/config");
const env_config_1 = require("./config/env.config");
const joi_validation_1 = require("./config/joi.validation");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                load: [env_config_1.envConfig],
                isGlobal: true,
                validationSchema: joi_validation_1.JoiValidationSchema,
            }),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
            }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    uri: configService.get('mongodb'),
                    dbName: 'pokemon',
                }),
            }),
            pokemon_module_1.PokemonModule,
            common_module_1.CommonModule,
            seed_module_1.SeedModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map