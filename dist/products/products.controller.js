"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const product_entity_1 = require("./entities/product.entity");
let ProductsController = class ProductsController {
    constructor(productsService) {
        this.productsService = productsService;
    }
    addProductList(product) {
        return this.productsService.addProductList(product);
    }
    getProductList() {
        return this.productsService.getProductList();
    }
    getOneProduct(productId) {
        return this.productsService.getOneProduct(productId);
    }
    getBlog() {
        return this.productsService.getBlog();
    }
    getBrand() {
        return this.productsService.getBrand();
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Post)('/addProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_entity_1.IProduct]),
    __metadata("design:returntype", Array)
], ProductsController.prototype, "addProductList", null);
__decorate([
    (0, common_1.Get)('/getProducts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductsController.prototype, "getProductList", null);
__decorate([
    (0, common_1.Get)('/getProduct/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", product_entity_1.IProduct)
], ProductsController.prototype, "getOneProduct", null);
__decorate([
    (0, common_1.Get)('/getBlogs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductsController.prototype, "getBlog", null);
__decorate([
    (0, common_1.Get)('/getBrands'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ProductsController.prototype, "getBrand", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map