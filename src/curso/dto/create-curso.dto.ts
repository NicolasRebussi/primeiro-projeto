// src/curso/dto/create-curso.dto.ts
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCursoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  universidade_id: string;

  @IsInt()
  endereco_id: number;
}
