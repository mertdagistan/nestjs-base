import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './infrastructure/middlewares/exception.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        const result = errors.map((error) => ({
          property: error.property,
          message: error.constraints[Object.keys(error.constraints)[0]],
          success: false,
        }));
        return new BadRequestException(result);
      },
      stopAtFirstError: true,
    }),
  );
  const v1Config = new DocumentBuilder().addBearerAuth().setTitle('TITLE').setDescription('DESC').setVersion('').build();
  const v1Document = SwaggerModule.createDocument(app, v1Config);
  SwaggerModule.setup('docs/v1', app, v1Document);

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
