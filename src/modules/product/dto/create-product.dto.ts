import { IsInt, IsString } from "class-validator";

export class CreateProductDto {

    @IsInt()
    category_id: number;

    @IsString()
    product_name: string;

    @IsInt()
    product_price: number;

    @IsInt()
    product_quantity: number;

    @IsString()
    product_brand: string;
}
