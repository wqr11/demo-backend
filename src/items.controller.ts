import { Controller, Get, Query } from '@nestjs/common';

@Controller()
export class ItemsController {
  @Get('/items')
  getItems(@Query() { limit, offset }: { limit: number; offset: number }) {
    return { limit: limit, offset: offset };
  }
}
