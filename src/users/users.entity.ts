import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsEmpty, IsString, IsDate, IsNumber } from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @IsEmpty()
  @IsString()
  firstName: string;

  @Column({ length: 150 })
  @IsEmpty()
  @IsString()
  lastName: string;

  @Column({ length: 100 })
  @IsEmpty()
  @IsEmail()
  email: string;

  @Column()
  @IsEmpty()
  @IsDate()
  birthDate: Date;

  @Column()
  @IsString()
  language: string;

  @Column({ length: 11 })
  @IsNumber()
  phone: number;

  @Column()
  @IsNumber()
  zipCode: number;
}
