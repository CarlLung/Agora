import express from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

import { UserService } from './Services/UsersService'
import { UserController } from './Controllers/UsersController'

const userService = new UserService()
const userController = new UserController(userService)

let router = routes({
    userController,
})

app.use(router)

app.get('/', (req, res) => {
    res.send({ messaeg: 'server connnected successfully' })
})

app.use((req, res) => {
    res.status(404).json({ error: 'Invalid request, typo on url or method?' })
})

const PORT = 8080

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`)
})
