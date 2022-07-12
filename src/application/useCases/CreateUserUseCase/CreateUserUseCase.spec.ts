import { getMockReq, getMockRes } from "@jest-mock/express";
import { createUserUseCase } from ".";
import { ICreateUserDTO } from "./ICreateUserDTO";

describe("Create User Use Case", () => {
  const { res, next } = getMockRes({});

  it("should execute", async () => {
    const userDTO = {
      name: "test name",
      email: "test@test.com",
      password: "test123",
    } as ICreateUserDTO;

    const user = await createUserUseCase.execute(userDTO);

    expect(user.id).toBeDefined();
  });
});
