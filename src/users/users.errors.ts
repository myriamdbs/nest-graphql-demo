import { ApolloError } from 'apollo-server-express';

export class UserNotFoundError extends ApolloError {
  id: string;
  constructor(id: string) {
    super(`The user with id: ${id} doesn't exist`, 'USER_NOT_FOUND');
    this.id = id;
  }
}
