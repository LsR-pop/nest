import { Controller, Get, Param, Req } from '@nestjs/common';
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

    @Get('/:id')
    returnOneById(@Param() param: {id: string}) {
        console.log(param.id)
        console.log(this.userService.find(parseInt(param.id)))
        return JSON.stringify(this.userService.find(parseInt(param.id)))
    }

    @Get('log-request')
    returnRequestObject(@Req() request:Request): void {
        console.log(request)
    }
}
