import { Router } from "express";
import { UsersController } from "./controllers/usersController";

const routes = Router();

const usersController = new UsersController()

routes.get('/users', usersController.list);
routes.post('/users', usersController.create);

export { routes };