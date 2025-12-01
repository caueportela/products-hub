import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './service/products.service';
import { CreateProductInput } from './dto/create-product.input';
import { ProductOutput } from './dto/product-output';
import { plainToInstance } from 'class-transformer';
import { Product } from './entities/product.entity';


function mapProductToOutput(product: Product): ProductOutput {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    description: product.description,
    category: {
      name: product.category.name,
    },
  };
}
@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) { }


  
  @Query(() => String)
  ping(): string {
    return 'pong';
  }

  @Mutation(() => ProductOutput)
  async createProduct(
    @Args('input') createProductInput: CreateProductInput): Promise<ProductOutput> {
    const product = await this.productsService.createProduct(createProductInput);
     return mapProductToOutput(product);
    }

  @Query(() => [ProductOutput])  
  async getProductByName(@Args('name') name: string): Promise<ProductOutput[]> {
   const product = await this.productsService.getProductByName(name); 
     return product.map(mapProductToOutput);
  }


  @Query(() => [ProductOutput])
  async findAll(): Promise<ProductOutput[]> {
    const product = await this.productsService.findAll(); // Service retorna Entidades[]
     return product.map(mapProductToOutput);    // Resolver converte para Output[]
}
}

