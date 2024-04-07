import { Request, Response } from 'express'
import { Folder } from '../../models/Folder'
import { Class } from '../../models/Class'
import { User } from '../../models/User'

export const createFolder = async (req: Request, res: Response) => {
    try {
        const folder = new Folder({
            owner: req.body.payload._id,
            name: req.body.name,
            color: req.body.color,
            articles: [],
            date: Date.now(),
        })
        await folder.save()
        await User.findByIdAndUpdate(req.body.payload._id, {$push: {folders: folder._id}})
        if (req.body.class) {
            await Class.findByIdAndUpdate(req.body.class, {$push: {folders: folder._id}})
        }
        res.status(200).send("Folder successfully created")
    } catch (error) {
        res.status(400).send(error)
        
    }
}