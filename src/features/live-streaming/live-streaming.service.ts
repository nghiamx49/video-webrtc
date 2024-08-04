import { WebSocket as Socket, WebSocketServer } from 'ws';
import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer as WSServer,
} from '@nestjs/websockets';

@WebSocketGateway({
  path: '/livestream',
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
export class LiveStreamingService {
  @WSServer() server: WebSocketServer;

  @SubscribeMessage('message')
  handleIncomingMessage(client: Socket, data: any): void {
    this.server.clients.forEach((each: Socket) => {
      if (
        JSON.stringify(each) !== JSON.stringify(client) &&
        each.readyState === Socket.OPEN
      ) {
        each.send(JSON.stringify(data));
      }
    });
  }
}
