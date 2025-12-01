import { Module } from '@nestjs/common';
import { CategoryResolver } from './resolvers/category.resolver';
import { CategoryService } from './services/category.service'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Category } from './entities/category.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Category]) // registra as entidades no módulo
  ],
  providers: [CategoryResolver, CategoryService],
})
export class CategoriesModule {}




