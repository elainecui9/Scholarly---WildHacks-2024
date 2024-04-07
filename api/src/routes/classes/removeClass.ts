import { Request, Response } from 'express'
import { Class } from '../../models/Class'


export const removeClass = async (req: Request, res: Response) => {
    try {
        await Class.findByIdAndDelete(req.body._id)
        res.status(200).send("Successfully deleted")
    } catch (error) {
        res.status(400).send(error)
        
    }
}