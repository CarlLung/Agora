import express from 'express'

import { PostController } from './Controllers/PostsController'
import { RegisterController } from './Controllers/RegisterController'

export default function (args: {
    postController: PostController
    registerController: RegisterController
}) {
    let router = express.Router()

    router.get('/posts', args.postController.getPosts)

    router.post('/posts', args.postController.createPost)

    router.get('/register', args.registerController.getUserProfile)

    router.post('/register', args.registerController.createUser)

    router.post('/login', args.registerController.localLogin)

    return router
}
