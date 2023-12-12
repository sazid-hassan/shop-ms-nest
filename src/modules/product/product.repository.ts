import { Injectable } from "@nestjs/common";
import { ProductEntity } from "./entities/product.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductRepository {
    constructor(@InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
    ) { }

    async createProduct(dto: CreateProductDto): Promise<ProductEntity> {
        try {

            const Product = this.repository.create(dto);
            const createdProduct = await this.repository.save(Product);
            return createdProduct;
        }
        catch (error) {
            throw error;
        }
    }

    async getAllProduct() {
        try {
            const products = await this.repository.find()
            return products;
        }
        catch (error) {
            throw error;
        }
    }

    async deleteProduct(id: number) {
        return this.repository.delete(id);
    }
}