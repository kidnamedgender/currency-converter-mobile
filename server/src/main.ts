import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
config();

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: `http://localhost:${process.env.PORT}`,
      credentials: true,
    });
    await app.listen(process.env.PORT);

    console.log(`Server working on port: ${process.env.PORT}`);
  } catch (err) {
    console.log('Не удалось запустить сервер ' + err);
  }
}
bootstrap();
