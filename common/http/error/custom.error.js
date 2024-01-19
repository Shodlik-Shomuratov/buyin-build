"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomHttpError = void 0;
const common_1 = require("@nestjs/common");
function CustomHttpError(error) {
    throw new common_1.HttpException({
        message: error?.code || error?.message,
    }, error.statusCode || common_1.HttpStatus.BAD_REQUEST);
}
exports.CustomHttpError = CustomHttpError;
//# sourceMappingURL=custom.error.js.map