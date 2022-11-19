export class UserService {
    constructor() {}

    async getUsers() {
        return ['user1', 'user2']
    }

    async createUser() {
        return 'create user'
    }
}
