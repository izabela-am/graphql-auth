import { UsersRepository } from "src/repositories/UsersRepository";

import { User } from "src/schemas/User";

export class ListAllUsersService {
  constructor(private usersRepository: UsersRepository) { }

  run(): Array<User> {
    const users = this.usersRepository.get();

    return users;
  }
}