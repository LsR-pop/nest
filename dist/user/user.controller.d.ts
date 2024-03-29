import { UserService } from './services/user.service';
import { Request } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    returnAllUsers(): string;
    returnOneById(param: {
        id: string;
    }): string;
    returnRequestObject(request: Request): void;
    redirectUser(): void;
    redirected(): string;
    postNewMember(bodycontent: Record<string, object>): void;
}
