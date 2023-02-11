import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export async function createGroup(name: string, direction: string){
    return client.group.create({
        data: {
            name,
            direction
        }
    })
}