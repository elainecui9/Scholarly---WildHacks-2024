import express from 'express'
const router = express.Router()

//* IMPORTS
import { logout } from './routes/auth/logout'
import { login } from './routes/auth/login'
import { register } from './routes/auth/register'


//* ROUTES

// POST
router.post('/logout', logout)
router.post('login', login)
router.post('/register', register)

export {router}