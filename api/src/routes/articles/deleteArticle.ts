import { Request, Response } from 'express'
import { Article } from '../../models/Article'


export const deleteArticle = async (req: Request, res: Response) => {
    try {
        await Article.findByIdAndDelete(req.body._id)
        res.status(200).send("Successfully deleted")
    } catch (error) {
        res.status(400).send(error)
        
    }
}