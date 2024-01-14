import { Body, Controller, Get, Post } from '@nestjs/common'

import { ProductsService } from './products.service'

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getProducts() {
        return this.productsService.getProducts()
    }

    @Post()
    createProduct(@Body() body) {
        return this.productsService.createProduct(body)
    }
}
