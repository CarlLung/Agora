import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

const app = express()

app.use(cors())

dotenv.config()

app.use(express.json())

const mongoDB = process.env.DATABASE_URL || ''

mongoose.connect(mongoDB, {}, () => {
    console.log('Connected to database')
})

const db = mongoose.connection

import { PostService } from './Services/PostsService'
import { RegisterService } from './Services/RegisterService'

import { PostController } from './Controllers/PostsController'
import { RegisterController } from './Controllers/RegisterController'

const postService = new PostService()
const postController = new PostController(postService)

const registerService = new RegisterService()
const registerController = new RegisterController(registerService)

let router = routes({
    postController,
    registerController,
})

app.use(router)

app.get('/', (req, res) => {
    res.send({ messaeg: 'server connnected successfully' })
})

app.use((req, res) => {
    res.status(404).json({ error: 'Invalid request, typo on url or method?' })
})

const PORT = 8080

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`)
})
