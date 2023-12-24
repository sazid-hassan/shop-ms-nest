import { Injectable, NotFoundException } from '@nestjs/common';
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updatedUser = await this.repo.updateUser(id, updateUserDto);
      if (!updatedUser) {
        throw new NotFoundException(`User with ID ${id} not found`);
      }
      return updatedUser;
    } catch (error) {
      throw error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
