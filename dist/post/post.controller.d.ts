import { PostService } from './services/post.service';
import { Request } from 'express';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    returnAllPosts(): string;
    returnOneById(param: {
        id: string;
    }): string;
    returnRequestObject(request: Request): void;
    redirectPost(): void;
    redirected(): string;
    postNewMember(bodycontent: Record<string, object>): void;
}
