import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class ProductEntity {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    category_id: number;

    @Column()
    product_name: string;

    @Column()
    product_price: number;

    @Column()
    product_quantity: number;

    @Column()
    product_brand: string;
}

