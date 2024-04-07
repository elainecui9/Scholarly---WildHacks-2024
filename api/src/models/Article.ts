import mongoose, { Schema } from 'mongoose'

export interface ArticlePreview {
    _id: mongoose.Types.ObjectId,
    title: string,
    date: Date,
}

export interface Article extends ArticlePreview {
    content: string,
    url: string,
    authors: string[],
}

const articleSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    url: {type: String, required: true},
    authors: {type: Array, required: true},
    date: {type: Date, required: true},
})

export const Article = mongoose.model<Article>('Article', articleSchema)
