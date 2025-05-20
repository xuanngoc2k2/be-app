import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) { }
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepo.create(createProductDto);
    return await this.productRepo.save(newProduct);
  }

  async findAll() {
    return await this.productRepo.find();  // Trả về danh sách tất cả sản phẩm
  }

  async findOne(id: number) {
    return await this.productRepo.findOneBy({ id });  // Tìm sản phẩm theo id
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    await this.productRepo.update(id, updateProductDto);  // Cập nhật dữ liệu
    return this.findOne(id);  // Trả về sản phẩm vừa cập nhật
  }

  async remove(id: number) {
    const product = await this.findOne(id);
    if (!product) {
      // Xử lý trường hợp không tìm thấy sản phẩm
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return await this.productRepo.remove(product);
  }
}
