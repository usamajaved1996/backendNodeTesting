import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { IProduct } from './entities/product.entity';
import { IBlog } from './entities/blog.entity';
import { IBrand } from './entities/brand.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('/addProduct')
  addProductList(@Body() product: IProduct): Array<IProduct> {
    return this.productsService.addProductList(product);
  }
  
  @Get('/getProducts')
  getProductList(): Array<IProduct> {
    return this.productsService.getProductList();
  }

  @Get('/getProduct/:id')
  getOneProduct(@Param('id') productId: string): IProduct {
    return this.productsService.getOneProduct(productId);
  }
  @Get('/getBlogs')
  getBlog(): Array<IBlog> {
    return this.productsService.getBlog();
  }
  @Get('/getBrands')
  getBrand(): Array<IBrand> {
    return this.productsService.getBrand();
  }
}
