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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const custom_error_1 = require("../../common/http/error/custom.error");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const role_enum_1 = require("../../common/enums/role.enum");
const AdminSelect = {
    id: true,
    username: true,
    createdAt: true,
    updatedAt: true,
};
let AdminService = class AdminService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async login(dto) {
        try {
            const admin = await this.prismaService.admin.findFirst({
                where: {
                    username: dto.username,
                },
            });
            if (!admin) {
                throw new custom_error_1.CustomHttpError({
                    message: 'WRONG_USERNAME',
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                });
            }
            const isValidPassword = (0, bcrypt_1.compare)(dto.password, admin.passwordHash);
            if (!isValidPassword) {
                throw new custom_error_1.CustomHttpError({
                    message: 'WRONG_PASSWORD',
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                });
            }
            const [accessToken, refreshToken] = [
                this.jwtService.sign({
                    id: admin.id,
                    username: admin.username,
                    role: role_enum_1.Role.ADMIN,
                }, {
                    secret: process.env.JWT_ACCESS_SECRET,
                    expiresIn: '1h',
                }),
                this.jwtService.sign({
                    id: admin.id,
                    username: admin.username,
                    role: role_enum_1.Role.ADMIN,
                }, {
                    secret: process.env.JWT_REFRESH_SECRET,
                    expiresIn: '1d',
                }),
            ];
            await this.prismaService.admin.update({
                where: {
                    id: admin.id,
                },
                data: {
                    refreshToken,
                },
            });
            return {
                accessToken,
                refreshToken,
                admin,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async refresh(dto) {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    async create(dto) {
        try {
            const admin = await this.prismaService.admin.findFirst({
                where: {},
            });
            if (admin) {
                throw new custom_error_1.CustomHttpError({
                    message: 'Username already existed!',
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                });
            }
            const hashedPassword = await (0, bcrypt_1.hash)(dto.password, Number(process.env.HASH_SALT_OR_ROUND));
            return await this.prismaService.admin.create({
                data: {
                    username: dto.username,
                    passwordHash: hashedPassword,
                },
                select: AdminSelect,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.prismaService.admin.findMany({
                select: AdminSelect,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const admin = await this.prismaService.admin.findFirst({
                where: {
                    id,
                },
            });
            if (!admin) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            return admin;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, dto) {
        try {
            const admin = await this.prismaService.admin.findFirst({
                where: {
                    id,
                },
            });
            if (!admin) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            if (dto.username) {
                admin.username = dto.username;
            }
            if (dto.password) {
                admin.passwordHash = await (0, bcrypt_1.hash)(dto.password, process.env.HASH_SALT_OR_ROUND);
            }
            return await this.prismaService.admin.update({
                data: admin,
                where: {
                    id,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const admin = await this.prismaService.admin.findFirst({
                where: {
                    id,
                },
            });
            if (!admin) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            return await this.prismaService.admin.delete({
                where: {
                    id,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map