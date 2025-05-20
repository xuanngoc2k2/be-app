import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@Controller('products')
@ApiTags("Products")
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post()
  @ApiOperation({ summary: 'Thêm mới sản phẩm' })
  @ApiResponse({ status: 201, description: 'Thêm mới sản phẩm thành công.', type: Product })
  @ApiResponse({ status: 400, description: 'Đã xảy ra lỗi.' })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
  
  @Get()
  @ApiOperation({ summary: 'Lấy danh sách sản phẩm' })
  @ApiResponse({ status: 200, description: 'Danh sách sản phẩm trả về.', type: [Product] })
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy thông tin sản phẩm theo id' })
  @ApiResponse({ status: 200, description: 'Thông tin sản phẩm trả về.', type: Product })
  @ApiResponse({ status: 404, description: 'Không tìm thấy sản phẩm.' })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật thông tin sản phẩm' })
  @ApiResponse({ status: 200, description: 'Cập nhật thành công.', type: Product })
  @ApiResponse({ status: 404, description: 'Không tìm thấy sản phẩm.' })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa sản phẩm theo id' })
  @ApiResponse({ status: 200, description: 'Xóa thành công.' })
  @ApiResponse({ status: 404, description: 'Không tìm thấy sản phẩm.' })
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
