import { BannerService } from './banner.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';
import { CoreApiResponse } from 'src/common/http/response/api.response';
export declare class BannerController {
    private readonly bannerService;
    constructor(bannerService: BannerService);
    create(dto: CreateBannerDto): Promise<CoreApiResponse<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    findAll(): Promise<CoreApiResponse<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>>;
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
    update(id: string, dto: UpdateBannerDto): Promise<CoreApiResponse<{
        id: string;
        title: string;
        subtitle: string;
        url: string;
        description: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
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
