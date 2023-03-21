import { Server as HTTPServer } from 'http'
import { Server as IOServer } from 'socket.io'
import { addEventsListeners } from './socketEvents'

export const insertWebSocketOnServer = (server: HTTPServer): void => {
  const webSocketServer = new IOServer(server, {
    cors: {
      allowedHeaders: '*'
    }
  })
  addEventsListeners(webSocketServer)
}
