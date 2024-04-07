import { Request, Response } from 'express'
import { Folder } from '../../models/Folder'


export const removeFolder = async (req: Request, res: Response) => {
    try {
        await Folder.findByIdAndDelete(req.body._id)
        res.status(200).send("Successfully deleted")
    } catch (error) {
        res.status(400).send(error)
        
    }
}