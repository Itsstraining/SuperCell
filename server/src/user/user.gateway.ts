import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { UserService } from './user.service';


@WebSocketGateway()
export class UserGateway {
  constructor(private readonly userService: UserService) { }

}
