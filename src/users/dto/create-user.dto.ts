import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @MaxLength(255)
  @IsEmail()
  email: string;

  @MinLength(6)
  @MaxLength(255)
  @IsString()
  password: string;
}
