import { Type } from 'class-transformer';
import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { Breed } from './breed.dto';

export class CreateCatDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;

  @IsNotEmpty()
  @Type(() => Breed)
  breed: Breed;
}
