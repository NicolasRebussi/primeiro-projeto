import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursoService {
  constructor(private prisma: PrismaService) {}

  /**
   * Cria um novo curso no banco de dados.
   * @param data Dados necessários para criar um curso (nome, universidade_id, endereco_id).
   * @returns O curso recém-criado.
   */
  async create(data: CreateCursoDto) {
    return this.prisma.curso.create({
      data,
    });
  }

  /**
   * Retorna todos os cursos cadastrados no banco.
   * @returns Lista de cursos.
   */
  async findAll() {
    return this.prisma.curso.findMany();
  }

  /**
   * Busca um curso específico pelo seu ID.
   * @param id ID do curso a ser buscado.
   * @returns O curso encontrado, ou null se não existir.
   */
  async findOne(id: number) {
    return this.prisma.curso.findUnique({
      where: { id },
    });
  }

  /**
   * Atualiza os dados de um curso existente.
   * @param id ID do curso a ser atualizado.
   * @param data Dados novos para atualizar o curso.
   * @returns O curso atualizado.
   */
  async update(id: number, data: UpdateCursoDto) {
    return this.prisma.curso.update({
      where: { id },
      data,
    });
  }

  /**
   * Remove um curso do banco de dados.
   * @param id ID do curso a ser removido.
   * @returns O curso deletado.
   */
  async remove(id: number) {
    return this.prisma.curso.delete({
      where: { id },
    });
  }
}
