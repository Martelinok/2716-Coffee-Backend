import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { BrandController } from './controllers/brand/brand.controller';


@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, OrdersController, UsersController, CustomerController, BrandController],
  providers: [AppService],
})
export class AppModule {}
