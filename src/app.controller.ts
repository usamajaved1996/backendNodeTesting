import { Controller, Get, Param } from '@nestjs/common';
import { AppService, IProduct, IBlog, IBrand } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/getProducts')
  getProductList(): Array<IProduct> {
    return this.appService.getProductList();
  }

  @Get('/getProduct/:id')
  getOneProduct(@Param('id') productId: string): IProduct {
    return this.appService.getOneProduct(productId);
  }
  @Get('/getBlogs')
  getBlog(): Array<IBlog> {
    return this.appService.getBlog();
  }
  @Get('/getBrands')
  getBrand(): Array<IBrand> {
    return this.appService.getBrand();
  }
}
