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
import { requiresAuth } from './routes/auth/requiresAuth'
import { validateToken } from './routes/auth/validateToken'
import { sendDashboard } from './routes/user/sendDashboard'


//* ROUTES

//* GET
router.get('/validateToken', requiresAuth, validateToken)
router.get('/user/dashboard', requiresAuth, sendDashboard)

//* POST

//auth
router.post('/logout', logout)
router.post('/login', login)
router.post('/register', register)

//articles
router.post('/article/save', requiresAuth, saveArticle)
router.post('/article/edit', requiresAuth, editArticle)

//folders
router.post('/folder/create', requiresAuth, createFolder)
router.post('/folder/edit', requiresAuth, editFolder)

//classes
router.post('/classes/create', requiresAuth, createClass)
router.post('/classes/edit', requiresAuth, editClass)

//* PATCH
router.patch('/article/move/folder', requiresAuth, moveArticleToFolder)
router.patch('/article/move/class', requiresAuth, moveArticleToClass)
router.patch('/folder/move/class', requiresAuth, moveFolderToClass)

//* DELETE
router.delete('/article/remove', requiresAuth, removeArticle)
router.delete('/folder/remove', requiresAuth, removeFolder)
router.delete('/class/remove', requiresAuth, removeClass)

export {router}