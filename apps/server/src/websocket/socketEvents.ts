import { Server as IOServer } from 'socket.io'
import { generateMessage } from '../chat/decisionTree'
import { buildSalutation, mainDecisionTree } from '../chat/flows'
import { handleMessage } from './handleMessage'

export const addEventsListeners = (websocket: IOServer): void => {
  websocket.on('connection', (socket) => {
    const { name } = socket.handshake.auth

    const firstInteraction = buildSalutation(name)
    const decisionTree = mainDecisionTree
    socket.emit('server message', firstInteraction)

    socket.on('message', (message: string) => {
      console.log(`[MSG] '${message}' from ${name}`)

      const { response, selectedOption } = handleMessage(message, decisionTree)
      socket.emit('server message', response)

      setTimeout(() => {
        socket.emit('server message', generateMessage(mainDecisionTree))
      }, 500)
    })
  })
}
