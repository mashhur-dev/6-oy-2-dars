import { Request, Response } from "express"
import { createGroup } from "../services/group.service"
import { Group } from '@prisma/client'

interface GroupDto {
    name: string,
    direction: string
}

export async function getGroups(req: Request, res: Response) {
    const body: GroupDto = req.body

    if (body.name.length == 0 || body.direction.length == 0) {
        return res.status(400).json({
            message: "Field must not be empty"
        })
    }

    const result: Group = await createGroup(body.name, body.direction)

    res.status(200).json({
        message: 'Group created',
        group: result
    })
}


export async function postGroups(req: Request, res: Response) {
    const body: GroupDto = req.body

    if (body.name.length == 0 || body.direction.length == 0) {
        return res.status(400).json({
            message: "Field must not be empty"
        })
    }

    const result: Group = await createGroup(body.name, body.direction)

    res.status(200).json({
        message: 'Group created',
        group: result
    })
}


export async function getGroupById(req: Request, res: Response) {

}