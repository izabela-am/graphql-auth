import { User } from "src/schemas/User";

export interface IUsersRepository {
  create(user: Omit<User, 'isAdmin'>): void;
  get(): Array<User>;
  findById(id: string): User | undefined;
}
