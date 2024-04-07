import { Request, Response } from 'express'
import { Article } from '../../models/Article'
import { Folder } from '../../models/Folder'


export const moveArticleToFolder = async (req: Request, res: Response) => {
    try {
        await Folder.findByIdAndUpdate(req.body.folder, { $push: { articles: req.body.article } })
        res.status(200).send("Successfully moved article")
    } catch (error) {
        res.status(400).send(error)
        
    }
}