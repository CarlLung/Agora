import express from 'express'
import { Request, Response } from 'express'
import routes from './routes'

const app = express()

app.get('/', function (req: Request, res: Response) {
    res.end('Hello World')
})

import { UserService } from './Services/UsersService'
import { UserController } from './Controllers/UsersController'

const userService = new UserService()
const userController = new UserController(userService)

let router = routes({
    userController,
})

app.use(router)

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`)
})
