import { Controller, Post, Req, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request } from 'express';
import { UserDto } from './interfaces/user.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {
  }

  @Post('register')
   async register(@Req() request: Request, @Body() user: UserDto) {
    await this.userService.register(user);
  }
}
