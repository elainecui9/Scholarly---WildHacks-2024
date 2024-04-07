import { Request, Response } from 'express'
import { Class } from '../../models/Class'


export const editClass = async (req: Request, res: Response) => {
    try {
        if (!req.body.mutable && req.body.owner !== req.body.payload._id) {
            res.status(400).send("You cannot edit this folder. Please try again")
        }
         await Class.findByIdAndUpdate(req.body.article, { $set: { name: req.body.name } })
        res.status(200).send("Successfully updated class name")
    } catch (error) {
        res.status(400).send(error)
        
    }
}