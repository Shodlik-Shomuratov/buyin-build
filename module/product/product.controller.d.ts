import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CoreApiResponse } from 'src/common/http/response/api.response';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(dto: CreateProductDto): Promise<CoreApiResponse<{
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
    }>>;
    findAll(): Promise<CoreApiResponse<({
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
    })[]>>;
    findOne(id: string): Promise<CoreApiResponse<{
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
    }>>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<CoreApiResponse<{
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
    }>>;
    remove(id: string): Promise<CoreApiResponse<{
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
    }>>;
}
