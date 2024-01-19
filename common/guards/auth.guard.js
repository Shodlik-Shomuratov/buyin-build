"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const core_1 = require("@nestjs/core");
const role_guard_1 = require("./role.guard");
const jwt_1 = require("@nestjs/jwt");
exports.AuthGuard = new role_guard_1.RolesGuard(new core_1.Reflector(), new jwt_1.JwtService());
//# sourceMappingURL=auth.guard.js.map