import express from 'express'

import { PostController } from './Controllers/PostsController'
import { CommentController } from './Controllers/CommentsController'
import { RegisterController } from './Controllers/RegisterController'
import { requireLogin } from './lib/guard'

export default function (args: {
    postController: PostController
    registerController: RegisterController
    commentController: CommentController
}) {
    let router = express.Router()

    router.get('/posts', args.postController.getPosts)

    router.post('/posts', requireLogin, args.postController.createPost)

    router.get('/comments', args.commentController.getComments)

    router.post('/comments', requireLogin, args.commentController.createComment)

    router.get(
        '/register',
        requireLogin,
        args.registerController.getUserProfile
    )

    // user route
    router.post('/register', args.registerController.createUser)

    router.post('/login', args.registerController.localLogin)

    router.post('/login', requireLogin, args.registerController.localLogin)

    router.get('/check', requireLogin, args.registerController.userValidation)

    return router
}
