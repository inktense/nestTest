import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async validateUser(email: string): Promise<any> {
        const user = await this.usersService.findUserByEmail(email)
    }
}
