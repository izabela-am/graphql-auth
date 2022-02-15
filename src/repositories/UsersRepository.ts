import { User } from "src/schemas/User";
import { database } from "src/database";
import { IUsersRepository } from "./interfaces";

export class UsersRepository implements IUsersRepository {
  create(userData: User): void {
    database.users.push(userData);
  }

  findById(id: string): User | undefined {
    const user = database.users.find(user => user.id === id);

    return user;
  }

  get(): Array<User> {
    return database.users;
  }
}
