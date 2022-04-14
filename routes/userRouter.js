import express from 'express';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { generateToken } from '../utils.js'
const userRouter = express.Router();

userRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res) => {
        await User.remove({});
        const createdUsers = await User.insertMany(data.users)
        res.send({createdUsers});
    })
)

userRouter.post(
    '/signin',
    expressAsyncHandler(async(req,res) => {
        const user = await User.findOne({email: req.body.email});
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)) {
                res.send({
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                })
            }
        }
        res.status(401).send({ message: 'Invaild email or password'});
    })
);

userRouter.post(
    '/register',
    expressAsyncHandler(async(req,res) => {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
        });
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            username: createdUser.username,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser),
        });
    })
);

userRouter.get(
    '/',
    expressAsyncHandler(async(req,res) => {
        const users = await userRepo.getApiUser();
        res.send(users);
    })
);


export default userRouter;