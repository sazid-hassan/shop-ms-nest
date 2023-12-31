import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {

  constructor(private repo: ProductRepository) { }

  async create(dto: CreateProductDto) {
    return this.repo.createProduct(dto)
  }

  findAll() {
    return this.repo.getAllProduct();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return this.repo.deleteProduct(id);
  }
}
