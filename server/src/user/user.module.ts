import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserGateway } from './user.gateway';
import { UserController } from './user.controller';

@Module({
  providers: [UserGateway, UserService],
  controllers: [UserController]
})
export class UserModule { }
