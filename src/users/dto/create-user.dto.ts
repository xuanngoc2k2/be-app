import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'Unique username' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'User password' })
  password: string;

  @ApiProperty({ example: 'john@example.com', description: 'User email address' })
  email: string;

  @ApiProperty({ example: '0123456789', description: 'Phone number', required: false })
  phone_number?: string;

  @ApiProperty({ example: 'John Doe', description: 'Full name', required: false })
  full_name?: string;

  @ApiProperty({ example: 'user.png', description: 'Profile image', required: false })
  image?: string;

  @ApiProperty({ example: 'USER', description: 'User role', required: false })
  role?: string;
}
