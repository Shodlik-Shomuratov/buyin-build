"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = void 0;
function isObject(obj) {
    return (obj !== null &&
        typeof obj === 'object' &&
        !Array.isArray(obj) &&
        Object.getPrototypeOf(obj).isPrototypeOf(Object));
}
exports.isObject = isObject;
//# sourceMappingURL=is-object-filter.js.map