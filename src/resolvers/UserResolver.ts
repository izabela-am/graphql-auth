import { Resolver, Query, Mutation } from "type-graphql";

import { User } from '../schemas/User';

import { CreateUserService } from "src/services/CreateUserService";
import { ListAllUsersService } from '../services/ListAllUsersService';

import { ICreateUser } from "./interfaces";
import { UsersRepository } from '../repositories/UsersRepository';

@Resolver(of => User)
export class UserResolver {
  private createUser: CreateUserService;
  private listAllUsers: ListAllUsersService;

  constructor() {
    const usersRepository = new UsersRepository();

    this.createUser = new CreateUserService(usersRepository);
    this.listAllUsers = new ListAllUsersService(usersRepository);
  }

  @Query(returns => [User])
  get(): Array<User> {
    const users = this.listAllUsers.run();

    return users;
  }

  @Mutation()
  async create({ username, email, password }: ICreateUser): Promise<void> {
    await this.createUser.run({ username, email, password });
  }
}