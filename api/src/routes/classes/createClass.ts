import { Request, Response } from 'express'
import { Folder } from '../../models/Folder'
import { Class } from '../../models/Class'
import { User } from '../../models/User'

export const createClass = async (req: Request, res: Response) => {
    try {
        let code = Math.random().toString(36).substring(2, 8)
        let codeExists = await Class.exists({ code: code });
        if (codeExists) {
            code = Math.random().toString(36).substring(2, 8)
            while (codeExists) {
                codeExists = await Class.exists({ code: code });
            }
        }
    
        const newClass = new Class({
            owner: req.body.payload._id,
            mutable: req.body.mutable,
            code: code,
            name: req.body.name,
            color: req.body.color,
            articles: [],
            date: Date.now(),
        })
        await newClass.save()
        await User.findByIdAndUpdate(req.body.payload._id, {$push: {classes: newClass._id}})
        res.status(200).json(`Your access code is ${code}`)
    } catch (error) {
        res.status(400).send(error)
        
    }
}