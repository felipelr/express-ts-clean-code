import { Router, Request, Response } from "express";
import { createUserUseCase } from "../../../../application/useCases/CreateUserUseCase";
import { CreateUserController } from "../controllers/users/CreateUserController";

const userRoutes = Router();
const createUserController = new CreateUserController(createUserUseCase);

userRoutes.post("/", (request: Request, response: Response) => {
  return createUserController.handle(request, response);
});

export default userRoutes;
