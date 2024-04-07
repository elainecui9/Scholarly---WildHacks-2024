import mongoose, { Schema } from 'mongoose'
import { Folder, FolderInterface } from './Folder'
import { Article, ArticlePreview } from './Article'
import { Class, ClassPreview } from './Class'

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
    folders: FolderInterface[],
    articles: ArticlePreview[]
    classes: ClassPreview[]
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
    folders: { type: Array, default: [] },
    classes: { type: Array, default: [] },
    articles: {type: Array, default: []}
})

export const User = mongoose.model<UserSchema>('User', userSchema)