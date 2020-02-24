import { Entity, Column, CreateDateColumn, UpdateDateColumn, ObjectID, ObjectIdColumn } from 'typeorm';
import { IsEmail, IsNotEmpty, IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export enum language {
  ENGB = 'en-gb',
}

@Entity()
export class User {
  @ObjectIdColumn({ name: '_id' })
  public id: ObjectID;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;

  @Column({ length: 150 })
  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @Column({ length: 150 })
  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @Column({ length: 100 })
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @Column()
  @IsOptional()
  @IsDate()
  public birthDate: Date;

  @Column({
    type: 'enum',
    enum: language,
    default: language.ENGB
  })
  @IsNotEmpty()
  @IsString()
  public language: language;

  @Column({ length: 11 })
  @IsNumber()
  @IsOptional()
  public phone: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  public zipCode: number;
}
