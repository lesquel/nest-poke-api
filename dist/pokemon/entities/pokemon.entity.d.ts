import { Document } from 'mongoose';
export declare class Pokemon extends Document {
    name: string;
    no: number;
}
export declare const PokemonSchema: import("mongoose").Schema<Pokemon, import("mongoose").Model<Pokemon, any, any, any, Document<unknown, any, Pokemon, any, {}> & Pokemon & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pokemon, Document<unknown, {}, import("mongoose").FlatRecord<Pokemon>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Pokemon> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
