import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import MessageInput from '../../components/MessageInput'
import MessageList from '../../components/MessageList'
import UserContext from '../../contexts/UserContext'
import createSocket from '../../setup/socket'

import './style.css'

export type MessageItem = {
  message: string
  auth: 'server' | 'user'
  timestamp: number
}

const Chat = () => {
  const [messageList, setMessageList] = useState<MessageItem[]>([])
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const socket = createSocket(user)

  useEffect(() => {
    if (!user) {
      navigate('/')
    } else {
      socket.connect()
    }
  }, [])

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
        <MessageInput
          socket={socket}
          appendMessage={appendUserMessageToList}
        />
      </div>
    </div>
  )
}

export default Chat
