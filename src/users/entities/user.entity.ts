import { User } from '@prisma/client';

export class UserEnity implements User {
  id: number;
  email: string;
  name: string;
  admin: boolean;
  createdAt: Date;
}
