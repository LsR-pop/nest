import {
  Body,
  Redirect,
  HttpCode,
  Post,
  Controller,
  Get,
  Header,
  Param,
  Req,
} from '@nestjs/common';
import { PostService } from './services/post.service';
import { Request } from 'express';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('all')
  returnAllPosts(): string {
    console.log(this.postService.findAll());
    return JSON.stringify(this.postService.findAll());
  }

  @Get('findone/:id')
  returnOneById(@Param() param: { id: string }) {
    console.log(param.id);
    console.log(this.postService.find(parseInt(param.id)));
    return JSON.stringify(this.postService.find(parseInt(param.id)));
  }

  @Get('log-request')
  returnRequestObject(@Req() request: Request): void {
    console.log(request);
  }

  @Get('redirect-301')
  @Redirect('redirected', 301)
  redirectPost(): void {
    console.log('redirecting...');
  }

  @Get('redirected')
  redirected(): string {
    return 'redirected';
  }

  @Post('add')
  @HttpCode(201)
  @Header('Cache-control', 'none')
  postNewMember(@Body() bodycontent: Record<string, object>) {
    console.log(bodycontent);
  }
}
