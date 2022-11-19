import { User } from '../interface/user'

export class UserService {
    constructor() {}

    async getUsers() {
        return ['user1', 'user2']
    }

    async createUser({ email, password }: User) {
        return 'create user'
    }
}
