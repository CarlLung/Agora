import express from 'express'

import { PostController } from './Controllers/PostsController'
import { RegisterController } from './Controllers/RegisterController'
import { requireLogin } from './lib/guard'

export default function (args: {
    postController: PostController
    registerController: RegisterController
}) {
    let router = express.Router()

    router.get('/posts', args.postController.getPosts)

    router.post('/posts', requireLogin, args.postController.createPost)

    router.get(
        '/register',
        requireLogin,
        args.registerController.getUserProfile
    )

    router.post('/register', args.registerController.createUser)

    router.post('/login', args.registerController.localLogin)

    return router
}
