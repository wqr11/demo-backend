import { Item } from '@/items/items.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Item) private readonly itemRepository: Repository<Item>,
  ) {}

  async createItems() {
    const totalItems = 50_000;
    const chunkSize = 1000;

    console.log(
      `Starting to create ${totalItems} items in chunks of ${chunkSize}...`,
    );

    for (let i = 0; i < totalItems; i += chunkSize) {
      const chunk = Array.from({
        length: Math.min(chunkSize, totalItems - i),
      }).map((_, index) => ({
        name: `Item-${i + index}`,
      }));

      await this.itemRepository.save(chunk);
      console.log(
        `Inserted chunk ${i / chunkSize + 1}/${Math.ceil(totalItems / chunkSize)}`,
      );
    }

    console.log('Successfully created all items!');
  }
}
