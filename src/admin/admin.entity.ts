import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false })
  name: string

  @Column({ nullable: false, unique: true })
  username: string

  @Column({ nullable: false })
  password: string
}
