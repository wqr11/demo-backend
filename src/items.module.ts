import { Module } from '@nestjs/common';
import { ItemsRepository } from './items.repository';
import { ItemsController } from './items.controller';

@Module({
  providers: [ItemsRepository],
  controllers: [ItemsController],
})
export class ItemsModule {}
