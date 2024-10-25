import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get('')
  getOrders(): string {
    return 'This is the list of orders';
  }
}
