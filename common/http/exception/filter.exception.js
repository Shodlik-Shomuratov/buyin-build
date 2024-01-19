"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpExceptionFilter = exports.getStatusCode = void 0;
const common_1 = require("@nestjs/common");
const api_response_1 = require("../response/api.response");
const is_object_filter_1 = require("../../utils/is-object-filter");
const getStatusCode = (exception) => {
    return exception instanceof common_1.HttpException
        ? exception.getStatus()
        : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
};
exports.getStatusCode = getStatusCode;
let HttpExceptionFilter = class HttpExceptionFilter {
    constructor() {
        this.logger = new common_1.Logger('HttpExceptionFilter');
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        if ((0, is_object_filter_1.isObject)(exception.response)) {
            exception.response.path = request.path;
            exception.response.method = request.method;
        }
        const statusCode = (0, exports.getStatusCode)(exception);
        console.log(statusCode);
        if (statusCode >= 500) {
            this.logger.error(exception);
        }
        response.status(statusCode).json(api_response_1.CoreApiResponse.error({
            name: exception?.response?.status,
            message: exception?.response || exception,
        }));
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
//# sourceMappingURL=filter.exception.js.map