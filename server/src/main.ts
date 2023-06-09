import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { config } from 'dotenv';
config();

// todo Привести к виду - https://docs.arealidea.com/services/development_web/notes/nestjs.html
const bootstrap = async () => {
    try {
        const app = await NestFactory.create(AppModule);

        const config = new DocumentBuilder()
            .setTitle('Currencies')
            .setDescription('GET current currencies API')
            .setVersion('1.0')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);

        app.enableCors({
            origin: `http://localhost:${process.env.PORT}`,
            credentials: true,
        });

        await app.listen(process.env.PORT);

        console.log(`Server working on port: ${process.env.PORT}`);
    } catch (err) {
        console.log('Не удалось запустить сервер ' + err);
    }
};
bootstrap();
