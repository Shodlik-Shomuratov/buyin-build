import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma.service';
export declare class CategoryService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: CreateCategoryDto): Promise<{
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        children: {
            id: string;
            name: string;
            description: string;
            imageUrl: string;
            iconUrl: string;
            parentId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        children: {
            id: string;
            name: string;
            description: string;
            imageUrl: string;
            iconUrl: string;
            parentId: string;
            createdAt: Date;
            updatedAt: Date;
        }[];
    } & {
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateCategoryDto): Promise<{
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
