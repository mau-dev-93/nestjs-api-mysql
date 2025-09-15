import { Injectable } from '@nestjs/common';
import { Order } from './entity/order.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientService } from '../client/client.service';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order) private ordersRepository: Repository<Order>,
        private clientService: ClientService,
        private productService: ProductService,
    ) { }
}
