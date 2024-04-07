import mongoose, { Schema } from 'mongoose'

export interface UserToken {
    _id: mongoose.Types.ObjectId,
}

export interface UserInterface extends UserToken{
    firstName: string,
    lastName: string,
    email: string,
    folders: mongoose.Types.ObjectId[],
    articles: mongoose.Types.ObjectId[],
    classes: mongoose.Types.ObjectId[]
}

export interface UserCredentials extends UserInterface {
    password: string
}

const userSchema = new Schema({
    firstName: {type: String, trim: true, required: true},
    lastName: {type: String, trim: true, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true},
    folders: {type: Array, default: []},
    articles: {type: Array, default: []}
})

export const User = mongoose.model<UserCredentials>('User', userSchema)