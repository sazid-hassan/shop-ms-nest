import { IsEmail, IsString } from "class-validator";
import { UserEntity } from "../entities/user.entity";
import { IsUnique } from '../is-unique.decorator';

export class CreateUserDto {
    @IsString()
    user_name: string;

    @IsString()
    user_password: string;

    @IsEmail()
    @IsUnique(UserEntity, { message: 'Email address must be unique' })
    user_email: string;

    @IsString()
    user_type: string;

}
