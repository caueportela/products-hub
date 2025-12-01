import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from 'src/modules/products/service/products.service';
import { ProductsResolver } from 'src/modules/products/products.resolver';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsResolver, ProductsService],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
