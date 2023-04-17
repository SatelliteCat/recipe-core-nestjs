import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../recipe-db/users/user.service';
// import { UserService } from '../users/user.service';
// import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../recipe-db/users/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);

    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: {
    email: string;
    id: number;
  }): Promise<{ access_token: string }> {
    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(dto: {
    email: string;
    password: string;
  }): Promise<{ access_token: string }> {
    let user = new UserEntity();
    user.email = dto.email;
    user.password = bcrypt.hashSync(dto.password, 10);

    user = await this.userService.create(user);

    const payload = { email: user.email, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
