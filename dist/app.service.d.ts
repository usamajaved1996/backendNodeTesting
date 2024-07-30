export interface IProduct {
    id: string;
    image: string;
    brand: string;
    review: number;
    title: string;
    offer_price: string;
    price: string;
    campaingn_product: boolean;
    cam_product_available: number;
    cam_product_sale: number;
    product_type: string;
}
export interface IBlog {
    id: string;
    by: string;
    title: string;
    article: string;
    picture: string;
    comments_length: number;
}
export interface IBrand {
    id: string;
    name: string;
}
export declare class AppService {
    getProductList(): Array<IProduct>;
    getOneProduct(id: string): IProduct;
    getBlog(): Array<IBlog>;
    getBrand(): Array<IBrand>;
}
