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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const data_1 = require("../../data");
const user_model_1 = require("../models/user.model");
let UserService = class UserService {
    constructor() {
        this.users = [];
        this.getData();
    }
    create(user) {
        this.users.push(user);
    }
    getData() {
        data_1.default.map((userInfo) => this.create(this.formatApiData(userInfo)));
    }
    formatApiData(dataElement) {
        if (!dataElement.id ||
            !dataElement.nom ||
            !dataElement.prenom ||
            !dataElement.email) {
            return;
        }
        const o = new user_model_1.User();
        o.id = parseInt(dataElement.id);
        o.nom = dataElement.nom;
        o.prenom = dataElement.prenom;
        o.email = dataElement.email;
        return o;
    }
    findAll() {
        return this.users;
    }
    find(id) {
        return this.users.find((el) => el.id === id);
    }
    update(id, newUSer) {
        try {
            const itemIndex = this.users.findIndex((el) => el.id === id);
            this.users[itemIndex] = newUSer;
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
    delete(id) {
        try {
            const itemIndex = this.users.findIndex((el) => el.id === id);
            delete this.users[itemIndex];
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UserService);
//# sourceMappingURL=user.service.js.map