import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class UserService {
    constructor() {}

    async getUsers() {
        // await prisma.$connect()

        const allUsers = await prisma.user.findMany({
            include: {
                posts: true,
            },
        })

        if (allUsers) {
            await prisma.user.create({
                data: {
                    name: 'Rich',
                    email: 'hello@prisma.com',
                    posts: {
                        create: {
                            title: 'My first post',
                            body: 'Lots of really interesting stuff',
                            slug: 'my-first-post',
                        },
                    },
                },
            })
        }

        if (!allUsers) {
            await prisma.$disconnect()
            throw new Error('No users found')
        }

        // await prisma.$disconnect()
        return allUsers
    }
}
