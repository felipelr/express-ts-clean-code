import { Request, Response } from "express";
import { CreateUserUseCase } from "../../../../../application/useCases/CreateUserUseCase/CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password,
      });

      return res.status(201).json(user);
    } catch (err) {
      return res.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
