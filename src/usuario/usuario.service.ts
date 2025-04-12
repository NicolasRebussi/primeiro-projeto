// src/usuario/usuario.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import * as bcrypt from 'bcrypt'; // Importa o bcrypt para criptografar a senha

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {} // Injeção de dependência do PrismaService

  /**
   * Cria um novo usuário.
   * Recebe um DTO com os dados necessários, verifica se o email já existe,
   * e cria o usuário no banco de dados com a senha criptografada.
   */
  async create(data: CreateUsuarioDto) {
    // Verifica se já existe um usuário com o mesmo e-mail
    const existingUser = await this.prisma.usuario.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new Error('E-mail já está em uso.');
    }

    // Criptografa a senha antes de salvar
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Cria o usuário no banco de dados
    return this.prisma.usuario.create({
      data: {
        nome: data.nome,
        email: data.email,
        password: hashedPassword, // Salva a senha criptografada
      },
    });
  }

  /**
   * Retorna todos os usuários cadastrados no banco.
   * Este método busca todos os registros na tabela 'usuario'.
   */
  async findAll() {
    return this.prisma.usuario.findMany();
  }

  /**
   * Retorna um usuário específico pelo ID.
   * Recebe o ID e busca o usuário correspondente no banco.
   */
  async findOne(id: number) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  /**
   * Atualiza os dados de um usuário.
   * Recebe o ID e os novos dados, e atualiza o registro correspondente no banco.
   */
  async update(id: number, data: UpdateUsuarioDto) {
    return this.prisma.usuario.update({ where: { id }, data });
  }

  /**
   * Remove um usuário do banco de dados.
   * Recebe o ID do usuário e deleta o registro correspondente.
   */
  async remove(id: number) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
