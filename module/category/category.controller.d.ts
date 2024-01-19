import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CoreApiResponse } from 'src/common/http/response/api.response';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(dto: CreateCategoryDto): Promise<CoreApiResponse<{
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    findAll(): Promise<CoreApiResponse<({
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
    })[]>>;
    findOne(id: string): Promise<CoreApiResponse<{
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
    }>>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CoreApiResponse<Promise<{
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>>>;
    remove(id: string): Promise<CoreApiResponse<{
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        iconUrl: string;
        parentId: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
}
