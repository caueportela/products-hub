import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductInput } from '../dto/create-product.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) // <-- precisa passar a entidade aqui
    private readonly productRepository: Repository<Product>,
  ) {} 
 
async createProduct(data: CreateProductInput): Promise<Product> { 
   const product =  this.productRepository.create(data); 
   const productSaved = await this.productRepository.save(product); 

   return productSaved;
   
}
 
async findAll(): Promise<Product[]>{ 
const products = await this.productRepository.find({relations: ['category']}); 
  return products;
}

async getProductByName(name: string): Promise<Product[]>{ 
   const products = await this.productRepository.findBy({name});  
   
   if(products.length === 0) { 
    throw  new NotFoundException("Produtos não foram encontrados");
   } 
     return products;

}







}