import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService implements OnApplicationBootstrap {
  constructor(private dataSource: DataSource) {}

  async onApplicationBootstrap() {
    await this.runMigrations();
  }

  async runMigrations() {
    try {
      const pendingMigrations = await this.dataSource.showMigrations();

      if (pendingMigrations) {
        console.log('Running pending migrations...');
        const migrations = await this.dataSource.runMigrations();
        console.log(`Successfully ran ${migrations.length} migrations`);
      } else {
        console.log('No pending migrations');
      }
    } catch (error) {
      console.error('Migration failed:', error);
      process.exit(1);
    }
  }
}
