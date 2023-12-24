import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('users')
@Unique(['user_msisdn', 'user_email'])
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    user_name: string;

    @Column()
    user_password: string;

    @Column()
    user_msisdn: string;

    @Column()
    user_email: string;

    @Column()
    user_type: string;
}
