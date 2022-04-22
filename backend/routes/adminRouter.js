import express from "express";
import expressAsyncHandler from "express-async-handler";
import { isAuth } from "../utils.js";
import userRepo from '../repositories/userRepo.js';

const adminRouter = express.Router();

adminRouter.post(
    '/create',
    expressAsyncHandler(async(req, res) => {
        const createdUser = await userRepo.register(req.body);
        res.send({
            _id: createdUser._id,
            username: createdUser.username,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            isSuperAdmin: createdUser.isSuperAdmin,
            token: generateToken(createdUser),
        })
    })
)

export default adminRouter;