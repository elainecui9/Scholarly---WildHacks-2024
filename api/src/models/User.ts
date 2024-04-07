import mongoose, { Schema } from 'mongoose'
import { Folder } from './Folder'
import { Article } from './Article'
import { Class } from './Class'

export interface UserToken {
    _id: mongoose.Types.ObjectId,
}

//* not sent
export interface UserInterface extends UserToken{
    firstName: string,
    lastName: string,
    email: string,
}

//* to be retrieved on dashboard
export interface UserDashboard extends UserInterface {
    folders: Folder[],
    articles: Article[]
}

//* to be retrieved on classroom
export interface UserClassroom extends UserInterface {
    classes: Class[]
}

//* only for registration purposes
export interface UserSchema extends UserInterface {
    folders: mongoose.Types.ObjectId[],
    articles: mongoose.Types.ObjectId[],
    classes: mongoose.Types.ObjectId[],
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

export const User = mongoose.model<UserSchema>('User', userSchema)