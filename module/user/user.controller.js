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
const user_service_1 = require("./user.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const login_user_dto_1 = require("./dto/login-user.dto");
const api_response_1 = require("../../common/http/response/api.response");
const register_user_dto_1 = require("./dto/register-user.dto");
const role_decorator_1 = require("../../common/decorator/role.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
const auth_guard_1 = require("../../common/guards/auth.guard");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async login(dto) {
        return api_response_1.CoreApiResponse.success(await this.userService.login(dto));
    }
    async register(dto) {
        return api_response_1.CoreApiResponse.success(await this.userService.register(dto));
    }
    async findAll() {
        return api_response_1.CoreApiResponse.success(await this.userService.findAll());
    }
    async findOne(id) {
        return api_response_1.CoreApiResponse.success(await this.userService.findOne(id));
    }
    async update(id, dto) {
        return api_response_1.CoreApiResponse.success(await this.userService.update(id, dto));
    }
    async remove(id) {
        return api_response_1.CoreApiResponse.success(await this.userService.remove(id));
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({
        summary: 'User login',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_user_dto_1.LoginUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    (0, swagger_1.ApiOperation)({
        summary: 'User login',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_user_dto_1.RegisterUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Find all user',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Find one user',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update user',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete user',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN, role_enum_1.Role.USER),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('USER'),
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map