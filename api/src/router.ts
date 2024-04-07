import express from 'express'
const router = express.Router()

//* IMPORTS
import { logout } from './routes/auth/logout'
import { login } from './routes/auth/login'
import { register } from './routes/auth/register'
import { saveArticle } from './routes/articles/saveArticle'
import { removeArticle } from './routes/articles/removeArticle'
import { removeFolder } from './routes/folders/removeFolder'
import { removeClass } from './routes/classes/removeClass'
import { editArticle } from './routes/articles/editArticle'
import { moveArticleToFolder } from './routes/articles/moveArticleToFolder'
import { moveArticleToClass } from './routes/articles/moveArticleToClass'
import { moveFolderToClass } from './routes/folders/moveFolderToClass'
import { editFolder } from './routes/folders/editFolder'
import { createFolder } from './routes/folders/createFolder'
import { createClass } from './routes/classes/createClass'
import { editClass } from './routes/classes/editClass'


//* ROUTES

//* GET
router.get('')

//* POST

//auth
router.post('/logout', logout)
router.post('/login', login)
router.post('/register', register)

//articles
router.post('/article/save', saveArticle)
router.post('/article/edit', editArticle)

//folders
router.post('/folder/create', createFolder)
router.post('/folder/edit', editFolder)

//classes
router.post('/classes/create', createClass)
router.post('/classes/edit', editClass)

//* PATCH
router.patch('/article/move/folder', moveArticleToFolder)
router.patch('/article/move/class', moveArticleToClass)
router.patch('/folder/move/class', moveFolderToClass)

//* DELETE
router.delete('/article/remove', removeArticle)
router.delete('/folder/remove', removeFolder)
router.delete('/class/remove', removeClass)

export {router}