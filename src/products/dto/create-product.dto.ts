import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {

  @ApiProperty({ example: "Trà sữa", description: 'Tên món' })
  name: string;

  @ApiProperty({ example: "Trà sữa hồng trà", description: 'Tên món', required: false })
  description: string;

  @ApiProperty({ example: "Ảnh trà sữa", description: 'Hình ảnh', required: false })
  image: string;
}