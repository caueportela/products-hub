import { Product } from "src/modules/products/entities/product.entity";


export default class TestUtil { 
  static giveAMeAValidProduct(): Product{ 
    const product = new Product(); 
    product.name = 'televisão Smart TV', 
    product.price = 500.00, 
    product.id = '1', 
    product.description = 'televisão 20 polegadas';
    return product;
  }




}