import { Body, Controller, Get, Param, Post, Put, Query, HttpStatus, HttpCode, Res } from '@nestjs/common';
import { response, Response } from 'express';

let products = [];
@Controller('products')
export class ProductsController {
  /// get all products
  @Get('/')
  @HttpCode(HttpStatus.OK)
  getProducts(): object {
    return {
      message: 'All products',
      products,
    };
  }
  /// [getOne] get one product
  @Get('/:id')
  getOne(@Res() response: Response, @Param('id') id: string): any {
    response.status(200).send('Product with id: ' + id);
  }

  /// get products by query
  @Get('/productsByQuery')
  getProductsByQuery(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ): string {
    return 'Category with id: ' + limit + ' and product with id: ' + offset;
  }

  /// Create a new product
  @Post('/')
  createProduct(@Body() payload: object): object {
    products.push(payload);
    return {
      message: 'Product created successfully',
      payload,
    };
  }
  /// Update a product
  @Put('/:id')
  updateProduct(@Param('id') id: string, @Body() payload: object): object {
    /// update the product
    products = products.map((product) => {
      if (product.id === Number.parseInt(id)) {
        return {
          ...product,
          ...payload,
        };
      }
      return product;
    });
    return {
      message: 'Product updated successfully',
      id,
      payload,
    };
  }
}
