import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './modules/user/entities/user.entity';
import { ProductEntity } from './modules/product/entities/product.entity';
import { CategoryModule } from './modules/category/category.module';
import { CategoryEntity } from './modules/category/entities/category.entity';

@Module({
  imports: [
    UserModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dummy_app',
      entities: [UserEntity, ProductEntity, CategoryEntity],
      synchronize: false,
    }),
    CategoryModule,

  ],
})
export class AppModule { }
