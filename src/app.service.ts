import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ServerRepository } from '@cores/repositories/server.repository';
import { Server } from '@prisma/client';
import { PluralResponseModel } from '@common/models';

@Injectable()
export class AppService {
  public constructor(
    private configService: ConfigService,
    private serverRepository: ServerRepository,
  ) {}

  async getHello(): Promise<PluralResponseModel<Server>> {
    // await this.serverRepository.createUser({
    //   name: 'abc',
    //   imageUrl: 'abc',
    //   inviteCode: 'abc',
    //   profileId: 'abc',
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // });
    const data = await this.serverRepository.get({});

    return {
      data,
      totalPages: data.length,
      currentPage: 1,
      count: data.length,
      message: 'Get List success',
      succeed: true,
    };
  }
}
