import { User as IUser, localLogin } from '../interface/user'
import { User } from '../models/userSchema'
import { hashPassword } from '../lib/hash'
import { HttpException } from '../base-controller'
// import jwtSimple from 'jwt-simple'
import jwt from '../lib/jwt'
// import { checkPassword } from '../lib/hash'
// import { JWTPayload } from '../interface/models'

export class RegisterService {
    constructor() {}

    async getUserProfile() {
        return await User.find()
    }

    async createUser({ username, email, password }: IUser) {
        const hashedPassword = await hashPassword(password)

        const result = await new User({
            username,
            email,
            password: hashedPassword,
        }).save()
        if (!result) {
            throw new Error('Error creating user')
        }
        return 'user created'
    }

    async localLogin({ usernameOrEmail, password }: localLogin) {
        if (!jwt.jwtSecret) {
            throw new HttpException(
                500,
                "Internal Service Error - missing 'JWT_Secret' in env."
            )
        }

        const loginWithUsername = await User.find({
            where: {
                OR: [
                    {
                        username: usernameOrEmail,
                    },
                    {
                        email: usernameOrEmail,
                    },
                ],
            },
            select: {
                id: true,
                username: true,
                email: true,
                hashedPassword: true,
            },
        })

        return loginWithUsername
    }
}
