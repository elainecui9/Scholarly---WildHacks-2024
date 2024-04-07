import { Request, Response } from 'express'
import { Article } from '../../models/Article'
import { Class } from '../../models/Class'


export const moveFolderToClass = async (req: Request, res: Response) => {
    try {
        await Class.findByIdAndUpdate(req.body.class, { $push: { folders: req.body.folder } })
        res.status(200).send("Successfully moved folder")
    } catch (error) {
        res.status(400).send(error)
        
    }
}