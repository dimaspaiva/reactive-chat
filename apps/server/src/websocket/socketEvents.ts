import { Server as IOServer } from 'socket.io'
import { formatFirstMessage } from '../chat/flows'

export const addEventsListeners = (websocket: IOServer): void => {
  websocket.on('connection', (socket) => {
    const { name, document, id } = socket.handshake.auth

    const firstInteraction = formatFirstMessage({ name, document, id })
    socket.emit('server message', firstInteraction)

    socket.on('message', (message: string) => {
      console.log('received a message', message)
      socket
        .emit('server message', 'automatic message, to-do implement decision tree')
    })
  })
}
