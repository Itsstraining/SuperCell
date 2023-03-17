import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class SheetFileGateway {
  @WebSocketServer() server;

  handleConnection(client: any) {
    console.log('client connected', client.id);
  }

  handleDisconnect(client: any) {
    console.log('client disconnected', client.id);
    this.server.emit('clients', { client: client.id });
  }

  @SubscribeMessage('sheetfile')
  handleMessage(client: any, payload: any): any {
    console.log('msg receivced:', payload._id);
    const _id = payload._id;
    if (payload._id) {
      if (payload.user) {
        console.log(`${payload.user.email} is joined room : ${_id}`);
        let newPayload = {
          ...payload,
          client: client.id,
        };
        this.server.emit('sheetfile-' + _id, newPayload);
      }
      if (payload.change) {
        console.log('file has been changed1');
        let newPayload = {
          ...payload,
          client: client.id,
        };
        this.server.emit('sheetfile-' + _id, newPayload);
      }
    }
  }
}
