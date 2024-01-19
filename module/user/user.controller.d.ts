import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { CoreApiResponse } from 'src/common/http/response/api.response';
import { RegisterUserDto } from './dto/register-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    login(dto: LoginUserDto): Promise<CoreApiResponse<{
        accessToken: string;
        refreshToken: string;
    }>>;
    register(dto: RegisterUserDto): Promise<CoreApiResponse<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    findAll(): Promise<CoreApiResponse<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>>;
    findOne(id: string): Promise<CoreApiResponse<{
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
    }>>;
    update(id: string, dto: UpdateUserDto): Promise<CoreApiResponse<{
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
