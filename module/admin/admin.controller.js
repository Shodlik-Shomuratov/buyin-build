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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const create_admin_dto_1 = require("./dto/create-admin.dto");
const update_admin_dto_1 = require("./dto/update-admin.dto");
const api_response_1 = require("../../common/http/response/api.response");
const login_dto_1 = require("./dto/login.dto");
const swagger_1 = require("@nestjs/swagger");
const refresh_admin_dto_1 = require("./dto/refresh-admin.dto");
const auth_guard_1 = require("../../common/guards/auth.guard");
const role_decorator_1 = require("../../common/decorator/role.decorator");
const role_enum_1 = require("../../common/enums/role.enum");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async create(dto) {
        return api_response_1.CoreApiResponse.success(await this.adminService.create(dto));
    }
    async login(dto) {
        return api_response_1.CoreApiResponse.success(await this.adminService.login(dto));
    }
    async refresh(dto) {
        return api_response_1.CoreApiResponse.success(await this.adminService.refresh(dto));
    }
    async findAll() {
        return api_response_1.CoreApiResponse.success(await this.adminService.findAll());
    }
    async findOne(id) {
        return api_response_1.CoreApiResponse.success(await this.adminService.findOne(id));
    }
    async update(id, dto) {
        return api_response_1.CoreApiResponse.success(await this.adminService.update(id, dto));
    }
    async remove(id) {
        return api_response_1.CoreApiResponse.success(await this.adminService.remove(id));
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Create admin',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admin_dto_1.CreateAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, swagger_1.ApiOperation)({
        summary: 'Login admin',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/refresh'),
    (0, swagger_1.ApiOperation)({
        summary: 'Admin refresh token',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_admin_dto_1.RefreshAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "refresh", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all admin',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Find an admin',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update an admin',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admin_dto_1.UpdateAdminDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete an admin',
    }),
    (0, swagger_1.ApiBearerAuth)('JWT'),
    (0, role_decorator_1.Roles)(role_enum_1.Role.ADMIN),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "remove", null);
exports.AdminController = AdminController = __decorate([
    (0, swagger_1.ApiTags)('ADMIN'),
    (0, common_1.Controller)('/admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map