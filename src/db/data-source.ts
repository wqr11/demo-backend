import { DataSource } from 'typeorm';
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER,
} from '@/config';
import { Item } from '@/items/items.entity';

export const dataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST,
  port: POSTGRES_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [Item],
  migrations: [__dirname + '/migrations/**/*.ts'],
  // Should be turned off for production!
  synchronize: false,
});
