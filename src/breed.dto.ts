import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class Breed {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsInt()
  x: number;

  @IsString()
  y: string;
}
