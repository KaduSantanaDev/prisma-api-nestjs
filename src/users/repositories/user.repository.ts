import { UserEntity } from './../entities/user.entity';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.prismaService.user.create({
      data: createUserDto,
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async findAll(): Promise<UserEntity[]> {
    return this.prismaService.user.findMany({
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  findOne(id: number): Promise<UserEntity> {
    return this.prismaService.user.findUnique({
      where: {
        id,
      },
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.prismaService.user.update({
      where: {
        id,
      },
      data: updateUserDto,
      include: {
        posts: {
          select: {
            title: true,
            content: true,
            createdAt: true,
          },
        },
      },
    });
  }

  async remove(id: number): Promise<UserEntity> {
    return this.prismaService.user.delete({
      where: {
        id,
      },
    });
  }
}
