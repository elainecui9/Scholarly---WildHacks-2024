import { Request, Response } from 'express'
import { Article } from '../../models/Article'
import { Class } from '../../models/Class'


export const moveArticleToClass = async (req: Request, res: Response) => {
    try {
        await Class.findByIdAndUpdate(req.body.class, { $push: { articles: req.body.article } })
        res.status(200).send("Successfully moved article")
    } catch (error) {
        res.status(400).send(error)
        
    }
}