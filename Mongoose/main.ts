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

import { UserService } from './Services/UsersService'
import { PostService } from './Services/PostsService'
import { UserController } from './Controllers/UsersController'
import { PostController } from './Controllers/PostsController'

const userService = new UserService()
const userController = new UserController(userService)
const postService = new PostService()
const postController = new PostController(postService)

let router = routes({
    userController,
    postController
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
