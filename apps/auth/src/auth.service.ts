import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './users/entities/user.entity';
import { Response } from 'express';
import { UsersRepository } from './users/users.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersRepository: UsersRepository,
  ) {}

  login(user: User, response: Response) {
    const payload = { userId: user.id };
    const token = this.jwtService.sign(payload);

    response.cookie('Authentication', token, { httpOnly: true });
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });

    if (user && user.password === password) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }
}
