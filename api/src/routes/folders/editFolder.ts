import { Request, Response } from 'express'
import { Article } from '../../models/Article'
import { Folder } from '../../models/Folder'


export const editFolder = async (req: Request, res: Response) => {
    try {
        if (req.body.color && req.body.name) {
            await Folder.findByIdAndUpdate(req.body.folder, { $set: { name: req.body.name, color: req.body.color} })
        } else if (req.body.color) {
            await Folder.findByIdAndUpdate(req.body.folder, { $set: {color: req.body.color} })
        } else if (req.body.name) {
            await Folder.findByIdAndUpdate(req.body.folder, { $set: {name: req.body.name} })
        }
        res.status(200).send("Successfully updated name")
    } catch (error) {
        res.status(400).send(error)
        
    }
}