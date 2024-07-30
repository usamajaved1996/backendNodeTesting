import { AppService, IProduct, IBlog, IBrand } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getProductList(): Array<IProduct>;
    getOneProduct(productId: string): IProduct;
    getBlog(): Array<IBlog>;
    getBrand(): Array<IBrand>;
}
