import {
    IsNotEmpty,
    IsString,
    IsOptional,
    IsBoolean,
    IsInt,
  } from 'class-validator';
  
  // create-creature-dto
  export class CreateCreatureDto {
    @IsNotEmpty()
    @IsString()
    name: string;
  
    @IsOptional()
    @IsString()
    description?: string;
  
    @IsNotEmpty()
    @IsString()
    lastSee: string;
  
    @IsNotEmpty()
    @IsInt()
    countLastSee: number;
  
    @IsOptional()
    @IsBoolean()
    extinct?: boolean = false;
  }
  