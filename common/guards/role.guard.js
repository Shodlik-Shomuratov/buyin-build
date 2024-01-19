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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const role_decorator_1 = require("../decorator/role.decorator");
const custom_error_1 = require("../http/error/custom.error");
const jwt_1 = require("@nestjs/jwt");
let RolesGuard = class RolesGuard {
    constructor(reflector, jwtService) {
        this.reflector = reflector;
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const requiredRoles = this.reflector.getAllAndOverride(role_decorator_1.ROLES_KEY, [context.getHandler(), context.getClass()]);
        const request = context.switchToHttp().getRequest();
        let token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new custom_error_1.CustomHttpError({
                message: 'JWT_NOT_PROVIDED',
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
            });
        }
        const validUser = this.jwtService.verify(token, {
            secret: process.env.JWT_ACCESS_SECRET,
        });
        if (!validUser) {
            throw new custom_error_1.CustomHttpError({
                message: 'LOGIN_FAILED',
                statusCode: common_1.HttpStatus.UNAUTHORIZED,
            });
        }
        request.user = validUser;
        return requiredRoles.includes(request.user.role);
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector, jwt_1.JwtService])
], RolesGuard);
//# sourceMappingURL=role.guard.js.map