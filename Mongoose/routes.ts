import express from 'express'

import { UserController } from './Controllers/UsersController'
import { PostController } from './Controllers/PostsController'
import { RegisterController } from './Controllers/RegisterController'

export default function (args: { userController: UserController, postController: PostController, registerController: RegisterController }) {
    let router = express.Router()

    router.get('/users', args.userController.getUsers)

    router.post('/users', args.userController.createUser)

    router.get('/posts', args.postController.getPosts)

    router.post('/posts', args.postController.createPost)

    router.get('/register', args.registerController.getUserProfile)

    router.post('/register', args.registerController.createUser)

    return router
}
