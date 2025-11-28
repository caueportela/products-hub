import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductOutput } from './dto/product-output';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) // <-- precisa passar a entidade aqui
    private readonly productRepository: Repository<Product>,
  ) {} 
 
async createProduct(data: CreateProductInput): Promise<Product> { 
   const product = await this.productRepository.create(data); 
   const productSaved = await this.productRepository.save(product); 

   if(!productSaved) { 
    throw new InternalServerErrorException("Erro ao criar o produto");
   }
  return productSaved;
}
 
async findAll(): Promise<Product[]>{ 
const product = await this.productRepository.find(); 
return product;
}

async getProductByName(name: string): Promise<ProductOutput[]>{ 
   const product = await this.productRepository.findBy({name});  
   
   if(!product) { 
    throw  new NotFoundException("Produtos não foram encontrados");
   } 
   
    return product;

}







}