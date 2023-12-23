import { IsString } from "class-validator";

export class GeneralUserDto {
    @IsString()
    user_name: string;

    @IsString()
    user_email: string;

    @IsString()
    user_type: string;

}
