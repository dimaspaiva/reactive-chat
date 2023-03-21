import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Socket } from 'socket.io-client'

import socket from '../../setup/socket'

import './style.css'

export type MessageInputProps = {
  appendMessage: (message: string) => void
  socket: Socket
}

const MessageInput = (props: MessageInputProps) => {
  const { appendMessage, socket } = props

  const [message, setMessage] = useState('')

  const updateMessage = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value
    setMessage(inputValue)
  }

  const sendMessage = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    socket.emit('message', message)
    appendMessage(message)
    setMessage('')
  }

  const disableButton = Boolean(!message)

  return (
    <form className='chat-input_container'
      onSubmit={sendMessage}
    >
      <input
        className='chat-input_input'
        type="text"
        name="message-input"
        id="message-input"
        onChange={updateMessage}
        value={message}
        data-testid='message-input'
      />
      <button
        className='chat-input_send'
        type="submit"
        data-testid='send-message'
        disabled={disableButton}
      >send</button>
    </form>
  )
}

export default MessageInput
