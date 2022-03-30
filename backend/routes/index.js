import userRouter from "./userRouter.js";
import siteRouter from "./siteRouter.js";
import productRouter from "./productRouter.js";

function route(app) {
    app.use('/api/products', productRouter);
    app.use('/api/users', userRouter);
    app.use('/', siteRouter);
    app.use((err, req, res, next) => {
        res.status(500).send({message:err.message});
    });
}

export default route;