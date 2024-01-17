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
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./services/user.service");
const user_controller_1 = require("./user.controller");
const file_service_1 = require("../shared/services/file.service");
const string_service_1 = require("../shared/services/string.service");
let UserModule = class UserModule {
    constructor(fileservice, stringservice) {
        this.fileservice = fileservice;
        this.stringservice = stringservice;
    }
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [file_service_1.FileService, string_service_1.StringService],
        providers: [user_service_1.UserService, file_service_1.FileService, string_service_1.StringService],
        controllers: [user_controller_1.UserController],
    }),
    __metadata("design:paramtypes", [file_service_1.FileService,
        string_service_1.StringService])
], UserModule);
//# sourceMappingURL=user.module.js.map