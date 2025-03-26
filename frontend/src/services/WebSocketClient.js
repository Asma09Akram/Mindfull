// WebSocketClient.js
import { useState, useEffect } from 'react';

const WebSocketClient = () => {
  const [ws, setWs] = useState(null);
  const RECONNECT_TIMEOUT = 3000;

  const connect = () => {
    const websocket = new WebSocket('ws://localhost:5000/ws');

    websocket.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    websocket.onclose = () => {
      console.log('Connection closed. Attempting to reconnect...');
      setTimeout(connect, RECONNECT_TIMEOUT);
    };

    websocket.onerror = (error) => {
      console.log('WebSocket error:', error);
      websocket.close();
    };

    setWs(websocket);
  };

  useEffect(() => {
    connect();
    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  return ws;
};

export default WebSocketClient;
