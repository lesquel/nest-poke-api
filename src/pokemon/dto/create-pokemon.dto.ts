import {
  IsString,
  IsInt,
  Min,
  Max,
  IsNumber,
  IsPositive,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @Min(1)
  @Max(800)
  @IsNumber()
  @IsPositive()
  no: number;
}
