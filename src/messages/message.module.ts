import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MessageService } from './message.service';
import { Messages } from './messages.model';

@Module({
  imports: [SequelizeModule.forFeature([Messages])],
  providers: [MessageService],
})
export class MessagesModule {}