import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
   /// get the category by id and the product by id
   @Get('/categories/:id/product/:productId')
   getProductIdByUserId(
     @Param('id') id: string,
     @Param('productId') productId: string,
   ): string {
     return 'Category with id: ' + id + ' and product with id: ' + productId;
   }
}
