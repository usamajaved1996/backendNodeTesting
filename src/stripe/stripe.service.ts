import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    // Initialize Stripe with your secret key
    this.stripe = new Stripe('sk_test_51PxWZ4Rr6lRflaCdZrjBTYfgaUq4wMQpFXFmSC79DRVxt11K387OM6nz6oh8ZtjXzi1ywqV31W6mCVZvkIjGDNFM00e1udXTLg', {
    });
  }

  // Create a payment intent
  async createPaymentIntent(amount: number, currency: string) {
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        amount, // Amount in cents
        currency,
        payment_method_types: ['card'],
      });
      return paymentIntent.client_secret;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
