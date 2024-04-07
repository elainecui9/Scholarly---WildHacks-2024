import { Request, Response } from 'express'
import { Article } from '../../models/Article'
import { Folder } from '../../models/Folder'
import { User } from '../../models/User'
import { Class } from '../../models/Class'

//save to dashboard
//save to class
// save to class->folder
// save to folder

export const saveArticle = async (req: Request, res: Response) => {
    try {
        const article = new Article({
            title: req.body.title,
            content: req.body.content,
            url: req.body.url,
            authors: req.body.authors,
            date: Date.now(),
        })
        await article.save()
        if (req.body.folder) {
            await Folder.findOneAndUpdate({_id: req.body.folder}, {$push: {articles: article._id}})
        } else {
            await User.findOneAndUpdate({_id: req.body.payload._id}, {$push: {articles: article._id}})
        }
        res.status(200).send("Successfully saved article")
    } catch (error) {
        res.status(400).send(error)
        
    }
}