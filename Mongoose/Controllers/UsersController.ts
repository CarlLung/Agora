import { BaseController } from '../base-controller'
import { UserService } from '../Services/UsersService'
import { HttpException } from '../base-controller'

export class UserController extends BaseController {
    constructor(public usersService: UserService) {
        super()
    }

    getUsers = this.handleRequest(async (req, res) => {
        return await this.usersService.getUsers()
    })

    createUser = this.handleRequest(async (req, res) => {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            throw new HttpException(400, 'Email and password are required')
        }

        return await this.usersService.createUser({ username, email, password })
    })
}
