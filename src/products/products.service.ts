import { Injectable } from '@nestjs/common';
import { IProduct } from './entities/product.entity';
import { IBlog } from './entities/blog.entity';
import { IBrand } from './entities/brand.entity';
import * as Products from './product.json'
import * as Blogs from './blog.json'
import * as Brands from './brand.json'

@Injectable()
export class ProductsService {
  public products: IProduct[] = Products.products;

  addProductList(product: IProduct): Array<IProduct> {
    this.products.push(product);
    return this.products;

  }
  getProductList(): Array<IProduct> {
    return Products.products
  }
  getOneProduct(id: string): IProduct {
    return Products.products.find(product => product.id === id)
  }
  getBlog(): Array<IBlog> {
    return Blogs.blogs
  }
  getBrand(): Array<IBrand> {
    return Brands.brands
  }
}
