import { Request, Response } from 'express'
import { User, UserDashboard, UserInterface } from '../../models/User'
import { Article, ArticlePreview } from '../../models/Article'
import { Folder, FolderInterface } from '../../models/Folder'
import { Class, ClassInterface, ClassPreview } from '../../models/Class'

export const sendClass = async (req: Request, res: Response) => { 
    try {
        const classData = await Class.findById(req.body.payload)
        const membersData = await User.find({
            "_id": {
                $in: classData!.members
            }
        })
        const articlesData = await Article.find({
            "_id": {
                $in: classData!.articles
            }
        })
        const foldersData = await Folder.find({
            "_id": {
                $in: classData!.folders
            }
        })
        const members: UserInterface[] = membersData.map((user) => {
            return {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            }
        })
        const articles: ArticlePreview[] = articlesData.map((article) => {
            return {
                    _id: article._id,
                    title: article.title,
                    date: article.date
                }
        })
        const folders: FolderInterface[] = await Promise.all(foldersData.map(async (folder) => {
            const articles = await Article.find({
            "_id": {
                $in: folder.articles
                }
            })
            const articlePreviews: ArticlePreview[] = articles.map((article) => {
                return {
                    _id: article._id,
                    title: article.title,
                    date: article.date
                }
            })
            return {
                _id: folder._id,
                name: folder.name,
                color: folder.color,
                date: folder.date,
                articles: articlePreviews
            }
        }))

        const classInterface: ClassInterface = {
            _id: classData!._id,
            owner: classData!.owner,
            name: classData!.name,
            date: classData!.date,
            mutable: classData!.mutable,
            code: classData!.code,
            members: members,
            articles: articles,
            folders: folders
        }

        res.status(200).json(classInterface)
    } catch (error) {
        res.status(400).send(error)
    }
}