// update-user.dto.ts
import { IsString, IsEmail } from 'class-validator';
import { IsUnique } from '../is-unique.decorator';
import { UserEntity } from '../entities/user.entity';

export class UpdateUserDto {
    @IsString()
    user_name?: string;

    @IsEmail()
    @IsUnique(UserEntity, { message: 'Email address must be unique' })
    user_email?: string;

    @IsString()
    user_type?: string;
}
