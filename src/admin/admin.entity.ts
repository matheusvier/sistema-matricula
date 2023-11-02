import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  username: string

  @Column()
  password: string
}