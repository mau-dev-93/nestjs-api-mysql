import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderModel } from './model/order.model';
import { ParseDatePipe } from 'src/pipes/parse-date/parse-date.pipe';

@Controller('api/v1/orders')
export class OrderController {
	constructor(private readonly orderService: OrderService) {}

	@Post()
	async createOrder(@Body() order: OrderModel) {
		return await this.orderService.createOrder(order);
	}

	@Get('/pending')
	async getPendingOrders() {
		return await this.orderService.getPendingOrders();
	}

	@Get('/confirmed')
	async getConfirmedOrders(@Query('start', ParseDatePipe) start: Date, @Query('end', ParseDatePipe) end: Date) {
		return await this.orderService.getConfirmedOrders(start, end);
	}

	@Get('/:id')
	async getOrderById(@Param('id') id: string) {
		return await this.orderService.getOrderById(id);
	}

	@Patch('/:id/confirm')
	async confirmOrder(@Param('id') id: string) {
		return await this.orderService.confirmOrder(id);
	}

	@Get('/client/:clientId')
	async getClientOrders(@Param('clientId') clientId: string) {
		return await this.orderService.getClientOrders(clientId);
	}
}
