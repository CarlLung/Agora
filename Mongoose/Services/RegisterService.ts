import { User as IUser } from '../interface/user'
import { User } from '../models/userSchema'

export class RegisterService {
    constructor() {}

    async getUserProfile() {
        return await User.find()
    }

    async createUser({ username, email, password }: IUser) {
        const result = await new User({ username, email, password }).save()
        if (!result) {
            throw new Error('Error creating user')
        }
        return 'user created'
    }
}
