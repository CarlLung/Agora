import express from 'express'

import { UserController } from './Controllers/UsersController'

export default function (args: { userController: UserController }) {
    let router = express.Router()

    router.get('/users', args.userController.getUsers)

    router.post('/users', args.userController.createUser)

    return router
}