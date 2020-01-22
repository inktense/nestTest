import { User } from '../users.entity';

export class UserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly birthDate: Date;
  readonly language: string;
  readonly phone: number;
  readonly zipCode: number;
}
