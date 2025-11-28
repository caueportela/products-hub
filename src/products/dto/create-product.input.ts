 import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateProductInput {
     

@Field()  
@IsString()
name: string; 
 

@Field(() => Float)  
price: number; 

}
