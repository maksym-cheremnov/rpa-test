import { Controller, Get } from '@nestjs/common';
import { MessageService } from './messages/message.service';
import { Messages } from './messages/messages.model';

@Controller()
export class AppController {
  constructor(private readonly mesService: MessageService) { }

  @Get()
  getAllReportMessages(): Promise<Messages[]> {
    return this.mesService.findAll();
  }
}
