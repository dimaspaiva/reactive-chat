import { render } from '@testing-library/react'
import React from 'react'
import MessageList from '.'
import { MessageItem } from '../../pages/Chat'

describe('Message List', () => {
  it('should render the container without messages', () => {
    const { getByTestId, container } = render(<MessageList messageList={[]} />)

    expect(getByTestId('message-list')).toBeTruthy()
    expect(container.getElementsByClassName('message-list_message-container')).toHaveLength(0)
  })

  it('should render the container with messages, one from user and one from server', () => {
    const mockedMessagesList: MessageItem[] = [
      {
        auth: 'user',
        message: 'user test message',
        timestamp: Date.now()
      }, {
        auth: 'server',
        message: 'server test message',
        timestamp: Date.now()
      },
    ]
    const { container } = render(<MessageList messageList={mockedMessagesList} />)

    expect(container.getElementsByClassName('message-list_message-container')).toHaveLength(2)
    expect(container.getElementsByClassName('user')).toHaveLength(1)
    expect(container.getElementsByClassName('server')).toHaveLength(1)
  })
})
