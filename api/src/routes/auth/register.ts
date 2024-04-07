import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import Joi from 'joi'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
import { User, UserToken } from '../../models/User'

const joi = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required(),
})

export const register = async (req: Request, res: Response) => {
    try {
        await joi.validateAsync(req.body)
        let exists = await User.findOne({ email: req.body.email })
        if (exists) {
            return res.status(400).send("Email already registered: meant to sign in?")
        }
        const user = new User(req.body)
        user.password = await bcrypt.hash(req.body.password, 10)
        await user.save()
        const payload: UserToken = {
            _id: user!._id
        }
        const token = jwt.sign(payload, process.env.PRIVATEKEY as string)
        if(req.cookies['auth-token']) {res.clearCookie('auth-token')}
        res.cookie('auth-token', token, {
            //lasts 2 weeks
            expires: new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000 * 2),
            secure: true,
            sameSite: 'strict',
            httpOnly: true,
        }).status(200).json(`Welcome, ${user.firstName}!`)
    } catch (error) {
        res.status(400).json(error)
    }
}