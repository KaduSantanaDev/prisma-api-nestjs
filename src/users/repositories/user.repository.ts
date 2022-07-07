import { UserEnity } from './../entities/user.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEnity> {
    return this.prismaService.user.create({
      data: createUserDto,
    });
  }

  async findAll(): Promise<UserEnity[]> {
    return this.prismaService.user.findMany();
  }

  findOne(id: number): Promise<UserEnity> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEnity> {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<UserEnity> {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
