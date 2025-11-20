import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '@/items/items.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}

  async getItems({ limit, offset }: { limit: number; offset: number }) {
    const items = await this.itemRepository.find({
      order: {
        created_at: 'DESC',
      },
      take: limit,
      skip: offset,
    });

    return items;
  }
}
