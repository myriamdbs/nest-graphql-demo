/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { User } from './users.entity';

const users: User[] = require('../../users.json');

@Injectable()
export class UsersService {
  findOne(id: string): User | undefined {
    return users.find((user) => id === user.id);
  }
}
