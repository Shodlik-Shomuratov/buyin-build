import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PrismaService } from 'src/prisma.service';
export declare class BrandService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: CreateBrandDto): Promise<void>;
    findAll(): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateBrandDto): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
