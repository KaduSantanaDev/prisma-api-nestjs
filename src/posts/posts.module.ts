import { PrismaService } from './../prisma/prisma.service';
import { PostsRepository } from './repositories/posts.repository';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository, PrismaService],
})
export class PostsModule {}
