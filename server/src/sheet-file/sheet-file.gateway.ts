import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

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
    const _id = payload._id;
    console.log(_id);
    this.server.emit('sheetfile-' + _id, payload);
  }
}
