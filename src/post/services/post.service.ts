import { Injectable } from '@nestjs/common';
import { PostInterface } from '../interfaces/post.interface';
import data from '../../data';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {
  private readonly posts: PostInterface[] = [];

  constructor() {
    this.getData();
  }

  // insere un nouvel objet User dans le tableau users
  create(post: PostInterface): void {
    this.posts.push(post);
  }

  // insere en boucle des objet User à partir des éléments du tableau
  // récupéré dans data.ts
  getData(): void {
    data.map((postInfo: any) => this.create(this.formatApiData(postInfo)));
  }

  // cree un objet de type UserInterface à partir des données
  // récupérées dans data.ts
  formatApiData(dataElement: any): PostInterface {
    if (
      !dataElement.id ||
      !dataElement.title ||
      !dataElement.content ||
      !dataElement.author ||
      !dataElement.date
    ) {
      return;
    }

    const o = new Post();
    o.id = parseInt(dataElement.id);
    o.title = dataElement.title;
    o.content = dataElement.content;
    o.author = dataElement.author;
    o.date = dataElement.Date;

    return o;
  }

  findAll(): PostInterface[] {
    return this.posts;
  }

  find(id: number): PostInterface {
    return this.posts.find((el) => el.id === id);
  }

  update(id: number, newPost: PostInterface): boolean {
    try {
      const itemIndex = this.posts.findIndex((el) => el.id === id);
      this.posts[itemIndex] = newPost;
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  delete(id: number): boolean {
    try {
      const itemIndex = this.posts.findIndex((el) => el.id === id);
      delete this.posts[itemIndex];
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
