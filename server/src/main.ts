import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { credential } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';


var serviceAccount = require("../firebase-admin-key.json");

async function bootstrap() {

  const admin = initializeApp({credential: credential.cert(serviceAccount)});

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(6969);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
