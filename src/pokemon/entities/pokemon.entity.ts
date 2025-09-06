import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema() // es un decorador que nos permite definir un esquema de mongoose
export class Pokemon extends Document {
  // el document es una clase de mongoose que nos permite definir un documento de mongoose
  @Prop({
    // es un decorador que nos permite definir una propiedad de mongoose
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}
export const PokemonSchema = SchemaFactory.createForClass(Pokemon); // es una funcion que nos permite crear un esquema de mongoose a partir de una claseonSchema = SchemaFactory.createForClass(Pokemon);
