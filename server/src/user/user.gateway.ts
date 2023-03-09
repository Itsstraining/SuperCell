import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { UserService } from './user.service';

@WebSocketGateway({ cors: true })
export class UserGateway {
  constructor(private readonly userService: UserService) {}

  @WebSocketServer() server;

  handleConnection(client: any, ...args: any[]) {
    console.log('client connected', client.id);
  }

  handleDisconnect(client: any) {
    console.log('client  disconnected', client.id);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any) {
    const email = payload.email;
    console.log(email);
    console.log('message', payload);
    this.server.emit('message' + email, payload);
    
  }
}
