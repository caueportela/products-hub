import { Field, ObjectType } from "@nestjs/graphql";

 


@ObjectType()  
export class CategoryOutput { 
 
@Field()  
name: string;


}