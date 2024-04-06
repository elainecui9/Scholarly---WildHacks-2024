import mongoose, { Schema } from 'mongoose'

export interface Folder {
    _id: mongoose.Types.ObjectId,
    owner: mongoose.Types.ObjectId,
    name: string,
    color: string,
    articles: mongoose.Types.ObjectId[],
    date: Date
}

const folderSchema = new Schema({
    owner: {type: String, required: true},
    name: {type: String, required: true},
    color: {type: String, required: true},
    articles: { type: Array, required: true },
    date: {type: Date, required: true}
})

export const Folder = mongoose.model<Folder>('Folder', folderSchema)