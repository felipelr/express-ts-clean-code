import { getMockReq, getMockRes } from "@jest-mock/express";
import { CreateUserController } from "./CreateUserController";
import { createUserUseCase } from "../../../../../application/useCases/CreateUserUseCase";

describe("Create User Controller", () => {
  const { res, next } = getMockRes({});
  const createUserController = new CreateUserController(createUserUseCase);

  it("should handle", async () => {
    const req = getMockReq({
      body: {
        name: "test name",
        email: "test@test.com",
        password: "test123",
      },
    });

    await createUserController.handle(req, res);

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        _name: "test name",
      })
    );
  });
});
