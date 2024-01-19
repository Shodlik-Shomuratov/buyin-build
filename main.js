"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const options_swagger_1 = require("./common/swagger/options.swagger");
const filter_exception_1 = require("./common/http/exception/filter.exception");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        bodyParser: true,
    });
    app.setGlobalPrefix('/api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
    }));
    app.useGlobalFilters(new filter_exception_1.HttpExceptionFilter());
    app.enableShutdownHooks();
    const document = swagger_1.SwaggerModule.createDocument(app, options_swagger_1.options);
    swagger_1.SwaggerModule.setup('/docs', app, document);
    const port = process.env.PORT || 3001;
    await app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map