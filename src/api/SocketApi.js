import socket from 'socket.io-client';

class SocketApi {
  init(token) {
    this.socket = socket('/', {
      query: {
        token
      }
    });

    this.socket.on('connect', () => {
      console.log('connected');
    });
  }

  handleMessages(handler) {
    this.socket.on('message', (message) => handler(JSON.parse(message)));
  }
}

export default new SocketApi();
