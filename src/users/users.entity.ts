import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsEmail, IsEmpty, IsString, IsDate, IsNumber } from 'class-validator';

@Entity()
export class User {
  @ObjectIdColumn({ name: '_id' })
  public id: ObjectID;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @Column({ length: 150 })
  @IsEmpty()
  @IsString()
  public firstName: string;

  @Column({ length: 150 })
  @IsEmpty()
  @IsString()
  public lastName: string;

  @Column({ length: 100 })
  @IsEmpty()
  @IsEmail()
  public email: string;

  @Column()
  @IsEmpty()
  @IsDate()
  public birthDate: Date;

  @Column()
  @IsString()
  public language: string;

  @Column({ length: 11 })
  @IsNumber()
  public phone: number;

  @Column()
  @IsNumber()
  public zipCode: number;
}
