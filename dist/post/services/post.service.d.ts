import { PostInterface } from '../interfaces/post.interface';
export declare class PostService {
    private readonly posts;
    constructor();
    create(post: PostInterface): void;
    getData(): void;
    formatApiData(dataElement: any): PostInterface;
    findAll(): PostInterface[];
    find(id: number): PostInterface;
    update(id: number, newPost: PostInterface): boolean;
    delete(id: number): boolean;
}
