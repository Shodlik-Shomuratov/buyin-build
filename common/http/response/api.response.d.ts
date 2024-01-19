export declare class CoreApiResponse<T> {
    readonly success: boolean;
    readonly timestamp: number | string;
    readonly data: T | null;
    readonly error: any;
    private constructor();
    static success<T>(data: T): CoreApiResponse<T>;
    static error<T>(error?: Error): CoreApiResponse<T>;
}
