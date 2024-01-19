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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let ProductService = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(dto) {
        try {
            const product = await this.prismaService.products.findFirst({
                where: {
                    title: dto.title,
                },
            });
            if (product) {
                throw new common_1.HttpException('TITLE_ALREADY_USED', common_1.HttpStatus.BAD_REQUEST);
            }
            return await this.prismaService.products.create({
                data: {
                    title: dto.title,
                    description: dto.description,
                    price: dto.price,
                },
            });
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await this.prismaService.products.findMany();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            const product = await this.prismaService.products.findFirst({
                where: {
                    id,
                },
            });
            if (!product) {
                throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
            }
            return product;
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, dto) {
        try {
            const product = await this.prismaService.products.findFirst({
                where: {
                    id,
                },
            });
            if (!product) {
                throw new common_1.HttpException('NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
            }
            return await this.prismaService.products.update({
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
            return await this.prismaService.products.delete({
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
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map