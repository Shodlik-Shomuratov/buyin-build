import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare const getStatusCode: (exception: unknown) => number;
export declare class HttpExceptionFilter implements ExceptionFilter {
    private readonly logger;
    catch(exception: HttpException | any, host: ArgumentsHost): void;
}
