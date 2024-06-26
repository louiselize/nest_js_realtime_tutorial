import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.controller';

@Module({
  imports: [ConfigModule,PollsModule], 
  controllers: [PollsController],
  providers: [],
})
export class PollsModule {}