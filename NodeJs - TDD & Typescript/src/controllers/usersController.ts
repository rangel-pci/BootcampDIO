import { Request, Response } from "express";
import { database } from "../database";

export class UsersController {
    list (req: Request, res: Response): Response {
        return res.status(200).json(database);
    }

    create (req: Request, res: Response): Response {
        const { name } = req.body;

        if(!(name.length > 0)){
            return res.status(403).json({ message: 'Undefined username' })
        }

        database.push(name);
        return res.status(201).json({ message: `User ${name} created successfully.` });
    }
}