import { DataSource } from 'typeorm';
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '@/config';
import { Item } from '@/items/items.entity';

// This currently does nothing!
// Because migrations are not configured yet
export const dataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [Item],
  migrations: [__dirname + '/migrations/**/*.ts'],
  // Should be FALSE for production!
  // ONLY FOR DEVELOPMENT !!!
  synchronize: false,
});
