import { Server as IOServer } from 'socket.io'
import { buildSalutation } from '../chat/flows'

export const addEventsListeners = (websocket: IOServer): void => {
  websocket.on('connection', (socket) => {
    const { name } = socket.handshake.auth

    const firstInteraction = buildSalutation(name)
    socket.emit('server message', firstInteraction)

    socket.on('message', (message: string) => {
      console.log('received a message', message)
      socket
        .emit('server message', 'automatic message, to-do implement decision tree')
    })
  })
}
