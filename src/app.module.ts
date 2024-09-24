import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { StripeModule } from './stripe/stripe.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://usamashah2077:6qlCet69kyPzdaIR@mernproject-pro.us5g4.mongodb.net/'),
    ProductsModule, StripeModule], // Combine modules into a single imports array
})
export class AppModule {}
