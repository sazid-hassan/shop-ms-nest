import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {

  constructor(private repo: CategoryRepository) { }

  create(createCategoryDto: CreateCategoryDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return this.repo.getAllCategory();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
