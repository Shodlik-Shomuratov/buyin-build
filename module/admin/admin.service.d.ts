import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma.service';
import { RefreshAdminDto } from './dto/refresh-admin.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AdminService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    login(dto: LoginAdminDto): Promise<{
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
    }>;
    refresh(dto: RefreshAdminDto): Promise<void>;
    create(dto: CreateAdminDto): Promise<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        username: string;
        passwordHash: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateAdminDto): Promise<{
        id: string;
        username: string;
        passwordHash: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        username: string;
        passwordHash: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
