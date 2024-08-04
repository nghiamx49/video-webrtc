import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ServerRepository } from '@cores/repositories/server.repository';
import { Prisma, Server } from '@prisma/client';

@Injectable()
export class AppService {
  public constructor(
    private configService: ConfigService,
    private serverRepository: ServerRepository,
  ) {}

  async getHello(): Promise<Array<Server>> {
    // await this.serverRepository.createUser({
    //   name: 'abc',
    //   imageUrl: 'abc',
    //   inviteCode: 'abc',
    //   profileId: 'abc',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // });
    return this.serverRepository.get({});
  }
}
