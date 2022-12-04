import express from 'express'

import { UserController } from './Controllers/UsersController'
import { PostController } from './Controllers/PostsController'

export default function (args: { userController: UserController, postController: PostController }) {
    let router = express.Router()

    router.get('/users', args.userController.getUsers)

    router.post('/users', args.userController.createUser)

    router.get('/posts', args.postController.getPosts)

    router.post('/posts', args.postController.createPost)

    return router
}
