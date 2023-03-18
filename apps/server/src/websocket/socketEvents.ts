import { Server as IOServer } from 'socket.io'

export const addEventsListeners = (websocket: IOServer): void => {
  websocket.on('connection', (socket) => {
    socket.emit('connected!')
  })
}
