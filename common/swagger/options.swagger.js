"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.options = new swagger_1.DocumentBuilder()
    .setTitle('Buyin API')
    .setDescription('Ecommerce API for Buyin Ecomerce \n Username and Password for admin \n username: admin \n password: admin')
    .setVersion('1.0.0')
    .addBearerAuth({
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
    description: 'Fill input below with Access Token',
    in: 'header',
}, 'JWT')
    .build();
//# sourceMappingURL=options.swagger.js.map