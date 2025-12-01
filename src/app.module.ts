import { Module } from '@nestjs/common';
import { AppService } from './app.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesModule } from './modules/categories/categories.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // torna o ConfigModule disponível em todo o app
      envFilePath: '.env', // opcional, se quiser especificar
    }), 
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true, 
      autoSchemaFile: true, 
       csrfPrevention: false,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // só para dev, não use em produção
      }),
    }),
    ProductsModule,
    CategoriesModule, 
  ],
  providers: [AppService],
})
export class AppModule {}
