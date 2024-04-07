import mongoose, { Schema } from 'mongoose'
import { UserInterface } from './User'
import { ArticlePreview } from './Article'
import { FolderInterface } from './Folder'

export interface ClassPreview {
    _id: mongoose.Types.ObjectId,
    owner: mongoose.Types.ObjectId,
    name: string,
    date: Date,
}

export interface ClassAttributes extends ClassPreview {
    mutable: boolean,
    code: string,
}

export interface ClassInterface extends ClassAttributes {
    members: UserInterface[],
    articles: ArticlePreview[]
    folders: FolderInterface[]
}

export interface Class extends ClassAttributes {
    members: mongoose.Types.ObjectId[],
    articles: mongoose.Types.ObjectId[],
    folders: mongoose.Types.ObjectId[],
}

const classSchema = new Schema({
    owner: {type: String, required: true},
    mutable: {type: Boolean, required: true},
    code: {type: String, required: true},
    name: { type: String, required: true },
    date: {type: Date, required: true},
    members: {type: Array, required: true},
    articles: {type: Array, required: true},
    folders: {type: Array, required: true},
})

export const Class = mongoose.model<Class>('Class', classSchema)