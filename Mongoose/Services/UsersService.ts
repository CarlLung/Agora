import { User as IUser } from '../interface/user'
import { User } from '../models/userSchema'

export class UserService {
    constructor() {}

    async getUsers() {
        return await User.find()
    }

    async createUser({ email, password }: IUser) {
        const result = await new User({ email, password }).save()
        if (!result) {
            throw new Error('Error creating user')
        }
        return 'user created'
    }
}
