import { Test, TestingModule } from "@nestjs/testing";
import { ProductsService } from "src/modules/products/service/products.service";
import { Product } from "src/modules/products/entities/product.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import TestUtil from "./TestUtil";

describe("ProductsService Tests", () => {
  let productsService: ProductsService;
 
  const mockRepository = { 
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
          }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository
            
        
        },
      ],
    }).compile();

    productsService = module.get<ProductsService>(ProductsService);
  });

  it("should be defined", () => {
    expect(productsService).toBeDefined();
  }); 

   
describe('findAllProducts', () => { 
  it('should be list all users', async () => { 
    const mockProduct = TestUtil.giveAMeAValidProduct(); 
     mockRepository.find.mockReturnValue([mockProduct, mockProduct]); 
     
    const products = await productsService.findAll();  
    
    expect (products).toHaveLength(2); 
    expect(mockRepository.find).toHaveBeenCalledTimes(1);
  })
}) 



});
