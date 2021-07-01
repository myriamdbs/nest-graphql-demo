import { Args, Query, Resolver } from '@nestjs/graphql';
import { User } from './users.entity';
import { UsersService } from './users.service';
import * as errorHandler from './users.errors';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new errorHandler.UserNotFoundError(id);
    }
    return user;
  }
}
