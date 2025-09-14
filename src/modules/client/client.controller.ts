import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClientService } from './client.service';
import { ClientModel } from './model/client.model';

@Controller('api/v1/clients')
export class ClientController {
	constructor(private readonly clientService: ClientService) {}

	@Post()
	async createClient(@Body() client: ClientModel) {
		return await this.clientService.createClient(client);
	}

	@Get()
	async getClients() {
		return await this.clientService.getClients();
	}

	@Get('/:id')
	async getClientById(@Param('id') id: number) {
		return await this.clientService.getClientById(id);
	}

	@Put('/:id')
	async updateClient(@Param('id') id: number, @Body() client: ClientModel) {
		client.id = id;
		return await this.clientService.updateClient(client);
	}

	@Delete('/:id')
	async deleteClient(@Param('id') id: number) {
		return await this.clientService.deleteClient(id);
	}
}
