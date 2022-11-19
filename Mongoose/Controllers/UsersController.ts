import { BaseController } from '../base-controller'
import { UserService } from '../Services/UsersService'

export class UserController extends BaseController {
    constructor(public usersService: UserService) {
        super()
    }

    getUsers = this.handleRequest(async (req, res) => {
        return await this.usersService.getUsers()
    })

    createUser = this.handleRequest(async (req, res) => {
        return await this.usersService.createUser()
    })
}
