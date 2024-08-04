import { Injectable } from '@nestjs/common';
import { Prisma, Server } from '@prisma/client';

import { PrismaService } from '../dao/prisma.service';
import { BaseRepoAbstraction } from '@cores/repositories/base-repo.abstraction';

@Injectable()
export class ServerRepository extends BaseRepoAbstraction<
  Server,
  Prisma.ServerDelegate,
  Prisma.ServerCreateInput,
  Prisma.ServerWhereInput,
  Prisma.ServerOrderByWithRelationInput,
  Prisma.ServerWhereUniqueInput
> {
  public constructor(private prismaService: PrismaService) {
    super();
    this.collection = prismaService.server;
  }
}
