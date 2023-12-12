import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
    ) { }

    async createUser(dto: CreateUserDto): Promise<UserEntity> {
        try {
            const user = this.repository.create(dto);
            const createdUser = await this.repository.save(user);
            return createdUser;
        } catch (error) {
            throw error;
        }
    }
}
