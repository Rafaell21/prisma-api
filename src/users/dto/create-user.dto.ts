import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Email do Usuário' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Nome Completo do Usuário' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Defini se o Usuário é Administrador',
    default: false,
  })
  @IsBoolean()
  admin: boolean;
}
