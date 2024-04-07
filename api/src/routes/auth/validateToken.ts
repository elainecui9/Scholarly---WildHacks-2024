import { Request, Response, NextFunction } from 'express'
import { User, UserToken } from '../../models/User'

export const validateToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await User.findById(req.body.payload._id)
        const payload: UserToken = {
            _id: user!._id,
        }
        res.send(payload)
    } catch (error) {
        res.status(400).json(error)
    }
}