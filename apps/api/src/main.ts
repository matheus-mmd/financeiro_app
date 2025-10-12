import './common/telemetry';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true
  });

  app.setGlobalPrefix('api');
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') ?? ['http://localhost:3000'],
    credentials: true
  });

  const config = new DocumentBuilder()
    .setTitle('Financeiro API')
    .setDescription('API multi-tenant para o SaaS financeiro')
    .setVersion('0.1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(`🚀 API rodando na porta ${port}`);
}

void bootstrap();
