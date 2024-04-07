import mongoose, { Schema } from 'mongoose'
import { ArticlePreview } from './Article'

export interface FolderPreview {
    _id: mongoose.Types.ObjectId,
    name: string,
    color: string,
    date: Date
}

export interface FolderInterface extends FolderPreview {
    articles: ArticlePreview[]
}

export interface Folder extends FolderPreview {
    owner: mongoose.Types.ObjectId,
    articles: mongoose.Types.ObjectId[],
}

const folderSchema = new Schema({
    owner: {type: String, required: true},
    name: {type: String, required: true},
    color: {type: String, required: true},
    articles: { type: Array, required: true },
    date: {type: Date, required: true}
})

export const Folder = mongoose.model<Folder>('Folder', folderSchema)