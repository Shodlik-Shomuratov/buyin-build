import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { PrismaService } from 'src/prisma.service';
export declare class BannerService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(dto: CreateBannerDto): Promise<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateBannerDto): Promise<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
