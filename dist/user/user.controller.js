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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./services/user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    returnAllUsers() {
        console.log(this.userService.findAll());
        return JSON.stringify(this.userService.findAll());
    }
    returnOneById(param) {
        console.log(param.id);
        console.log(this.userService.find(parseInt(param.id)));
        return JSON.stringify(this.userService.find(parseInt(param.id)));
    }
    returnRequestObject(request) {
        console.log(request);
    }
    redirectUser() {
        console.log('redirecting...');
    }
    redirected() {
        return 'redirected';
    }
    postNewMember(bodycontent) {
        console.log(bodycontent);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "returnAllUsers", null);
__decorate([
    (0, common_1.Get)('findone/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "returnOneById", null);
__decorate([
    (0, common_1.Get)('log-request'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "returnRequestObject", null);
__decorate([
    (0, common_1.Get)('redirect-301'),
    (0, common_1.Redirect)('redirected', 301),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "redirectUser", null);
__decorate([
    (0, common_1.Get)('redirected'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserController.prototype, "redirected", null);
__decorate([
    (0, common_1.Post)('add'),
    (0, common_1.HttpCode)(201),
    (0, common_1.Header)('Cache-control', 'none'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "postNewMember", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map