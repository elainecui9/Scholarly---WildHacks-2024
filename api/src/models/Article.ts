import mongoose, { Schema } from 'mongoose'
import { Category } from './enums'

export interface Article {
    _id: mongoose.Types.ObjectId,
    title: string,
    content: string,
    url: string,
    authors: string[],
    date: Date,
    category: Category,
    // folder: mongoose.Types.ObjectId | null
}

const articleSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    url: {type: String, required: true},
    authors: {type: Array, required: true},
    date: {type: Date, required: true},
    category: {type: String, required: true},
})

export const Article = mongoose.model<Article>('Article', articleSchema)
