import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  // Endpoint to create a Payment Intent
  @Post('create-payment-intent')
  async createPaymentIntent(@Body('amount') amount: number, @Body('currency') currency: string) {
    try {
      const clientSecret = await this.stripeService.createPaymentIntent(amount, currency);
      return { clientSecret };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
