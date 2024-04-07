import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser'
import './mongoose'
import {router} from './router'

const app = express()
const port = process.env.PORT

// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser())

app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:8000', 'http://localhost:4000'],
  credentials: true
}))

//raw requests are now usable properties on req.body
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.use('/', router)
app.listen(port, ()=> {
    console.log(`server is up on port ${port}`)
})
