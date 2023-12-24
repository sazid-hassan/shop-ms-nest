import { ConflictException, Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { GeneralUserDto } from "./dto/generaluser.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(UserEntity)
        private readonly repository: Repository<UserEntity>,
    ) { }


    async createUser(dto: CreateUserDto): Promise<UserEntity> {
        try {
            const user = this.repository.create(dto);
            await this.repository.save(user);
            return user;
        } catch (error) {
            if (error.code === '23505') {
                const constraintError = error.detail || error.message;
                if (constraintError.includes('user_msisdn')) {
                    throw new ConflictException('MSISDN must be unique');
                } else if (constraintError.includes('user_email')) {
                    throw new ConflictException('Email address must be unique');
                }
            }
            throw error;
        }
    }

    async getAllUser(): Promise<GeneralUserDto[]> {
        try {
            const user = await this.repository.find({ select: ["user_name", "user_email", "user_type"], });
            return user;
        }
        catch (error) {
            throw error;
        }
    }

    async getSingleUser(user_id: number): Promise<GeneralUserDto> {
        try {
            const user = await this.repository.findOne({
                where: { user_id }, select: ["user_name", "user_email", "user_type"],
            })
            return user ? user : null;
        }
        catch (error) {
            throw error;
        }
    }

    async updateUser(user_id: number, dto: UpdateUserDto): Promise<GeneralUserDto | null> {
        try {
            await this.repository.update(user_id, dto);
            const updatedUser = await this.repository.findOne({
                where: { user_id },
                select: ["user_name", "user_email", "user_type"],
            });
            return updatedUser ? updatedUser : null;
        } catch (error) {
            throw error;
        }
    }
}
