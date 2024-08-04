import { Module } from '@nestjs/common';
import { LiveStreamingService } from './live-streaming.service';

@Module({
  providers: [LiveStreamingService],
  exports: [LiveStreamingService],
})
export class LiveStreamingModule {}
