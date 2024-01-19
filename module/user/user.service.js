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
const prisma_service_1 = require("../../prisma.service");
const bcrypt_1 = require("bcrypt");
const custom_error_1 = require("../../common/http/error/custom.error");
const jwt_1 = require("@nestjs/jwt");
const role_enum_1 = require("../../common/enums/role.enum");
let UserService = class UserService {
    constructor(prismaService, jwtService) {
        this.prismaService = prismaService;
        this.jwtService = jwtService;
    }
    async register(dto) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    username: dto.username,
                },
            });
            if (user) {
                throw new custom_error_1.CustomHttpError({
                    message: 'ALREADY_EXISTS',
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                });
            }
            const hashedPassword = await (0, bcrypt_1.hash)(dto.password, Number(process.env.HASH_SALT_OR_ROUND));
            return await this.prismaService.user.create({
                data: {
                    username: dto.username,
                    passwordHash: hashedPassword,
                },
                select: {
                    id: true,
                    username: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async login(dto) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    username: dto.username,
                },
            });
            if (!user) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            const isValidPassword = await (0, bcrypt_1.compare)(dto.password, user.passwordHash);
            if (!isValidPassword) {
                throw new custom_error_1.CustomHttpError({
                    message: 'WRONG_PASSWORD',
                    statusCode: common_1.HttpStatus.BAD_REQUEST,
                });
            }
            const [accessToken, refreshToken] = [
                this.jwtService.sign({
                    id: user.id,
                    role: role_enum_1.Role.USER,
                    username: user.username,
                }, {
                    expiresIn: '1h',
                    secret: process.env.JWT_ACCESS_SECRET,
                }),
                this.jwtService.sign({
                    id: user.id,
                    role: role_enum_1.Role.USER,
                    username: user.username,
                }, {
                    expiresIn: '1d',
                    secret: process.env.JWT_REFRESH_SECRET,
                }),
            ];
            await this.prismaService.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    refreshToken,
                },
            });
            return {
                accessToken,
                refreshToken,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.prismaService.user.findMany({
                select: {
                    id: true,
                    username: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id,
                },
                select: {
                    id: true,
                    username: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            if (!user) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            return user;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, dto) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id,
                },
            });
            if (!user) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            user.username = dto?.username ?? user.username;
            user.passwordHash = dto?.password
                ? await (0, bcrypt_1.hash)(dto.password, process.env.HASH_SALT_OR_ROUND)
                : user.passwordHash;
            return await this.prismaService.user.update({
                where: {
                    id,
                },
                data: user,
            });
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const user = await this.prismaService.user.findFirst({
                where: {
                    id,
                },
            });
            if (!user) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            return await this.prismaService.user.delete({
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
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map