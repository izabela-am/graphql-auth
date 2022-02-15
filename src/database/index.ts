import { v4 } from "uuid";
import { IDatabase } from "./interface";

export const database: IDatabase = {
  users: [
    {
      id: v4(),
      username: 'DogLover',
      email: 'doglover@email.com',
      password: '7446a8184fef62fea0b894d1af87ebd9', // password is: dogsareawesome
      isAdmin: true
    }
  ]
};
