import { Command, CommandRunner } from 'nest-commander';
import { SeedService } from './seed.service';

@Command({
  name: 'seed',
  description: 'Seeds the database with 50_000 items',
  options: { isDefault: false },
})
export class SeedCommand extends CommandRunner {
  constructor(private readonly seedService: SeedService) {
    super();
  }

  async run(
    passedParams: string[],
    options?: Record<string, any> | undefined,
  ): Promise<void> {
    console.log('Starting SEED command ...');
    await this.seedService.createItems();
    console.log('SEED command completed!');
    process.exit(0);
  }
}
