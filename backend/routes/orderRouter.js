import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils.js";
import orderService from "../services/orderServices.js";
import orderRepo from "../repositories/orderRepo.js";

const orderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        if(orderService.checkEmptyOrder(req.body.orderItems.length) == true) {
            res.status(400).send({message: 'Cart is empty'});
            console.log(typeof(req.body.orderItems.length));
        } else {
            const createdOrder = await orderRepo.createOrder(req.body, req.user);
            res.status(201).send({
                message: 'New order created',
                order: createdOrder});
        }
    })
);

orderRouter.put(
    '/:id/pay',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const order = await orderRepo.findById(req.params.id);
        if(order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = { 
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_address: req.body.email_address,
            };
            const updateOrder = await order.save();
            res.send({ message: 'Order Paid', order: updateOrder });
        } else {
            res.status(404).send({ message: 'Order Not Found' });
        }
    })
)

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async(req, res) => {
        const order = await orderRepo.findById(req.params.id);
        if(order) {
            res.send(order);
        } else {
            res.status(404).send({message: 'Order Not Found'});
        }
    })
)


export default orderRouter;