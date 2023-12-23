import { IsString } from "class-validator";

export class LoginDto {
    @IsString()
    user_email: string;

    @IsString()
    password: string;
}