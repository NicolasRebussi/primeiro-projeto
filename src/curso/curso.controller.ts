import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Controller('curso') // Define o prefixo das rotas como /curso
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

  /**
   * Rota POST /curso
   * Cria um novo curso com os dados fornecidos no corpo da requisição.
   * @param createCursoDto Dados do curso (nome, universidade_id, endereco_id).
   * @returns O curso criado.
   */
  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursoService.create(createCursoDto);
  }

  /**
   * Rota GET /curso
   * Retorna todos os cursos cadastrados.
   * @returns Lista de cursos.
   */
  @Get()
  findAll() {
    return this.cursoService.findAll();
  }

  /**
   * Rota GET /curso/:id
   * Retorna um curso específico pelo ID fornecido na URL.
   * @param id ID do curso a ser buscado.
   * @returns Curso correspondente ao ID.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cursoService.findOne(+id); // +id transforma string em número
  }

  /**
   * Rota PATCH /curso/:id
   * Atualiza um curso específico com os dados fornecidos.
   * @param id ID do curso a ser atualizado.
   * @param updateCursoDto Dados parciais do curso.
   * @returns Curso atualizado.
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(+id, updateCursoDto);
  }

  /**
   * Rota DELETE /curso/:id
   * Remove um curso do banco de dados.
   * @param id ID do curso a ser removido.
   * @returns Curso deletado.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }
}
