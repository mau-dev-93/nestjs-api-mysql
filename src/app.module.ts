import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product/product.module';
import { DataSourceOptions } from 'typeorm';
import AppDataSource from '../datasource';
import { ClientModule } from './modules/client/client.module';

@Module({
	imports: [
		TypeOrmModule.forRoot(AppDataSource.options as DataSourceOptions),
		ProductModule,
		ClientModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
