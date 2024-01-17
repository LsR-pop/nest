"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("../../data");
const post_model_1 = require("../models/post.model");
let PostService = class PostService {
    constructor() {
        this.posts = [];
        this.getData();
    }
    create(post) {
        this.posts.push(post);
    }
    getData() {
        data_1.default.map((postInfo) => this.create(this.formatApiData(postInfo)));
    }
    formatApiData(dataElement) {
        if (!dataElement.id || !dataElement.titre || !dataElement.contenu) {
            return;
        }
        const o = new post_model_1.Post();
        o.id = parseInt(dataElement.id);
        o.titre = dataElement.titre;
        o.contenu = dataElement.contenu;
        return o;
    }
    findAll() {
        return this.posts;
    }
    find(id) {
        return this.posts.find((el) => el.id === id);
    }
    update(id, newPost) {
        try {
            const itemIndex = this.posts.findIndex((el) => el.id === id);
            this.posts[itemIndex] = newPost;
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    delete(id) {
        try {
            const itemIndex = this.posts.findIndex((el) => el.id === id);
            delete this.posts[itemIndex];
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
exports.PostService = PostService;
exports.PostService = PostService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PostService);
//# sourceMappingURL=post.service.js.map