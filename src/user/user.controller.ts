import { Body,Redirect, HttpCode, Post, Controller, Get, Header, Param, Req } from '@nestjs/common';
import { UserService } from './services/user.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Get('all')
    returnAllUsers(): string {
        console.log(this.userService.findAll())
        return JSON.stringify(this.userService.findAll())
    }

    @Get('findone/:id')
    returnOneById(@Param() param: {id: string}) {
        console.log(param.id)
        console.log(this.userService.find(parseInt(param.id)))
        return JSON.stringify(this.userService.find(parseInt(param.id)))
    }

    @Get('log-request')
    returnRequestObject(@Req() request:Request): void {
        console.log(request)
    }

    @Get('redirect-301')
    @Redirect('redirected', 301)
    redirectUser(): void {
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
        console.log(bodycontent)
    }
}
