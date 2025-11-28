import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { ProductOutput } from './dto/product-output';



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
    const product = this.productsService.createProduct(createProductInput);
    return product;
  }

  @Query(() => [ProductOutput])  
  async getProductByName(@Args('name') name: string): Promise<ProductOutput[]> {
   return this.productsService.getProductByName(name);
  }


  @Query(() => [ProductOutput])
  async findAll(): Promise<ProductOutput[]> {
    return this.productsService.findAll();
  }
}

