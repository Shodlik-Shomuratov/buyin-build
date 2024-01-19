import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { CoreApiResponse } from 'src/common/http/response/api.response';
import { LoginAdminDto } from './dto/login.dto';
import { RefreshAdminDto } from './dto/refresh-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(dto: CreateAdminDto): Promise<CoreApiResponse<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    login(dto: LoginAdminDto): Promise<CoreApiResponse<{
        accessToken: string;
        refreshToken: string;
        admin: {
            id: string;
            username: string;
            passwordHash: string;
            refreshToken: string;
            createdAt: Date;
            updatedAt: Date;
        };
    }>>;
    refresh(dto: RefreshAdminDto): Promise<CoreApiResponse<void>>;
    findAll(): Promise<CoreApiResponse<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>>;
    findOne(id: string): Promise<CoreApiResponse<{
        id: string;
        username: string;
        passwordHash: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    update(id: string, dto: UpdateAdminDto): Promise<CoreApiResponse<{
        id: string;
        username: string;
        passwordHash: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    remove(id: string): Promise<CoreApiResponse<{
        id: string;
        username: string;
        passwordHash: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
}
