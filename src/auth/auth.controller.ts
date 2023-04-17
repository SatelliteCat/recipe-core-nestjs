import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';

// import { LocalAuthGuard } from './local-auth.guard';

@Controller({ version: '1' })
export class AuthController {
  constructor(private authService: AuthService) {}

  // @UseGuards(LocalAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('auth/login')
  async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);

    if (!user) {
      throw new BadRequestException('Неправильный логин или пароль.');
    }

    return this.authService.login(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('auth/logout')
  async logout() {
    // TODO: Clear session
  }

  @UsePipes(new ValidationPipe())
  @Post('auth/register')
  async register(@Body() dto: LoginUserDto) {
    return this.authService.register(dto);
  }
}
