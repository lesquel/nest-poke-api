import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [
    // Importamos el módulo MongooseModule para configurar el módulo de Mongoose
    MongooseModule.forFeature([{ name: Pokemon.name, schema: PokemonSchema }]),
    ConfigModule,
  ],
  exports: [MongooseModule],
})
export class PokemonModule {}
