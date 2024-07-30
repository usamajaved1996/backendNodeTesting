import { Injectable } from '@nestjs/common';
import * as Products from './product.json'
import * as Blogs from './blog.json'
import * as Brands from './brand.json'

export interface IProduct {
  id: string,
  image:string,
  brand: string,
  review: number,
  title: string,
  offer_price: string,
  price: string,
  campaingn_product: boolean,
  cam_product_available: number,
  cam_product_sale: number,
  product_type: string
}

export interface IBlog {
  id: string,
  by:string,
  title: string,
  article: string,
  picture: string,
  comments_length: number,
}
export interface IBrand {
  id: string,
  name:string,
}
@Injectable()
export class AppService {
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
