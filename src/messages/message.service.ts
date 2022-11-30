import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Messages } from './messages.model';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Messages)
    private messageModel: typeof Messages,
  ) {}

  async findAll(): Promise<Messages[]> {
    return this.messageModel.findAll();
  }

  findOne(id: string): Promise<Messages> {
    return this.messageModel.findOne({
      where: {
        id,
      },
    });
  }
}