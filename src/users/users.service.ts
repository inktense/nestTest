import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async register(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  public async findUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne(email);
  }
}
