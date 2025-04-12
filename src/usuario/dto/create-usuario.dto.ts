// src/usuario/dto/create-usuario.dto.ts
export class CreateUsuarioDto {
  nome: string;  // Nome completo do usuário
  email: string; // E-mail único do usuário, utilizado para login
  password: string; // Senha do usuário
}
