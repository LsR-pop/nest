import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostController } from './post.controller';
import { FileService } from 'src/shared/services/file.service';
import { StringService } from 'src/shared/services/string.service';

@Module({
  imports: [FileService, StringService],
  providers: [PostService, FileService, StringService],
  controllers: [PostController],
})
export class PostModule {}
