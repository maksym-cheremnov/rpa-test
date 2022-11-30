import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Messages } from './messages/messages.model';
import { MessagesModule } from './messages/message.module';

@Module({
  imports: [ConfigModule.forRoot(),
  SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_HOST,
    password: process.env.DB_HOST,
    database: process.env.DB_HOST,
    models: [Messages],
  }), MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
