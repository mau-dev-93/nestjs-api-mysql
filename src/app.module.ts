import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './modules/product/product.module';
import { DataSourceOptions } from 'typeorm';
import AppDataSource from '../datasource';

@Module({
	imports: [TypeOrmModule.forRoot(AppDataSource.options as DataSourceOptions), ProductModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
