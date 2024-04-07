import express from 'express'
const router = express.Router()

//* IMPORTS
import { logout } from './routes/auth/logout'
import { login } from './routes/auth/login'
import { register } from './routes/auth/register'
import { saveArticle } from './routes/articles/saveArticle'


//* ROUTES

// GET
router.get('')

// POST

//auth
router.post('/logout', logout)
router.post('/login', login)
router.post('/register', register)

//articles
router.post('/saveArticle', saveArticle)

export {router}