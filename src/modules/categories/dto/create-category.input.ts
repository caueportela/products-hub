import { Field, InputType } from "@nestjs/graphql";
import { OneToMany } from "typeorm";
import { Product } from "src/modules/products/entities/product.entity";

 
  
@InputType()  
export class CreateCategoryInput { 

 @Field() 
 name: string;
 


}
