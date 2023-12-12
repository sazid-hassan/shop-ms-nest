import { IsDate, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    public category_name: string;

    @IsDate()
    public category_date: Date;
}
