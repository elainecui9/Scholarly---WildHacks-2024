import { Request, Response } from 'express'
import { Article } from '../../models/Article'
import { Folder } from '../../models/Folder'
import { User } from '../../models/User'
import { Class } from '../../models/Class'


export const moveArticleToFolder = async (req: Request, res: Response) => {
    try {
        await Folder.findByIdAndUpdate(req.body.folder, { $push: { articles: req.body.article } })
        if (req.body.user) {
            await User.findByIdAndUpdate(req.body.user, {$pull: {articles: req.body.article}})
        } else if (req.body.class) {
            await Class.findByIdAndUpdate(req.body.class, {$pull: {articles: req.body.article}})
        }
        res.status(200).send("Successfully moved article")
    } catch (error) {
        res.status(400).send(error)
        
    }
}