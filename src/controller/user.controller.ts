import { Request , Response } from "express";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import log from "../utils/logger";

export async function createUserHandler(req : Request<{},{},CreateUserInput>, res : Response) {
    const body = req.body
    try {
        const user = await createUser(req.body)
        return res.send("User created Successfuly")
    } catch (error) {
        if(error === 11000){
            return res.status(409).send('Account already exists')
        }
        return res.status(500).send(error)
    }
}