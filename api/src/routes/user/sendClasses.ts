import { Request, Response } from 'express'
import { User, UserDashboard } from '../../models/User'
import { Article, ArticlePreview } from '../../models/Article'
import { Folder, FolderInterface } from '../../models/Folder'
import { Class, ClassInterface, ClassPreview } from '../../models/Class'

export const sendClasses = async (req: Request, res: Response) => { 
    try {
        const payload = req.body.payload
        const user = await User.findById(payload._id)
        const classesData = await Class.find({
            '_id': {
                $in: user!.classes
            }
        })
        const classes: ClassPreview[] = classesData.map((el) => {
            return {
                _id: el._id,
                owner: el.owner,
                name: el.name,
                date: el.date
            }
        })
        res.status(200).json(classes)
    } catch (error) {
        res.status(400).send(error)
    }
}