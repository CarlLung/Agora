import { BaseController } from '../base-controller'
import { RegisterService } from '../Services/RegisterService'
import { HttpException } from '../base-controller'

export class RegisterController extends BaseController {
    constructor(public registerService: RegisterService) {
        super()
    }

    getUserProfile = this.handleRequest(async (req, res) => {
        return await this.registerService.getUserProfile()
    })

    createUser = this.handleRequest(async (req, res) => {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            throw new HttpException(400, 'Email and password are required')
        }

        return await this.registerService.createUser({ username, email, password })
    })
}
