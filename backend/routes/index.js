import userRouter from "./userRouter.js";
import siteRouter from "./siteRouter.js";
import productRouter from "./productRouter.js";
import orderRouter from "./orderRouter.js";
import adminRouter from "./adminRouter.js";

function route(app) {
    app.use('/api/products', productRouter);
    app.use('/api/users', userRouter);
    app.use('/api/orders', orderRouter);
    app.use('/api/admin/users', adminRouter);
    app.use('/api/config/paypal', (req, res) => {
        res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
    });
    app.use('/', siteRouter);
    app.use((err, req, res, next) => {
        res.status(500).send({message:err.message});
    });
}

export default route;