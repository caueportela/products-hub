import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from '../dto/create-category.input';

@Injectable()
export class CategoryService {
    productRepository: any;  
     constructor(
 @InjectRepository(Category) 
    private readonly CategoryRepository: Repository<Category>,
  ) {}  

async createCategory(data: CreateCategoryInput): Promise<Category> { 
    const category = await this.CategoryRepository.create(data); 
    const categorySaved = await this.CategoryRepository.save(category);  
     
    if(!categorySaved){ 
        throw new InternalServerErrorException
    }
     
    return categorySaved;
} 

async findAllCategories(): Promise<Category[]> { 
  const category = await this.CategoryRepository.find();
  return category;
}

 



}
