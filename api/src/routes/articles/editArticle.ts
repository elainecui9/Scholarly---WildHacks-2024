import { Request, Response } from 'express'
import { Article } from '../../models/Article'


export const editArticle = async (req: Request, res: Response) => {
    try {
        await Article.findByIdAndUpdate(req.body.article, { $set: { name: req.body.name } })
        res.status(200).send("Successfully updated name")
    } catch (error) {
        res.status(400).send(error)
        
    }
}