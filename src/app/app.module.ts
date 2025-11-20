import { Module } from '@nestjs/common';
import { AppController } from '@/app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '../config';
import { ItemsModule } from '@/items/items.module';
import { Item } from '@/items/items.entity';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DatabaseService } from '@/db/db.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      // Migrations are inside data-source.ts file
      entities: [Item],
      // Should be turned off for production!
      synchronize: false,
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [
    DatabaseService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
