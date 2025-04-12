// src/curso/curso.module.ts
import { Module } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoController } from './curso.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; // importe aqui

@Module({
  imports: [PrismaModule], // <-- ESSENCIAL para funcionar
  controllers: [CursoController],
  providers: [CursoService],
})
export class CursoModule {}
