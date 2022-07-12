import { FakeUserRepository } from "../../../infra/repositories/FakeUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

const fakeUsersRepository = new FakeUserRepository();

const createUserUseCase = new CreateUserUseCase(fakeUsersRepository);

export { createUserUseCase };
