import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';
export declare class ProductService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: CreateProductDto): Promise<{
        id: string;
        title: string;
        description: string;
        price: string;
        sizes: string[];
        isFavourite: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    } & {
        images: {
            url: string;
            color: string;
        }[];
        features: {
            name: string;
            value: string;
        }[];
    }>;
    findAll(): Promise<({
        id: string;
        title: string;
        description: string;
        price: string;
        sizes: string[];
        isFavourite: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    } & {
        images: {
            url: string;
            color: string;
        }[];
        features: {
            name: string;
            value: string;
        }[];
    })[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: string;
        sizes: string[];
        isFavourite: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    } & {
        images: {
            url: string;
            color: string;
        }[];
        features: {
            name: string;
            value: string;
        }[];
    }>;
    update(id: string, dto: UpdateProductDto): Promise<{
        id: string;
        title: string;
        description: string;
        price: string;
        sizes: string[];
        isFavourite: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    } & {
        images: {
            url: string;
            color: string;
        }[];
        features: {
            name: string;
            value: string;
        }[];
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: string;
        sizes: string[];
        isFavourite: boolean;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    } & {
        images: {
            url: string;
            color: string;
        }[];
        features: {
            name: string;
            value: string;
        }[];
    }>;
}
