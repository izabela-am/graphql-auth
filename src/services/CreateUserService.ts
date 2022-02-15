import { v4 } from "uuid";
import { hash } from "bcryptjs";

import { IUsersRepository } from "src/repositories/interfaces";
import { ICreateUser } from "src/resolvers/interfaces";
import { User } from "src/schemas/User";

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) { }

  async run({ username, email, password }: ICreateUser): Promise<void> {
    const user: Omit<User, 'isAdmin'> = {
      id: v4(),
      username,
      email,
      password: await hash(password, 8)
    };

    const userAlreadyExists = this.usersRepository.findById(user.id);
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    this.usersRepository.create(user);
  }
}
