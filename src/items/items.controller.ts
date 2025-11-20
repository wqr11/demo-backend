import { Controller, DefaultValuePipe, Get, Query } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get('/items')
  async getItems(
    @Query('limit', new DefaultValuePipe(20))
    limit: number,
    @Query('offset', new DefaultValuePipe(0))
    offset: number,
  ) {
    const items = await this.itemsService.getItems({ limit, offset });

    return { items };
  }
}
