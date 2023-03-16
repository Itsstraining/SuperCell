import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class SheetFileGateway {
  @WebSocketServer() server;

  handleConnection(client: any, ...args: any[]) {
    console.log('client connected', client.id);
  }

  handleDisconnect(client: any) {
    console.log('client disconnected', client.id);
  }

  @SubscribeMessage('sheetfile')
  handleMessage(client: any, payload: any): any {
    console.log('msg receivced:', payload._id);
    const _id = payload._id;
    if (payload.user) {
      console.log(`${payload.user.email} is joined room : ${_id}`);
      this.server.emit('sheetfile-' + _id, payload);
    }
    if (payload.change) {
      console.log('file has been changed');
      this.server.emit('sheetfile-' + _id, payload);
    }
  }
}
