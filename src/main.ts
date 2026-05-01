import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ResponseTransformInterceptor } from './common/interceptors/response-transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set global prefix with exclusions for root and docs
  app.setGlobalPrefix('api/v1', {
    exclude: ['/', 'api/docs', 'api/docs/(.*)'],
  });

  // Use global pipes for validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Use global interceptors
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new ResponseTransformInterceptor(reflector));

  // Swagger Documentation
  const config = new DocumentBuilder()
    .setTitle('Card Validator API')
    .setDescription('API for validating card numbers using Luhn algorithm')
    .setVersion('1.0')
    .addTag('validation')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
