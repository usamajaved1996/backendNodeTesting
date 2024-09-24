import { IProduct } from './entities/product.entity';
import { IBlog } from './entities/blog.entity';
import { IBrand } from './entities/brand.entity';
export declare class ProductsService {
    products: IProduct[];
    addProductList(product: IProduct): Array<IProduct>;
    getProductList(): Array<IProduct>;
    getOneProduct(id: string): IProduct;
    getBlog(): Array<IBlog>;
    getBrand(): Array<IBrand>;
}
