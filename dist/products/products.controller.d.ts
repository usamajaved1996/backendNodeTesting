import { ProductsService } from './products.service';
import { IProduct } from './entities/product.entity';
import { IBlog } from './entities/blog.entity';
import { IBrand } from './entities/brand.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProductList(product: IProduct): Array<IProduct>;
    getProductList(): Array<IProduct>;
    getOneProduct(productId: string): IProduct;
    getBlog(): Array<IBlog>;
    getBrand(): Array<IBrand>;
}
