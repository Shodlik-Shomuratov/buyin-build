import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CoreApiResponse } from 'src/common/http/response/api.response';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    create(createBrandDto: CreateBrandDto): Promise<void>;
    findAll(): Promise<CoreApiResponse<{
        id: string;
        name: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>>;
    findOne(id: string): Promise<{
        id: string;
        name: string;
        imageUrl: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<{
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
