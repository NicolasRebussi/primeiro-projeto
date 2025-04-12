// src/usuario/usuario.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario') // Definindo o prefixo para as rotas deste controller
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  /**
   * POST /usuario
   * Cria um novo usuário no sistema.
   */
  @Post()
  create(@Body() dto: CreateUsuarioDto) {
    return this.usuarioService.create(dto);
  }

  /**
   * GET /usuario
   * Retorna todos os usuários cadastrados.
   */
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  /**
   * GET /usuario/:id
   * Retorna um usuário específico, dado seu ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  /**
   * PATCH /usuario/:id
   * Atualiza os dados de um usuário específico.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUsuarioDto) {
    return this.usuarioService.update(+id, dto);
  }

  /**
   * DELETE /usuario/:id
   * Remove um usuário do sistema.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(+id);
  }
}
