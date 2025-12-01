import { Field, Float, ObjectType } from "@nestjs/graphql";
import { IsString, length } from "class-validator";
import { CategoryOutput } from "../../modules/categories/dto/category-output";

 

@ObjectType() 
export class ProductOutput { 

@Field() 
id: string; 

@Field() 
name: string; 

@Field(() => Float)  
price: number;  

@Field()  
@IsString() 
description: string;

@Field(() => CategoryOutput)
category: CategoryOutput;

}