import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';

@Module({
  providers: [],
  imports: [],
  controllers: [ServerController],
  exports: [ServerController],
})
export class ServerModule {}
