import { Module } from '@nestjs/common';
import { PrismaService } from './dao/prisma.service';
import { ServerRepository } from '@cores/repositories/server.repository';

@Module({
  providers: [PrismaService, ServerRepository],
  exports: [PrismaService, ServerRepository],
})
export class CoreModule {}
