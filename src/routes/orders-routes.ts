import { OrdersController } from '../controllers/orders-controller';
import { Router } from 'express';

const ordersRoutes = Router();
const ordersController = new OrdersController();

ordersRoutes.post('/', ordersController.create);

export { ordersRoutes };