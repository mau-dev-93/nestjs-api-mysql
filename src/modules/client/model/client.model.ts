import { Address } from '../entity/address.entity';
import { Type } from 'class-transformer';
import {
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsPositive,
	IsString,
} from 'class-validator';

export class ClientModel {
	@IsOptional()
	@IsPositive()
	@IsNumber()
	id: number;

	@IsNotEmpty()
	@IsString()
	name: string;

	@IsNotEmpty()
	@IsString()
	email: string;

	@Type(() => Address)
	@IsNotEmpty()
	address: Address;
}
