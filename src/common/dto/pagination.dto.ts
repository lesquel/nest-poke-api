import { Type } from 'class-transformer';
import { IsInt, IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  offset?: number;

  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Type(() => Number)
  @Min(1)
  limit?: number;
}
