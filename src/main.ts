import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '1mb' }));
  app.enableCors();
  // app.disable('etag');
  // app.disable('x-powered-by');

  await app.listen(3000);
}
bootstrap();
