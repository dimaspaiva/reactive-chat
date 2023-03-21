import React from 'react'

import { MessageItem } from '../../pages/Chat'

import './style.css'

export type MessageListProps = {
  messageList: MessageItem[]
}

const MessageList = (props: MessageListProps) => {
  const { messageList } = props

  const formatDate = (date: number) => {
    const messageDate = new Date(date)
    const month = (messageDate.getMonth() + 1).toString().padStart(2, '0')
    const day = (messageDate.getDate() + 1).toString().padStart(2, '0')

    return `${day}/${month}`
  }

  const parseMessage = (message: string) => {
    return message.split('\n').map((messageChunk) => (
      <p className='message-list_message-chunk'>
        {messageChunk.replace('\\n', '')}
      </p>
    ))
  }

  return (
    <div
      className='message-list_container'
      data-testid='message-list'
    >
      {messageList.map(message => (
        <div
          key={`${message.timestamp}-${message.auth}`}
          className={`message-list_message-container  ${message.auth}`}
        >
          <div>
            {parseMessage(message.message)}
          </div>
          {/* <p className='message-list_message'>{message.message} </p> */}
          <label className='message-list_message-timestamp'>{formatDate(message.timestamp)}</label>
        </div>
      )
      )}
    </div>)
}

export default MessageList
