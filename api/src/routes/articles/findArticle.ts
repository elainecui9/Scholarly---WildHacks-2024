import { Request, Response, NextFunction } from 'express'
import { Article } from '../../models/Article'

export const findArticle = async (req: Request, res: Response) => { 
    try {
        const param = req.params.article
        const article = await Article.findById(param)
        res.status(200).json(article)
    } catch (error) {
        res.status(400).send(error)
    }
}