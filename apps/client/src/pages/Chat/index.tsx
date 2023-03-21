import React, { useMemo, useState } from 'react'
import MessageInput from '../../components/MessageInput'
import MessageList from '../../components/MessageList'
import socket from '../../socket'

import './style.css'

export type MessageItem = {
  message: string
  auth: 'server' | 'user'
  timestamp: number
}

const Chat = () => {
  const [messageList, setMessageList] = useState<MessageItem[]>([])

  const appendUserMessageToList = (message: string) => {
    const newMessage: MessageItem = {
      message,
      auth: 'user',
      timestamp: Date.now()
    }

    setMessageList(oldMessageList => {
      const draftMessageList = [newMessage, ...oldMessageList]
      return draftMessageList
    })
  }

  useMemo(() => {
    socket.on('server message', (socket) => {
      console.log('msg:', socket)
      appendServerMessageToList(socket)
    })
  }, [])

  const appendServerMessageToList = (message: string) => {
    const newMessage: MessageItem = {
      message,
      auth: 'server',
      timestamp: Date.now()
    }

    setMessageList(oldMessageList => {
      const draftMessageList = [newMessage, ...oldMessageList]
      return draftMessageList
    })
  }

  return (
    <div
      className='container'
      data-testid='page-chat'
    >
      <div className='chat-box'>
        <MessageList messageList={messageList} />
        <MessageInput appendMessage={appendUserMessageToList} />
      </div>
    </div>
  )
}

export default Chat
