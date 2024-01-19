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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
const custom_error_1 = require("../../common/http/error/custom.error");
let BrandService = class BrandService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(dto) {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.prismaService.brand.findMany();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const brand = await this.prismaService.brand.findFirst({
                where: {
                    id,
                },
            });
            if (!brand) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            return brand;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, dto) {
        try {
            const brand = await this.prismaService.brand.findFirst({
                where: {
                    id,
                },
            });
            if (!brand) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            return await this.prismaService.brand.update({
                where: {
                    id,
                },
                data: {
                    ...dto,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            const brand = await this.prismaService.brand.findFirst({
                where: {
                    id,
                },
            });
            if (!brand) {
                throw new custom_error_1.CustomHttpError({
                    message: 'NOT_FOUND',
                    statusCode: common_1.HttpStatus.NOT_FOUND,
                });
            }
            return await this.prismaService.brand.delete({
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
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BrandService);
//# sourceMappingURL=brand.service.js.map