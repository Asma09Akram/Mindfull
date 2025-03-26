// socket.js
import WebSocketClient from './WebSocketClient';

export const initSocket = () => {
  const ws = WebSocketClient();
  
  if (!ws) {
    console.log('WebSocket connection not available');
    return null;
  }

  return ws;
};
