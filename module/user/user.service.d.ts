import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { PrismaService } from 'src/prisma.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private readonly prismaService;
    private readonly jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    register(dto: RegisterUserDto): Promise<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    login(dto: LoginUserDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    findAll(): Promise<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, dto: UpdateUserDto): Promise<{
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
