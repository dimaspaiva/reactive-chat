import { Server as IOServer } from 'socket.io'

export const addEventsListeners = (websocket: IOServer): void => {
  websocket.on('connection', (socket) => {
    const username = socket.handshake.auth.name

    socket.emit('server message', `Hi ${username}! Welcome to reactive chat!`)

    socket.on('message', (message: string) => {
      console.log('received a message', message)
      socket
        .emit('server message', 'automatic message, to-do implement decision tree')
    })
  })
}
