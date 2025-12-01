import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../modules/categories/entities/category.entity';

@Entity()
export class Product {
   
 @PrimaryGeneratedColumn('uuid') 
 id: string; 

 @Column() 
 name: string; 

 @Column({type: 'float'})  
 price: number; 

 @Column({type: 'varchar', nullable: true}) 
 description: string;  


@ManyToOne(() => Category, (category) => category.products)
  category: Category;
 
}

