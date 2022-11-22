import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type User = {
    name: string
    email: string
}

export class UserService {
    constructor() {}

    async getUsers() {
        await prisma.$connect()

        const allUsers = await prisma.user.findMany({
            include: {
                posts: true,
            },
        })

        if (!allUsers) {
            await prisma.$disconnect()
            throw new Error('No users found')
        }

        await prisma.$disconnect()
        return allUsers
    }

    async createUser({ name, email }: User) {
        return await prisma.user.create({
            data: {
                name,
                email,
            },
        })
    }
}
