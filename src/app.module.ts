import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { UniversidadeModule } from './universidade/universidade.module';
import { CursoModule } from './curso/curso.module';

@Module({
  imports: [UsuarioModule, UniversidadeModule, CursoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}