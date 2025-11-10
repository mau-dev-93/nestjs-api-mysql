import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.MYSQL_HOST,
	port: Number(process.env.MYSQL_PORT),
	username: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	synchronize: true,
	entities: ['dist/**/*.entity{.ts,.js}'],
	//migrations: ["dist/migrations/*.{js,ts}"],
});

export default AppDataSource;
