// src/universidade/universidade.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUniversidadeDto } from './dto/create-universidade.dto';
import { UpdateUniversidadeDto } from './dto/update-universidade.dto';

@Injectable()
export class UniversidadeService {
  constructor(private prisma: PrismaService) {}

  /**
   * Cria uma nova universidade.
   */
  async create(data: CreateUniversidadeDto) {
    return this.prisma.universidade.create({
      data,
    });
  }

  /**
   * Retorna todas as universidades cadastradas.
   */
  async findAll() {
    return this.prisma.universidade.findMany();
  }

  /**
   * Busca uma universidade pelo ID.
   */
  async findOne(id: number) {
    return this.prisma.universidade.findUnique({
      where: { id },
    });
  }

  /**
   * Atualiza uma universidade existente.
   */
  async update(id: number, data: UpdateUniversidadeDto) {
    return this.prisma.universidade.update({
      where: { id },
      data,
    });
  }

  /**
   * Remove uma universidade do banco.
   */
  async remove(id: number) {
    return this.prisma.universidade.delete({
      where: { id },
    });
  }
}
