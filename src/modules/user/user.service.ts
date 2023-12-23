import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private repo: UserRepository) { }

  async create(dto: CreateUserDto) {
    return this.repo.createUser(dto);
  }

  findAll() {
    return this.repo.getAllUser();
  }

  findOne(id: number) {
    return this.repo.getSingleUser(id);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
