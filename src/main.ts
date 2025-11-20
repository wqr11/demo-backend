import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { PORT } from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:5173'],
    methods: '*',
    credentials: false,
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(PORT);
}

bootstrap().catch((e) => {
  console.error('[CRITICAL] Failed to start the server!', e);
});
