import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'Lagartija83',
    database: 'shop',
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}'],
    //migrations: ["dist/migrations/*.{js,ts}"],
});

export default AppDataSource;