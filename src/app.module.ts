import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from '@cores/core.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiveStreamingModule } from './features/live-streaming/live-streaming.module';

@Module({
  imports: [LiveStreamingModule, CoreModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
