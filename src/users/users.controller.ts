import { Controller, Post, Req, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
import { UserDto } from './interfaces/user.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Post('register')
   async register(@Req() request: Request, @Body() user: User) {
    await this.userService.register(user);
  }
}
