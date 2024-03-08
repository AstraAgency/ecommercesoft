import { Products } from '@prisma/client'
import { ProductsService } from '../services/products.service'
import { Get, Put, Body, Post, Param, Delete, Controller, ParseIntPipe } from '@nestjs/common'

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts()
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    return this.productsService.getProductById(Number(id))
  }

  @Post()
  createProduct(@Body() data: Products) {
    return this.productsService.createProduct(data)
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.productsService.deleteProduct(Number(id))
  }

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() data: Products) {
    return this.productsService.updateProduct(id, data)
  }
}
