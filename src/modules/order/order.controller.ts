import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('api/v1/orders')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    // Define your endpoints here
}
