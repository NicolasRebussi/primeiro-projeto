// src/universidade/universidade.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UniversidadeService } from './universidade.service';
import { CreateUniversidadeDto } from './dto/create-universidade.dto';
import { UpdateUniversidadeDto } from './dto/update-universidade.dto';

@Controller('universidade')
export class UniversidadeController {
  constructor(private readonly universidadeService: UniversidadeService) {}

  @Post()
  create(@Body() dto: CreateUniversidadeDto) {
    return this.universidadeService.create(dto);
  }

  @Get()
  findAll() {
    return this.universidadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.universidadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUniversidadeDto) {
    return this.universidadeService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.universidadeService.remove(+id);
  }
}
