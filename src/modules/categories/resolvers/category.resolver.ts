import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from '../services/category.service';
import { CategoryOutput } from '../dto/category-output';
import { Category } from '../entities/category.entity';
// Importação obrigatória do DTO de entrada (ajuste o caminho)
import { CreateCategoryInput } from '../dto/create-category.input'; 
 

function mapCategoryToOutput(category: Category): CategoryOutput {
    // Note: Você pode usar plainToInstance(CategoryOutput, category) se o DTO for uma classe
    return {
      name: category.name,
    };
}


@Resolver()
export class CategoryResolver { 
  constructor(private readonly categoryService: CategoryService) { }
  
  
  @Mutation(() => CategoryOutput) 
  async createCategory( 
    @Args('input') createCategoryInput: CreateCategoryInput): Promise<CategoryOutput> {
      
      const category = await this.categoryService.createCategory(createCategoryInput); 
      
      return mapCategoryToOutput(category);
  } 


  @Query(() => [CategoryOutput])
  async findAllCategories(): Promise<CategoryOutput[]> {
    // CORREÇÃO 4: O método do service deve ser 'findAll' ou similar
    const categories: Category[] = await this.categoryService.findAllCategories(); 

    return categories.map(mapCategoryToOutput); 
  }
}