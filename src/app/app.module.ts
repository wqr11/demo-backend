import { Module } from '@nestjs/common';
import { AppController } from '@/app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '../config';
import { ItemsModule } from '@/items/items.module';
import { Item } from '@/items/items.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: POSTGRES_HOST,
      port: POSTGRES_PORT,
      username: POSTGRES_USER,
      password: POSTGRES_PASSWORD,
      database: POSTGRES_DB,
      entities: [Item],
      synchronize: true,
    }),
    ItemsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
