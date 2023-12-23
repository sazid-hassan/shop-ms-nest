import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { GeneralUserDto } from "./dto/generaluser.dto";

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

    async getAllUser(): Promise<GeneralUserDto[]> {
        try {
            const user = this.repository.find({ select: ["user_name", "user_email", "user_type"], });
            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async getSingleUser(user_id: number): Promise<any> {
        try {
            const user = await this.repository.findOne({ where: { user_id } })
            return user;
        }
        catch (error) {
            throw error;
        }
    }
}
