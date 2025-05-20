import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Category } from './entities/category.entity';

@Controller('categories')
@ApiTags("Categories")
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @ApiOperation({ summary: 'Thêm mới danh mục sản phẩm' })
  @ApiResponse({ status: 201, description: 'Thêm mới danh mục sản phẩm thành công.', type: Category })
  @ApiResponse({ status: 400, description: 'Đã xảy ra lỗi.' })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lấy danh sách danh mục sản phẩm' })
  @ApiResponse({ status: 200, description: 'Danh sách danh mục sản phẩm trả về.', type: [Category] })
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Lấy thông tin danh mục sản phẩm theo id' })
  @ApiResponse({ status: 200, description: 'Thông tin danh mục sản phẩm trả về.', type: Category })
  @ApiResponse({ status: 404, description: 'Không tìm danh mục thấy sản phẩm.' })
  findOne(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Cập nhật thông tin danh mục sản phẩm' })
  @ApiResponse({ status: 200, description: 'Cập nhật thành công.', type: Category })
  @ApiResponse({ status: 404, description: 'Không tìm thấy sản phẩm.' })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Xóa danh mục sản phẩm theo id' })
  @ApiResponse({ status: 200, description: 'Xóa thành công.' })
  @ApiResponse({ status: 404, description: 'Không tìm thấy sản phẩm.' })
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
