import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UserDto } from './interfaces/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public async register(id: UserDto): Promise<User> {
    const user = new User();
    user.firstName = id.firstName;
    return await this.userRepository.save(id);
  }
}
