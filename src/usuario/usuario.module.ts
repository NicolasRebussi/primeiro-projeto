// src/usuario/usuario.module.ts
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule], // Importa o módulo Prisma para usar o PrismaService
  controllers: [UsuarioController], // Define o controller para a rota '/usuario'
  providers: [UsuarioService], // Define o serviço para lógicas de CRUD
})
export class UsuarioModule {}
