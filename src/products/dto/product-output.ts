import { Field, Float, ObjectType } from "@nestjs/graphql";

 

@ObjectType() 
export class ProductOutput { 

@Field() 
id: string; 

@Field() 
name: string; 

@Field(() => Float)  
price: number; 


}