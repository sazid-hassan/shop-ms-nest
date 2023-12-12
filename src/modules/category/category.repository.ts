import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { CategoryEntity } from "./entities/category.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoryRepository {
    constructor(@InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
    ) { }

    async getAllCategory() {
        try {
            const category = await this.repository.find();
            return category;
        }
        catch (error) {
            throw error;
        }
    }
}