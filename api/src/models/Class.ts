import mongoose, { Schema } from 'mongoose'

export interface Class {
    _id: mongoose.Types.ObjectId,
    owner: mongoose.Types.ObjectId,
    mutable: boolean,
    code: string,
    name: string,
    members: mongoose.Types.ObjectId[],
    articles: mongoose.Types.ObjectId[],
    folders: mongoose.Types.ObjectId[],
}

const classSchema = new Schema({
    owner: {type: String, required: true},
    mutable: {type: Boolean, required: true},
    code: {type: String, required: true},
    name: {type: String, required: true},
    members: {type: Array, required: true},
    articles: {type: Array, required: true},
    folders: {type: Array, required: true},
})

export const Class = mongoose.model<Class>('Class', classSchema)