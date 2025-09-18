import { Type } from 'class-transformer';
import {
	ArrayNotEmpty,
	IsArray,
	IsDate,
	IsNotEmpty,
	IsOptional,
	IsUUID,
} from 'class-validator';
import { ClientModel } from 'src/modules/client/model/client.model';
import { ProductModel } from 'src/modules/product/model/product.model';

export class OrderModel {
	@IsOptional()
	@IsUUID()
	id?: string;

	@IsOptional()
	@IsDate()
	@Type(() => Date)
	createdAt?: Date;

	@IsOptional()
	@IsDate()
	@Type(() => Date)
	updatedAt?: Date;

	@IsOptional()
	@IsDate()
	@Type(() => Date)
	confirmAt?: Date;

	@IsNotEmpty()
	@Type(() => ClientModel)
	client!: ClientModel;

	@IsNotEmpty()
	@IsArray()
	@ArrayNotEmpty()
	@Type(() => ProductModel)
	products!: ProductModel[];
}
