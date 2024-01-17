import { PostInterface } from '../interfaces/post.interface';
export declare class Post implements PostInterface {
    id: number;
    title: string;
    content: string;
    author: string;
    date: Date;
}
