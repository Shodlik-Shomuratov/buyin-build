"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreApiResponse = void 0;
class CoreApiResponse {
    constructor(success, data, error) {
        this.success = success;
        this.data = data || null;
        this.timestamp = new Date().toLocaleString('ru-RU', {
            timeZone: 'Asia/Tashkent',
        });
        this.error = error;
    }
    static success(data) {
        return new CoreApiResponse(true, data, null);
    }
    static error(error) {
        return new CoreApiResponse(false, null, error?.message);
    }
}
exports.CoreApiResponse = CoreApiResponse;
//# sourceMappingURL=api.response.js.map